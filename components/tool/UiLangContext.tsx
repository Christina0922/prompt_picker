'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type UiLang = 'ko' | 'en';

export type UILangContextValue = {
  // ✅ 기존 컴포넌트들이 기대하는 대표 필드
  lang: UiLang;

  // ✅ 혹시 uiLang를 쓰는 코드도 있을 수 있어 호환용으로 같이 둡니다.
  uiLang: UiLang;

  setLang: (next: UiLang) => void;
  toggleLang: () => void;
};

const UILangContext = createContext<UILangContextValue | null>(null);

export function UILangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<UiLang>('ko');

  useEffect(() => {
    const saved = (localStorage.getItem('lang') as UiLang | null) ?? 'ko';
    setLangState(saved);
  }, []);

  const setLang = (next: UiLang) => {
    setLangState(next);
    localStorage.setItem('lang', next);
    // 페이지 내 다른 컴포넌트들이 즉시 반응하게 이벤트를 쏩니다.
    window.dispatchEvent(new CustomEvent('lang-change', { detail: next }));
  };

  const toggleLang = () => {
    setLang(lang === 'ko' ? 'en' : 'ko');
  };

  const value = useMemo<UILangContextValue>(() => {
    return {
      lang,
      uiLang: lang,
      setLang,
      toggleLang,
    };
  }, [lang]);

  return <UILangContext.Provider value={value}>{children}</UILangContext.Provider>;
}

export function useUiLang() {
  const ctx = useContext(UILangContext);
  if (!ctx) throw new Error('useUiLang must be used within UILangProvider');
  return ctx;
}
