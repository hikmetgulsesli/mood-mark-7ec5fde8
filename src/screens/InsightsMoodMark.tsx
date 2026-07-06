// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Mood Mark
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, CircleHelp, CircleUserRound, Download, Lightbulb, ListFilter, Settings } from "lucide-react";


export type InsightsMoodMarkActionId = "filter-1" | "export-summary-2" | "keep-it-up-3" | "records-1" | "insights-2" | "settings-3" | "help-4";

export interface InsightsMoodMarkProps {
  actions?: Partial<Record<InsightsMoodMarkActionId, () => void>>;

}

export function InsightsMoodMark({ actions }: InsightsMoodMarkProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="h-screen w-64 fixed left-0 top-0 bg-surface dark:bg-surface-dim text-primary dark:text-primary-fixed-dim font-label-md text-label-md border-r border-outline-variant dark:border-outline flat no shadows flex flex-col p-4 gap-2 hidden md:flex z-50">
      <div className="flex items-center gap-3 mb-8 mt-2 px-2">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
      <BadgeHelp className="text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">Mood Mark</div>
      <div className="text-[10px] opacity-70">Productivity Utility</div>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-100" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span>Records</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 bg-secondary-container dark:bg-secondary-fixed text-on-secondary-container dark:text-on-secondary-fixed rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-100" href="#" data-action-id="insights-2" onClick={(event) => { event.preventDefault(); actions?.["insights-2"]?.(); }}>
      <Lightbulb data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      </div>
      <div className="mt-auto flex flex-col gap-1 border-t border-outline-variant/30 pt-4">
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-100" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-100" href="#" data-action-id="help-4" onClick={(event) => { event.preventDefault(); actions?.["help-4"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span>Help</span>
      </a>
      </div>
      </nav>
      {/* Mobile TopAppBar */}
      <header className="w-full top-0 sticky bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline flat no shadows flex justify-between items-center h-14 px-margin-mobile mx-auto md:hidden z-50">
      <div className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">Mood Mark</div>
      <div className="flex items-center gap-4">
      <Settings className="text-primary cursor-pointer active:opacity-80" aria-hidden={true} focusable="false" />
      <CircleUserRound className="text-primary cursor-pointer active:opacity-80" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* Mobile BottomNavBar Placeholder (Logic requires hiding on specific flows, but this is a top-level destination) */}
      <div className="md:hidden fixed bottom-0 w-full bg-surface border-t border-outline-variant flex justify-around py-3 z-50">
      <div className="flex flex-col items-center text-on-surface-variant">
      <BadgeHelp className="text-xl" aria-hidden={true} focusable="false" />
      <span className="text-[10px]">Records</span>
      </div>
      <div className="flex flex-col items-center text-primary">
      <Lightbulb  style={{fontVariationSettings: "'FILL' 1"}} className="text-xl" aria-hidden={true} focusable="false" />
      <span className="text-[10px] font-medium">Insights</span>
      </div>
      </div>
      {/* Main Canvas */}
      <main className="flex-1 md:ml-64 p-margin-mobile md:p-margin-desktop pb-24 md:pb-margin-desktop max-w-container-max-width mx-auto w-full flex flex-col gap-6">
      {/* Header Actions */}
      <div className="flex justify-between items-end gap-4 flex-wrap">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-background">Weekly Insights</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Oct 24 - Oct 30</p>
      </div>
      <div className="flex gap-2">
      <button className="h-9 px-3 rounded bg-surface border border-outline-variant text-on-surface flex items-center gap-2 hover:bg-surface-variant transition-colors text-label-md font-label-md" type="button" data-action-id="filter-1" onClick={actions?.["filter-1"]}>
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
                          Filter
                      </button>
      <button className="h-9 px-3 rounded bg-surface border border-outline-variant text-on-surface flex items-center gap-2 hover:bg-surface-variant transition-colors text-label-md font-label-md" type="button" data-action-id="export-summary-2" onClick={actions?.["export-summary-2"]}>
      <Download className="text-[18px]" aria-hidden={true} focusable="false" />
                          Export Summary
                      </button>
      </div>
      </div>
      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-2">
      <span className="font-label-md text-label-md text-on-surface-variant">Average Mood</span>
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <span className="font-headline-sm text-headline-sm">Productive</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-2">
      <span className="font-label-md text-label-md text-on-surface-variant">Most Active Day</span>
      <div className="flex items-center gap-2">
      <span className="font-headline-sm text-headline-sm">Tuesday</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-2">
      <span className="font-label-md text-label-md text-on-surface-variant">Entry Completion</span>
      <div className="flex items-center gap-2">
      <span className="font-headline-sm text-headline-sm">85%</span>
      <span className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded font-medium">+5%</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-2">
      <span className="font-label-md text-label-md text-on-surface-variant">Total Notes</span>
      <div className="flex items-center gap-2">
      <span className="font-headline-sm text-headline-sm">12</span>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column: Chart & Hint */}
      <div className="md:col-span-1 flex flex-col gap-6">
      {/* Distribution Chart (Compact) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4">
      <h2 className="font-headline-sm text-headline-sm border-b border-outline-variant/30 pb-2 mb-4">State Distribution</h2>
      <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
      <div className="w-16 font-label-md text-label-md text-on-surface-variant text-right">Focused</div>
      <div className="flex-1 h-2 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary w-[45%]"></div>
      </div>
      <div className="w-6 font-label-md text-label-md text-right">45%</div>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-16 font-label-md text-label-md text-on-surface-variant text-right">Calm</div>
      <div className="flex-1 h-2 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary-fixed-dim w-[30%]"></div>
      </div>
      <div className="w-6 font-label-md text-label-md text-right">30%</div>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-16 font-label-md text-label-md text-on-surface-variant text-right">Tired</div>
      <div className="flex-1 h-2 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-secondary w-[15%]"></div>
      </div>
      <div className="w-6 font-label-md text-label-md text-right">15%</div>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-16 font-label-md text-label-md text-on-surface-variant text-right">Stressed</div>
      <div className="flex-1 h-2 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-tertiary-container w-[10%]"></div>
      </div>
      <div className="w-6 font-label-md text-label-md text-right">10%</div>
      </div>
      </div>
      </div>
      {/* Actionable Hint */}
      <div className="bg-surface-container border border-primary/20 rounded-lg p-4 relative overflow-hidden">
      <div className="absolute -right-4 -top-4 text-primary/10">
      <Lightbulb  style={{fontVariationSettings: "'FILL' 1"}} className="text-6xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="relative z-10">
      <div className="flex items-center gap-2 text-primary font-label-md text-label-md mb-2">
      <Lightbulb className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Observation
                              </div>
      <p className="font-body-sm text-body-sm text-on-surface">You've been remarkably consistent this week. Your morning entries correlate strongly with "Focused" states.</p>
      <button className="mt-3 text-primary font-label-sm text-label-sm uppercase tracking-wider hover:underline" type="button" data-action-id="keep-it-up-3" onClick={actions?.["keep-it-up-3"]}>Keep it up</button>
      </div>
      </div>
      </div>
      {/* Right Column: Timeline */}
      <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col">
      <h2 className="font-headline-sm text-headline-sm border-b border-outline-variant/30 pb-2 mb-4">Recent Activity</h2>
      <div className="flex-1 relative pl-4 border-l border-outline-variant/30 ml-2 flex flex-col gap-6 pb-2">
      {/* Timeline Item */}
      <div className="relative">
      <div className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface-container-lowest mt-1.5"></div>
      <div className="flex items-baseline justify-between mb-1">
      <div className="font-label-md text-label-md font-semibold">Morning Sync</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Today, 9:00 AM</div>
      </div>
      <div className="bg-surface p-3 rounded border border-outline-variant/50 font-body-sm text-body-sm text-on-surface mt-2">
                                  "Felt prepared for the weekly review. Sleep was adequate."
                              </div>
      <div className="flex gap-2 mt-2">
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded text-[10px] font-medium">Focused</span>
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded text-[10px] font-medium">Prepared</span>
      </div>
      </div>
      {/* Timeline Item */}
      <div className="relative">
      <div className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-primary-fixed-dim border-2 border-surface-container-lowest mt-1.5"></div>
      <div className="flex items-baseline justify-between mb-1">
      <div className="font-label-md text-label-md font-semibold">Post-Lunch Lull</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Yesterday, 2:30 PM</div>
      </div>
      <div className="bg-surface p-3 rounded border border-outline-variant/50 font-body-sm text-body-sm text-on-surface mt-2">
                                  "Energy dipped after eating. Struggled to focus on the documentation."
                              </div>
      <div className="flex gap-2 mt-2">
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded text-[10px] font-medium">Tired</span>
      </div>
      </div>
      {/* Timeline Item */}
      <div className="relative">
      <div className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface-container-lowest mt-1.5"></div>
      <div className="flex items-baseline justify-between mb-1">
      <div className="font-label-md text-label-md font-semibold">Evening Wrap-up</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Tue, 6:15 PM</div>
      </div>
      <div className="bg-surface p-3 rounded border border-outline-variant/50 font-body-sm text-body-sm text-on-surface mt-2">
                                  "Cleared inbox. Feeling good about tomorrow's schedule."
                              </div>
      <div className="flex gap-2 mt-2">
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded text-[10px] font-medium">Calm</span>
      <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded text-[10px] font-medium">Organized</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
