'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getUiLang, setUiLang, type UiLang } from './storage';
import { STRINGS } from './strings';

interface UiLangContextType {
  uiLang: UiLang;
  setUiLang: (lang: UiLang) => void;
  t: (key: string) => string;
}

const UiLangContext = createContext<UiLangContextType | undefined>(undefined);

export function UiLangProvider({ children }: { children: ReactNode }) {
  const [uiLang, setUiLangState] = useState<UiLang>('kr');

  useEffect(() => {
    setUiLangState(getUiLang());
  }, []);

  const handleSetUiLang = (lang: UiLang) => {
    setUiLangState(lang);
    setUiLang(lang);
  };

  const t = (key: string): string => {
    return STRINGS[uiLang][key] || key;
  };

  return (
    <UiLangContext.Provider value={{ uiLang, setUiLang: handleSetUiLang, t }}>
      {children}
    </UiLangContext.Provider>
  );
}

export function useUiLang() {
  const context = useContext(UiLangContext);
  if (!context) {
    throw new Error('useUiLang must be used within UiLangProvider');
  }
  return context;
}

