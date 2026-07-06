/**
 * Mood Mark - persistence repository.
 *
 * Wraps localStorage (or any injected storage) so the store never talks to
 * the browser API directly. When persisted JSON is missing, the wrong shape,
 * or unparseable, the repo throws a tagged error the store converts into a
 * recovery signal (BOOTSTRAP_RECOVER) instead of crashing the shell.
 */

import {
  DEFAULT_PREFERENCES,
  type MoodEntry,
  type MoodMarkPreferences,
  type PersistedMoodMarkSnapshot,
} from './mood-mark.types';

export const STORAGE_KEY = 'mood-mark:v1';

export type MoodMarkStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

export const defaultStorage: MoodMarkStorage = (() => {
  if (typeof globalThis !== 'undefined' && (globalThis as { localStorage?: MoodMarkStorage }).localStorage) {
    return (globalThis as { localStorage?: MoodMarkStorage }).localStorage!;
  }
  const mem = new Map<string, string>();
  return {
    getItem: (key: string) => (mem.has(key) ? mem.get(key)! : null),
    setItem: (key: string, value: string) => {
      mem.set(key, value);
    },
    removeItem: (key: string) => {
      mem.delete(key);
    },
  };
})();

export class MoodMarkCorruptSnapshotError extends Error {
  public readonly reason: string;
  constructor(reason: string) {
    super(`Mood Mark persisted snapshot is unusable: ${reason}`);
    this.name = 'MoodMarkCorruptSnapshotError';
    this.reason = reason;
  }
}

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const parseMoodEntry = (raw: unknown): MoodEntry | null => {
  if (!isObject(raw)) return null;
  const { id, mood, note, createdAt } = raw;
  if (typeof id !== 'string' || id.length === 0) return null;
  if (typeof mood !== 'string') return null;
  if (typeof note !== 'string') return null;
  if (typeof createdAt !== 'number' || !Number.isFinite(createdAt)) return null;
  return { id, mood, note, createdAt };
};

const parsePreferences = (raw: unknown): MoodMarkPreferences => {
  if (!isObject(raw)) {
    return { ...DEFAULT_PREFERENCES };
  }
  const panel = raw.activePanel;
  const selected = raw.selectedEntryId;
  const next: MoodMarkPreferences = { ...DEFAULT_PREFERENCES };
  if (panel === 'records' || panel === 'insights' || panel === 'editor') {
    next.activePanel = panel;
  }
  if (typeof selected === 'string' || selected === null) {
    next.selectedEntryId = selected;
  }
  return next;
};

export const parseSnapshot = (raw: string | null): PersistedMoodMarkSnapshot => {
  if (raw === null || raw === '') {
    throw new MoodMarkCorruptSnapshotError('empty-storage');
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new MoodMarkCorruptSnapshotError(
      `json-parse-error: ${err instanceof Error ? err.message : 'unknown'}`,
    );
  }
  if (!isObject(parsed)) {
    throw new MoodMarkCorruptSnapshotError('not-an-object');
  }
  if (parsed.version !== 1) {
    throw new MoodMarkCorruptSnapshotError(`unsupported-version:${String(parsed.version)}`);
  }
  const entriesRaw = Array.isArray(parsed.entries) ? parsed.entries : [];
  const entries: MoodEntry[] = [];
  for (let i = 0; i < entriesRaw.length; i += 1) {
    const parsedEntry = parseMoodEntry(entriesRaw[i]);
    if (parsedEntry) {
      entries.push(parsedEntry);
    }
  }
  return {
    version: 1,
    preferences: parsePreferences(parsed.preferences),
    entries,
  };
};

export const emptySnapshot = (
  preferences: MoodMarkPreferences = DEFAULT_PREFERENCES,
): PersistedMoodMarkSnapshot => ({
  version: 1,
  preferences: { ...preferences },
  entries: [],
});

export interface MoodMarkRepo {
  load(): PersistedMoodMarkSnapshot;
  save(snapshot: PersistedMoodMarkSnapshot): void;
  clear(): void;
}

export const createMoodMarkRepo = (
  storage: MoodMarkStorage = defaultStorage,
): MoodMarkRepo => ({
  load() {
    const raw = storage.getItem(STORAGE_KEY);
    return parseSnapshot(raw);
  },
  save(snapshot) {
    storage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  },
  clear() {
    storage.removeItem(STORAGE_KEY);
  },
});