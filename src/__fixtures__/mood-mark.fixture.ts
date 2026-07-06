/**
 * Mood Mark - test fixtures.
 *
 * Single source of truth for sample entries, preferences, and snapshots used
 * by tests, the test bridge, and runtime recovery flows.
 */

import {
  DEFAULT_PREFERENCES,
  type MoodEntry,
  type MoodMarkPreferences,
  type PersistedMoodMarkSnapshot,
} from '../features/mood-mark/mood-mark.types';
import { STORAGE_KEY } from '../features/mood-mark/mood-mark.repo';

export const fixtureEntry = (overrides: Partial<MoodEntry> = {}): MoodEntry => ({
  id: overrides.id ?? 'entry-fixture',
  mood: overrides.mood ?? 'good',
  note: overrides.note ?? 'fixture note',
  createdAt: overrides.createdAt ?? 1_700_000_000_000,
});

export const fixtureEntries = (): MoodEntry[] => [
  fixtureEntry({ id: 'a', mood: 'great', createdAt: 1_700_000_001_000 }),
  fixtureEntry({ id: 'b', mood: 'okay', createdAt: 1_700_000_002_000 }),
  fixtureEntry({ id: 'c', mood: 'low', createdAt: 1_700_000_003_000 }),
];

export const fixturePreferences = (
  overrides: Partial<MoodMarkPreferences> = {},
): MoodMarkPreferences => ({
  activePanel: overrides.activePanel ?? DEFAULT_PREFERENCES.activePanel,
  selectedEntryId: overrides.selectedEntryId ?? DEFAULT_PREFERENCES.selectedEntryId,
});

export const fixtureSnapshot = (
  overrides: Partial<PersistedMoodMarkSnapshot> = {},
): PersistedMoodMarkSnapshot => ({
  version: 1,
  preferences: overrides.preferences ?? fixturePreferences(),
  entries: overrides.entries ?? fixtureEntries(),
});

export const fixtureStorageKey = STORAGE_KEY;

export const buildInMemoryStorage = (initial: Record<string, string> = {}) => {
  const mem = new Map<string, string>(Object.entries(initial));
  return {
    getItem: (key: string) => (mem.has(key) ? mem.get(key)! : null),
    setItem: (key: string, value: string) => {
      mem.set(key, value);
    },
    removeItem: (key: string) => {
      mem.delete(key);
    },
    __raw: mem,
  };
};

export type FixtureStorage = ReturnType<typeof buildInMemoryStorage>;