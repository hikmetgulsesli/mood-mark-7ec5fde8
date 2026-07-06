import {
  MoodMarkStoreProvider,
  useMoodMarkActions,
  useMoodMarkState,
} from './features/mood-mark/mood-mark.store';
import {
  InsightsMoodMark,
  RecordEditorMoodMark,
  RecordOperationsMoodMark,
} from './screens';
import type {
  InsightsMoodMarkActionId,
  RecordEditorMoodMarkActionId,
  RecordOperationsMoodMarkActionId,
} from './screens';

/**
 * Inner shell that reads the active panel from the store and renders the
 * matching generated screen. Keeping the provider wrap and the consumer
 * split ensures the bootstrap effect runs once at the application root and
 * that the runtime bridge (`window.app`) is wired before any consumer
 * renders.
 */
const AppShell = () => {
  const { activePanel } = useMoodMarkState();
  const actions = useMoodMarkActions();

  // Wire the store actions into the generated screen action IDs so screen
  // surfaces can drive the shell through the same contract downstream
  // stories already expect.
  const recordOpsActions = {
    'settings-1': () => actions.setActivePanel('records'),
    'account-circle-2': () => actions.setActivePanel('records'),
    'create-record-3': () => actions.openEditor(null),
    'edit-4': () => actions.openEditor(null),
    'edit-5': () => actions.openEditor(null),
    'edit-6': () => actions.openEditor(null),
    'clear-search-7': () => actions.selectEntry(null),
  } satisfies Partial<Record<RecordOperationsMoodMarkActionId, () => void>>;

  const insightsActions = {
    'filter-1': () => actions.setActivePanel('insights'),
    'export-summary-2': () => actions.setActivePanel('insights'),
    'keep-it-up-3': () => actions.setActivePanel('records'),
  } satisfies Partial<Record<InsightsMoodMarkActionId, () => void>>;

  const editorActions = {
    'close-editor-1': () => actions.closeEditor(),
    'cancel-2': () => actions.closeEditor(),
    'save-record-3': () => actions.closeEditor(),
  } satisfies Partial<Record<RecordEditorMoodMarkActionId, () => void>>;

  return (
    <div
      data-setfarm-root="mood-mark-shell"
      data-testid="setfarm-app-root"
      data-active-panel={activePanel}
      className="min-h-screen bg-slate-50 text-slate-950"
    >
      {activePanel === 'records' && (
        <RecordOperationsMoodMark actions={recordOpsActions} />
      )}
      {activePanel === 'insights' && (
        <InsightsMoodMark actions={insightsActions} />
      )}
      {activePanel === 'editor' && (
        <RecordEditorMoodMark actions={editorActions} />
      )}
    </div>
  );
};

const App = () => (
  <MoodMarkStoreProvider>
    <AppShell />
  </MoodMarkStoreProvider>
);

export default App;