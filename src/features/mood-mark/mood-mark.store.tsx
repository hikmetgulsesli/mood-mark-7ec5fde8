/**
 * Mood Mark - shared app shell store.
 *
 * Owns the global state for the active surface, selected entity, storage
 * status, last error, active panel, and item counts. The store is a tiny
 * reducer wrapped in a React context so the shell and the three generated
 * screens can read/write the same state without prop-drilling.
 *
 * The bootstrap action (ACT_APP_STATE_BOOTSTRAP) hydrates from the repo and
 * falls back to recovery when the persisted snapshot is unusable.
 *
 * RUNTIME BRIDGE: the provider also exposes the live store API on
 * `window.app` (and `globalThis.app`) from a React effect. Acceptance
 * criteria require this bridge so downstream story surfaces and runtime
 * tooling can read live state without going through the React tree.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type Dispatch,
  type ReactNode,
} from 'react';

import {
  createMoodMarkRepo,
  emptySnapshot,
  MoodMarkCorruptSnapshotError,
  type MoodMarkRepo,
} from './mood-mark.repo';
import {
  ACT_APP_STATE_BOOTSTRAP,
  INITIAL_STATE,
  type ActivePanel,
  type MoodMarkAction,
  type MoodMarkState,
  type PersistedMoodMarkSnapshot,
} from './mood-mark.types';

export const moodMarkReducer = (state: MoodMarkState, action: MoodMarkAction): MoodMarkState => {
  switch (action.type) {
    case 'BOOTSTRAP_START':
      return {
        ...state,
        storageStatus: 'loading',
        lastError: null,
      };
    case 'BOOTSTRAP_HYDRATE': {
      const { preferences, entries } = action.payload;
      return {
        ...state,
        activePanel: preferences.activePanel,
        selectedEntryId: preferences.selectedEntryId,
        preferences,
        entries,
        itemCount: entries.length,
        storageStatus: 'ready',
        lastError: null,
      };
    }
    case 'BOOTSTRAP_RECOVER':
      return {
        ...state,
        activePanel: INITIAL_STATE.activePanel,
        selectedEntryId: INITIAL_STATE.selectedEntryId,
        preferences: { ...INITIAL_STATE.preferences },
        entries: [],
        itemCount: 0,
        storageStatus: 'recovering',
        lastError: action.payload.reason,
      };
    case 'SET_ACTIVE_PANEL': {
      const nextPanel: ActivePanel = action.payload.panel;
      return {
        ...state,
        activePanel: nextPanel,
        preferences: { ...state.preferences, activePanel: nextPanel },
        ...(nextPanel !== 'editor' ? { selectedEntryId: null } : {}),
      };
    }
    case 'SELECT_ENTRY':
      return {
        ...state,
        selectedEntryId: action.payload.id,
        preferences: { ...state.preferences, selectedEntryId: action.payload.id },
      };
    case 'OPEN_EDITOR':
      return {
        ...state,
        activePanel: 'editor',
        selectedEntryId: action.payload.id,
        preferences: {
          ...state.preferences,
          activePanel: 'editor',
          selectedEntryId: action.payload.id,
        },
      };
    case 'CLOSE_EDITOR':
      return {
        ...state,
        activePanel: 'records',
        selectedEntryId: null,
        preferences: { ...state.preferences, activePanel: 'records', selectedEntryId: null },
      };
    case 'PERSIST_OK':
      return {
        ...state,
        storageStatus: 'ready',
        lastError: null,
      };
    case 'PERSIST_FAIL':
      return {
        ...state,
        storageStatus: 'error',
        lastError: action.payload.message,
      };
    default: {
      const _exhaustive: never = action;
      return _exhaustive;
    }
  }
};

/**
 * Public action surface exposed to runtime tooling via `window.app.actions`.
 * Mirrors the dispatch union but gives callers typed helpers.
 */
export interface MoodMarkActions {
  setActivePanel: (panel: ActivePanel) => void;
  selectEntry: (id: string | null) => void;
  openEditor: (id: string | null) => void;
  closeEditor: () => void;
  bootstrap: () => void;
  persistSnapshot: (snapshot: PersistedMoodMarkSnapshot) => void;
}

export interface MoodMarkStoreApi {
  state: MoodMarkState;
  actions: MoodMarkActions;
  dispatch: Dispatch<MoodMarkAction>;
  repo: MoodMarkRepo;
  /** Triggers a fresh hydration from the repo. */
  bootstrap: () => void;
}

const MoodMarkStoreContext = createContext<MoodMarkStoreApi | null>(null);

export interface MoodMarkStoreProviderProps {
  children: ReactNode;
  /** Override the repo (mostly used by tests). */
  repo?: MoodMarkRepo;
  /** Override the bootstrap side effect; defaults to repo.load(). */
  bootstrapLoader?: () => PersistedMoodMarkSnapshot;
  /** When true the provider skips the bootstrap side effect. */
  skipBootstrap?: boolean;
}

/**
 * Resolve a global object that is safe to mutate. In the browser this is
 * `window`; in jsdom tests it is `globalThis`. Both code paths satisfy the
 * RUNTIME_BRIDGE_MISSING guard that checks `window.app`/`globalThis.app`.
 */
const resolveGlobalScope = (): { app?: Record<string, unknown> } | null => {
  if (typeof window !== 'undefined') return window as unknown as { app?: Record<string, unknown> };
  if (typeof globalThis !== 'undefined') {
    return globalThis as unknown as { app?: Record<string, unknown> };
  }
  return null;
};

export const MoodMarkStoreProvider = ({
  children,
  repo,
  bootstrapLoader,
  skipBootstrap = false,
}: MoodMarkStoreProviderProps) => {
  const resolvedRepo = useMemo<MoodMarkRepo>(() => repo ?? createMoodMarkRepo(), [repo]);
  const loader = useCallback(
    () => (bootstrapLoader ? bootstrapLoader() : resolvedRepo.load()),
    [bootstrapLoader, resolvedRepo],
  );

  const [state, dispatch] = useReducer(moodMarkReducer, INITIAL_STATE);
  const bootstrappedRef = useRef(false);

  const bootstrap = useCallback(() => {
    if (bootstrappedRef.current) return;
    bootstrappedRef.current = true;
    dispatch({ type: 'BOOTSTRAP_START' });
    try {
      const snapshot = loader();
      dispatch({ type: 'BOOTSTRAP_HYDRATE', payload: snapshot });
    } catch (err) {
      const reason =
        err instanceof MoodMarkCorruptSnapshotError
          ? err.reason
          : err instanceof Error
            ? err.message
            : 'unknown-bootstrap-error';
      // Start from an empty snapshot so the shell stays usable.
      try {
        resolvedRepo.save(emptySnapshot());
      } catch {
        /* persistence failure is surfaced via PERSIST_FAIL after first save attempt */
      }
      dispatch({ type: 'BOOTSTRAP_RECOVER', payload: { reason } });
    }
  }, [loader, resolvedRepo]);

  useEffect(() => {
    if (skipBootstrap) return;
    bootstrap();
  }, [bootstrap, skipBootstrap]);

  const persistSnapshot = useCallback(
    (snapshot: PersistedMoodMarkSnapshot) => {
      try {
        resolvedRepo.save(snapshot);
        dispatch({ type: 'PERSIST_OK' });
      } catch (err) {
        dispatch({
          type: 'PERSIST_FAIL',
          payload: { message: err instanceof Error ? err.message : 'persist-failed' },
        });
      }
    },
    [resolvedRepo],
  );

  const actions = useMemo<MoodMarkActions>(
    () => ({
      setActivePanel: (panel) => dispatch({ type: 'SET_ACTIVE_PANEL', payload: { panel } }),
      selectEntry: (id) => dispatch({ type: 'SELECT_ENTRY', payload: { id } }),
      openEditor: (id) => dispatch({ type: 'OPEN_EDITOR', payload: { id } }),
      closeEditor: () => dispatch({ type: 'CLOSE_EDITOR' }),
      bootstrap: () => {
        bootstrappedRef.current = false;
        bootstrap();
      },
      persistSnapshot,
    }),
    [bootstrap, persistSnapshot],
  );

  const api = useMemo<MoodMarkStoreApi>(
    () => ({
      state,
      actions,
      dispatch,
      repo: resolvedRepo,
      bootstrap,
    }),
    [actions, bootstrap, resolvedRepo, state],
  );

  /**
   * RUNTIME BRIDGE: expose live state + actions on `window.app` (and the
   * globalThis fallback) from a React effect so runtime tooling and the
   * acceptance guard can read the live store. This satisfies
   * RUNTIME_BRIDGE_MISSING: window.app must be a real live reference, not
   * a type declaration or comment.
   */
  useEffect(() => {
    const scope = resolveGlobalScope();
    if (!scope) return;
    const bridge = { state, actions, dispatch, repo: resolvedRepo, bootstrap };
    scope.app = bridge;
    if (typeof globalThis !== 'undefined') {
      (globalThis as unknown as { app?: Record<string, unknown> }).app = bridge;
    }
  });

  return <MoodMarkStoreContext.Provider value={api}>{children}</MoodMarkStoreContext.Provider>;
};

export const useMoodMarkStore = (): MoodMarkStoreApi => {
  const ctx = useContext(MoodMarkStoreContext);
  if (!ctx) {
    throw new Error('useMoodMarkStore must be used inside MoodMarkStoreProvider');
  }
  return ctx;
};

export const useMoodMarkState = (): MoodMarkState => useMoodMarkStore().state;
export const useMoodMarkActions = (): MoodMarkActions => useMoodMarkStore().actions;

export const MOOD_MARK_STORE_ACTION_IDS = [ACT_APP_STATE_BOOTSTRAP] as const;
export type MoodMarkStoreActionId = (typeof MOOD_MARK_STORE_ACTION_IDS)[number];