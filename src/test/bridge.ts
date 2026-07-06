/**
 * Mood Mark - test bridge.
 *
 * Helpers tests use to drive the store without going through React. The
 * bridge exposes a reducer wrapper so reducer tests can stay synchronous
 * while React-bound flows can still use the full provider.
 */

import {
  INITIAL_STATE,
  type MoodMarkAction,
  type MoodMarkState,
} from '../features/mood-mark/mood-mark.types';
import { moodMarkReducer } from '../features/mood-mark/mood-mark.store';
import {
  emptySnapshot,
  MoodMarkCorruptSnapshotError,
  parseSnapshot,
  STORAGE_KEY,
} from '../features/mood-mark/mood-mark.repo';
import { buildInMemoryStorage, fixtureSnapshot } from '../__fixtures__/mood-mark.fixture';

export interface ReduceStep {
  label: string;
  before: MoodMarkState;
  action: MoodMarkAction;
  after: MoodMarkState;
}

export const reduce = (state: MoodMarkState, action: MoodMarkAction): MoodMarkState =>
  moodMarkReducer(state, action);

export const reduceAll = (steps: readonly ReduceStep[]): MoodMarkState[] => {
  let state: MoodMarkState = INITIAL_STATE;
  const trace: MoodMarkState[] = [state];
  for (const step of steps) {
    state = moodMarkReducer(state, step.action);
    trace.push(state);
  }
  return trace;
};

export interface StorageBridge {
  set: (raw: string | null) => void;
  get: () => string | null;
  reset: () => void;
  hydrateFromSnapshot: (raw: string | null) => ReturnType<typeof parseSnapshot>;
  /** A safe bootstrap loader returning an empty snapshot even when storage is unusable. */
  safeLoader: () => ReturnType<typeof emptySnapshot>;
}

export const createStorageBridge = (initial: Record<string, string> = {}): StorageBridge => {
  const storage = buildInMemoryStorage(initial);
  return {
    set: (raw) => {
      if (raw === null) storage.removeItem(STORAGE_KEY);
      else storage.setItem(STORAGE_KEY, raw);
    },
    get: () => storage.getItem(STORAGE_KEY),
    reset: () => storage.__raw.clear(),
    hydrateFromSnapshot: (raw) => parseSnapshot(raw),
    safeLoader: () => {
      const raw = storage.getItem(STORAGE_KEY);
      try {
        return parseSnapshot(raw);
      } catch (err) {
        if (err instanceof MoodMarkCorruptSnapshotError) {
          return emptySnapshot();
        }
        throw err;
      }
    },
  };
};

export const SAMPLE_SNAPSHOT = fixtureSnapshot();

export const SAFE_INITIAL_STATE: MoodMarkState = { ...INITIAL_STATE };