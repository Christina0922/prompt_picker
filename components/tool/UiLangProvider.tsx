// components/tool/UiLangProvider.tsx
"use client";

import * as React from "react";
import { STRINGS } from "@/lib/i18n/strings";

export type UiLang = "kr" | "en";

type UiLangContextValue = {
  lang: UiLang;
  setLang: (lang: UiLang) => void;
  t: (key: string) => string;
};

const UiLangContext = React.createContext<UiLangContextValue | null>(null);

function detectInitialLang(): UiLang {
  if (typeof window === "undefined") return "kr";

  const saved = window.localStorage.getItem("pp_ui_lang");
  if (saved === "kr" || saved === "en") return saved;

  const nav = window.navigator.language?.toLowerCase() || "";
  return nav.startsWith("ko") ? "kr" : "en";
}

export function UiLangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<UiLang>("kr");

  React.useEffect(() => {
    setLang(detectInitialLang());
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("pp_ui_lang", lang);
  }, [lang]);

  const t = React.useCallback((key: string): string => {
    return STRINGS[lang][key] || key;
  }, [lang]);

  const value = React.useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <UiLangContext.Provider value={value}>{children}</UiLangContext.Provider>;
}

/**
 * ✅ 안전 훅
 * - Provider가 있으면 정상값 사용
 * - Provider가 없어도 빌드/프리렌더에서 절대 throw 하지 않음 (기본 kr)
 */
export function useUiLang(): UiLangContextValue {
  const ctx = React.useContext(UiLangContext);
  if (ctx) return ctx;

  return {
    lang: "kr",
    setLang: () => {},
    t: (key: string) => STRINGS.kr[key] || key,
  };
}

export function uiLangLabel(lang: UiLang) {
  return lang === "kr" ? "KR" : "EN";
}
