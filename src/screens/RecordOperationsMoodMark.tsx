// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Mood Mark
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, CircleHelp, CircleUserRound, Clock, Flame, Lightbulb, Pencil, Plus, RefreshCw, Search, SearchX, Settings } from "lucide-react";


export type RecordOperationsMoodMarkActionId = "settings-1" | "account-circle-2" | "create-record-3" | "edit-4" | "edit-5" | "edit-6" | "clear-search-7" | "records-1" | "insights-2" | "settings-3" | "help-4" | "records-5" | "insights-6";

export interface RecordOperationsMoodMarkProps {
  actions?: Partial<Record<RecordOperationsMoodMarkActionId, () => void>>;

}

export function RecordOperationsMoodMark({ actions }: RecordOperationsMoodMarkProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="hidden md:flex flex-col p-4 gap-2 h-screen w-64 fixed left-0 top-0 border-r border-outline-variant bg-surface dark:bg-surface-dim z-20">
      {/* Header */}
      <div className="mb-8 px-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
      <BadgeHelp aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">Mood Mark</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Productivity Utility</p>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary-fixed text-on-secondary-container dark:text-on-secondary-fixed rounded-lg active:scale-95 duration-100 font-label-md text-label-md" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <BadgeHelp className="fill" aria-hidden={true} focusable="false" />
      <span>Records</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded-lg transition-colors active:scale-95 duration-100 font-label-md text-label-md" href="#" data-action-id="insights-2" onClick={(event) => { event.preventDefault(); actions?.["insights-2"]?.(); }}>
      <Lightbulb aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      </div>
      {/* Footer Links */}
      <div className="mt-auto flex flex-col gap-1 border-t border-outline-variant pt-4">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded-lg transition-colors active:scale-95 duration-100 font-label-md text-label-md" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded-lg transition-colors active:scale-95 duration-100 font-label-md text-label-md" href="#" data-action-id="help-4" onClick={(event) => { event.preventDefault(); actions?.["help-4"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span>Help</span>
      </a>
      </div>
      </nav>
      {/* TopAppBar (Mobile Only) */}
      <header className="md:hidden flex justify-between items-center h-14 px-margin-mobile w-full top-0 sticky border-b border-outline-variant bg-surface dark:bg-surface-dim z-20">
      <h1 className="text-headline-md font-headline-md font-bold text-primary tracking-tight">Mood Mark</h1>
      <div className="flex items-center gap-4">
      <button className="text-primary hover:text-primary-fixed-dim transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Settings" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary hover:text-primary-fixed-dim transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Account Circle" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-margin-mobile md:p-margin-desktop w-full max-w-container-max-width mx-auto pb-24 md:pb-8">
      {/* Header Actions & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <h2 className="font-headline-lg text-headline-lg text-on-background">Records</h2>
      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
      {/* Search Input */}
      <div className="relative w-full md:w-64">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-sm text-body-sm text-on-background placeholder-on-surface-variant" placeholder="Search records..." type="text" />
      </div>
      {/* Create Button */}
      <button className="btn-primary px-4 py-2 flex items-center justify-center gap-2 font-label-md text-label-md transition-shadow hover:shadow-sm h-[36px] whitespace-nowrap" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                          Create Record
                      </button>
      </div>
      </div>
      {/* Summary Metrics (Bento Grid Style) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {/* Metric Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
      <div className="flex items-center justify-between mb-2">
      <span className="font-label-md text-label-md text-on-surface-variant">Total Notes</span>
      <BadgeHelp className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-background">342</div>
      </div>
      {/* Metric Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
      <div className="flex items-center justify-between mb-2">
      <span className="font-label-md text-label-md text-on-surface-variant">Current Streak</span>
      <Flame className="text-tertiary-container text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-background">12 <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Days</span></div>
      </div>
      {/* Metric Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow col-span-2 md:col-span-2">
      <div className="flex items-center justify-between mb-2">
      <span className="font-label-md text-label-md text-on-surface-variant">Last Entry</span>
      <Clock className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-center gap-3 mt-1">
      <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-background font-medium">"Feeling productive after deep work session."</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Today, 2:30 PM</span>
      </div>
      </div>
      </div>
      </div>
      {/* Data Table (Dense List View) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 p-3 border-b border-outline-variant bg-surface-container-low font-label-md text-label-md text-on-surface-variant">
      <div className="col-span-2">Date</div>
      <div className="col-span-2">Mood</div>
      <div className="col-span-5">Snippet</div>
      <div className="col-span-2">Tags</div>
      <div className="col-span-1 text-right">Actions</div>
      </div>
      {/* Table Body */}
      <div className="flex flex-col divide-y divide-outline-variant">
      {/* Row 1 */}
      <div className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-surface-container-low transition-colors group">
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2023</div>
      <div className="col-span-2 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
      <span className="font-label-sm text-label-sm text-on-background">Focused</span>
      </div>
      <div className="col-span-5 font-body-md text-body-md text-on-background truncate">Completed the final review of the Q3 project deliverables. Feeling solid.</div>
      <div className="col-span-2 flex flex-wrap gap-1">
      <span className="px-2 py-0.5 bg-[#F3F4F6] text-[#374151] rounded text-[10px] font-medium tracking-wide">Work</span>
      </div>
      <div className="col-span-1 flex justify-end">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Edit" data-action-id="edit-4" onClick={actions?.["edit-4"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-surface-container-low transition-colors group">
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface-variant">Oct 23, 2023</div>
      <div className="col-span-2 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
      <span className="font-label-sm text-label-sm text-on-background">Anxious</span>
      </div>
      <div className="col-span-5 font-body-md text-body-md text-on-background truncate">Upcoming presentation is looming. Need more prep time.</div>
      <div className="col-span-2 flex flex-wrap gap-1">
      <span className="px-2 py-0.5 bg-[#F3F4F6] text-[#374151] rounded text-[10px] font-medium tracking-wide">Stress</span>
      <span className="px-2 py-0.5 bg-[#F3F4F6] text-[#374151] rounded text-[10px] font-medium tracking-wide">Work</span>
      </div>
      <div className="col-span-1 flex justify-end">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Edit" data-action-id="edit-5" onClick={actions?.["edit-5"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Row 3 */}
      <div className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-surface-container-low transition-colors group">
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface-variant">Oct 22, 2023</div>
      <div className="col-span-2 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
      <span className="font-label-sm text-label-sm text-on-background">Calm</span>
      </div>
      <div className="col-span-5 font-body-md text-body-md text-on-background truncate">Quiet Sunday morning reading. Much needed reset.</div>
      <div className="col-span-2 flex flex-wrap gap-1">
      <span className="px-2 py-0.5 bg-[#F3F4F6] text-[#374151] rounded text-[10px] font-medium tracking-wide">Rest</span>
      </div>
      <div className="col-span-1 flex justify-end">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Edit" data-action-id="edit-6" onClick={actions?.["edit-6"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* Empty / Error State (Hidden by default, shown for demonstration structure) */}
      <div className="hidden mt-8 flex-col items-center justify-center p-12 bg-surface-container-lowest border border-outline-variant rounded border-dashed">
      <SearchX className="text-[48px] text-outline-variant mb-4" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">No records found</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-md mb-6">We couldn't find any records matching your search criteria. Try adjusting your filters or create a new entry.</p>
      <button className="btn-primary px-4 py-2 font-label-md text-label-md flex items-center gap-2" type="button" data-action-id="clear-search-7" onClick={actions?.["clear-search-7"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                      Clear Search
                  </button>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface border-t border-outline-variant z-20 h-[64px] px-2 flex items-center justify-around pb-safe">
      <a className="flex flex-col items-center justify-center w-16 h-full text-primary" href="#" data-action-id="records-5" onClick={(event) => { event.preventDefault(); actions?.["records-5"]?.(); }}>
      <div className="w-12 h-8 flex items-center justify-center bg-secondary-container rounded-full mb-1">
      <BadgeHelp className="fill text-on-secondary-container" aria-hidden={true} focusable="false" />
      </div>
      <span className="text-[10px] font-medium leading-none">Records</span>
      </a>
      <a className="flex flex-col items-center justify-center w-16 h-full text-on-surface-variant hover:text-primary transition-colors" href="#" data-action-id="insights-6" onClick={(event) => { event.preventDefault(); actions?.["insights-6"]?.(); }}>
      <div className="w-12 h-8 flex items-center justify-center mb-1">
      <Lightbulb aria-hidden={true} focusable="false" />
      </div>
      <span className="text-[10px] font-medium leading-none">Insights</span>
      </a>
      </nav>
    </>
  );
}
