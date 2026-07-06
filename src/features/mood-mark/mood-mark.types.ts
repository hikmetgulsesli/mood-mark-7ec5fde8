/**
 * Mood Mark - shared types for the app shell, state, and persistence.
 *
 * Story US-001 owns the shared types used by the store, repository, and
 * downstream story surfaces. Anything that wants to talk about "which panel
 * is active", "what is selected", or "did storage load cleanly" imports from
 * here so the contracts stay in one place.
 */

export type ActivePanel = 'records' | 'insights' | 'editor';

export type StorageStatus =
  | 'idle'
  | 'loading'
  | 'ready'
  | 'error'
  | 'recovering';

export interface MoodEntry {
  id: string;
  mood: string;
  note: string;
  createdAt: number;
}

export interface MoodMarkPreferences {
  activePanel: ActivePanel;
  selectedEntryId: string | null;
}

export interface PersistedMoodMarkSnapshot {
  version: 1;
  preferences: MoodMarkPreferences;
  entries: MoodEntry[];
}

export interface MoodMarkState {
  activePanel: ActivePanel;
  selectedEntryId: string | null;
  storageStatus: StorageStatus;
  lastError: string | null;
  itemCount: number;
  entries: MoodEntry[];
  preferences: MoodMarkPreferences;
}

export type MoodMarkAction =
  | { type: 'BOOTSTRAP_START' }
  | { type: 'BOOTSTRAP_HYDRATE'; payload: PersistedMoodMarkSnapshot }
  | { type: 'BOOTSTRAP_RECOVER'; payload: { reason: string } }
  | { type: 'SET_ACTIVE_PANEL'; payload: { panel: ActivePanel } }
  | { type: 'SELECT_ENTRY'; payload: { id: string | null } }
  | { type: 'OPEN_EDITOR'; payload: { id: string | null } }
  | { type: 'CLOSE_EDITOR' }
  | { type: 'PERSIST_OK' }
  | { type: 'PERSIST_FAIL'; payload: { message: string } };

export const ACT_APP_STATE_BOOTSTRAP = 'ACT_APP_STATE_BOOTSTRAP';

export const DEFAULT_PREFERENCES: MoodMarkPreferences = {
  activePanel: 'records',
  selectedEntryId: null,
};

export const INITIAL_STATE: MoodMarkState = {
  activePanel: DEFAULT_PREFERENCES.activePanel,
  selectedEntryId: DEFAULT_PREFERENCES.selectedEntryId,
  storageStatus: 'idle',
  lastError: null,
  itemCount: 0,
  entries: [],
  preferences: DEFAULT_PREFERENCES,
};

export const MOOD_MARK_BOOTSTRAP_ACTION_ID = ACT_APP_STATE_BOOTSTRAP;