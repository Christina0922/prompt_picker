// localStorage 접근 유틸 (SSR 안전)

export interface PromptResult {
  frame: "A" | "B" | "C" | "D" | "E";
  title: string;
  text: string;
}

export interface HistoryItem {
  id: string;
  timestamp: number;
  lang: "kr" | "en";
  inputText: string;
  options: {
    purpose: string;
    platform: string;
    length: string;
    tone: string;
    format: string;
    mustInclude?: string;
    avoid?: string;
    minLength?: string;
    maxLength?: string;
  };
  results: PromptResult[];
  selectedFrame?: "A" | "B" | "C" | "D" | "E";
}

const HISTORY_KEY = "prompt_picker_history";
const MAX_HISTORY = 10;

export function getHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(HISTORY_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_HISTORY) : [];
  } catch {
    return [];
  }
}

export function saveHistory(item: HistoryItem): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getHistory();
    const updated = [item, ...existing.filter((h) => h.id !== item.id)].slice(
      0,
      MAX_HISTORY
    );
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch {
    // 저장 실패 시 무시
  }
}

export function clearHistory(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(HISTORY_KEY);
  } catch {
    // 삭제 실패 시 무시
  }
}
