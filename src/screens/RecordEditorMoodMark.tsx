// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Mood Mark
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronDown, Save, X } from "lucide-react";


export type RecordEditorMoodMarkActionId = "close-editor-1" | "cancel-2" | "save-record-3";

export interface RecordEditorMoodMarkProps {
  actions?: Partial<Record<RecordEditorMoodMarkActionId, () => void>>;

}

export function RecordEditorMoodMark({ actions }: RecordEditorMoodMarkProps) {
  return (
    <>
      {/* Suppressed SideNavBar for Transactional/Focused Screen */}
      {/* The Record Editor is a focused form where user attention is critical. Therefore, navigation is hidden to minimize distractions. */}
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center p-margin-mobile md:p-margin-desktop">
      {/* Editor Container */}
      <div className="w-full max-w-[800px] bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden relative">
      {/* Subtle Top Color Bar */}
      <div className="h-1 bg-primary w-full absolute top-0 left-0"></div>
      {/* Header Section */}
      <div className="px-6 py-5 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
      <div>
      <h1 className="font-headline-md text-headline-md text-on-surface">New Record</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1" id="unsaved-status">Unsaved changes...</p>
      </div>
      <button aria-label="Close Editor" className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-surface-container" type="button" data-action-id="close-editor-1" onClick={actions?.["close-editor-1"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Form Section */}
      <form className="flex-1 flex flex-col p-6 gap-6">
      {/* Date & Mood Row */}
      <div className="flex flex-col md:flex-row gap-6">
      {/* Date Input */}
      <div className="flex-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center mb-unit" htmlFor="record-date">
                                  Date <span className="text-error ml-1">*</span>
      </label>
      <div className="relative">
      <input className="w-full h-9 px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-sm text-body-sm text-on-surface transition-colors" id="record-date" name="record-date" required={true} type="date" />
      </div>
      </div>
      {/* Mood Selection */}
      <div className="flex-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center mb-unit" htmlFor="record-mood">
                                  Mood
                              </label>
      <div className="relative">
      <select className="w-full h-9 px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-sm text-body-sm text-on-surface appearance-none transition-colors" id="record-mood" name="record-mood">
      <option disabled={true} selected={true} value="">Select a state...</option>
      <option value="excellent">Excellent</option>
      <option value="good">Good</option>
      <option value="neutral">Neutral</option>
      <option value="poor">Poor</option>
      <option value="terrible">Terrible</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Note Text Area */}
      <div className="flex-1 flex flex-col min-h-[300px]">
      <div className="flex justify-between items-end mb-unit">
      <label className="font-label-md text-label-md text-on-surface flex items-center" htmlFor="record-note">
                                  Note <span className="text-error ml-1">*</span>
      </label>
      {/* Validation Message Placeholder */}
      <span className="font-label-sm text-label-sm text-error hidden" id="note-error">Note content is required</span>
      </div>
      {/* Textarea with rich feeling */}
      <textarea className="w-full flex-1 p-4 bg-surface-bright border border-outline-variant rounded resize-none focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-md text-body-md text-on-surface transition-colors shadow-inner" id="record-note" name="record-note" placeholder="Start typing your thoughts..." required={true}></textarea>
      </div>
      </form>
      {/* Footer / Action Area */}
      <div className="px-6 py-4 bg-surface border-t border-outline-variant flex justify-end gap-3 items-center">
      <button className="h-9 px-4 rounded border border-outline-variant bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors focus:ring-2 focus:ring-primary focus:outline-none" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>
                          Cancel
                      </button>
      <button className="h-9 px-6 rounded bg-[#0D9488] text-[#ffffff] font-label-md text-label-md hover:bg-[#0f766e] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#0D9488] focus:outline-none flex items-center gap-2 shadow-sm" type="button" data-action-id="save-record-3" onClick={actions?.["save-record-3"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                          Save Record
                      </button>
      </div>
      </div>
      </main>
      
    </>
  );
}
