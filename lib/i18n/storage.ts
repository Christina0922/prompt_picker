export type UiLang = 'kr' | 'en';

export function getUiLang(): UiLang {
  if (typeof window === 'undefined') return 'kr';
  
  const stored = localStorage.getItem('pp_ui_lang');
  if (stored === 'kr' || stored === 'en') {
    return stored;
  }
  
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('ko') ? 'kr' : 'en';
}

export function setUiLang(lang: UiLang): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('pp_ui_lang', lang);
}

export function getOutputLang(): UiLang {
  if (typeof window === 'undefined') return 'kr';
  
  const stored = localStorage.getItem('pp_output_lang');
  if (stored === 'kr' || stored === 'en') {
    return stored;
  }
  
  return getUiLang();
}

export function setOutputLang(lang: UiLang): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('pp_output_lang', lang);
}

