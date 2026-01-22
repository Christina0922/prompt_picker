"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type UiLang = "kr" | "en";

export type UiLangContextValue = {
  uiLang: UiLang;
  setUiLang: (lang: UiLang) => void;
  t: (kr: string, en: string) => string;
};

const UiLangContext = createContext<UiLangContextValue | null>(null);

function getInitialLang(): UiLang {
  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem("uiLang");
    if (saved === "kr" || saved === "en") return saved;
  }
  if (typeof navigator !== "undefined") {
    const n = (navigator.language || "").toLowerCase();
    if (n.startsWith("en")) return "en";
  }
  return "kr";
}

export function UiLangProvider({ children }: { children: React.ReactNode }) {
  const [uiLang, setUiLangState] = useState<UiLang>("kr");

  useEffect(() => {
    setUiLangState(getInitialLang());
  }, []);

  const setUiLang = (lang: UiLang) => {
    setUiLangState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("uiLang", lang);
    }
  };

  const value = useMemo<UiLangContextValue>(() => {
    return {
      uiLang,
      setUiLang,
      t: (kr: string, en: string) => (uiLang === "en" ? en : kr),
    };
  }, [uiLang]);

  return <UiLangContext.Provider value={value}>{children}</UiLangContext.Provider>;
}

export function useUiLang(): UiLangContextValue {
  const ctx = useContext(UiLangContext);
  if (!ctx) throw new Error("useUiLang must be used within UiLangProvider");
  return ctx;
}
