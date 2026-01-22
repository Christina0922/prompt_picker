'use client';

import React from 'react';
import Link from 'next/link';
import { useUiLang } from './tool/UiLangContext';
import { t } from '../lib/i18n';

export default function TopTitleBar() {
  const { lang, setLang } = useUiLang();
  const T = t(lang);

  return (
    <header className="w-full">
      <div className="text-xs font-medium text-neutral-500">{T.kicker}</div>

      {/* ✅ 제목(왼쪽) + 홈버튼/언어토글(오른쪽) 같은 줄 정렬 */}
      <div className="mt-2 flex items-baseline justify-between gap-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">
          {T.title}
        </h1>

        <div className="flex items-baseline gap-3 shrink-0 whitespace-nowrap">
          {/* 홈 버튼 */}
          <Link
            href="/"
            className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-800 shadow-sm hover:bg-neutral-50"
          >
            {T.homeButton}
          </Link>

          {/* 언어 토글 */}
          <LangToggle lang={lang} onChange={setLang} />
        </div>
      </div>

      <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600">{T.subtitle}</p>
    </header>
  );
}

function LangToggle({
  lang,
  onChange,
}: {
  lang: 'ko' | 'en';
  onChange: (next: 'ko' | 'en') => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange('ko')}
        className={[
          'rounded-full px-3 py-2 text-sm font-semibold leading-none',
          lang === 'ko'
            ? 'bg-blue-600 text-white'
            : 'text-neutral-500 hover:text-neutral-800',
        ].join(' ')}
      >
        한
      </button>

      <button
        type="button"
        onClick={() => onChange('en')}
        className={[
          'rounded-full px-3 py-2 text-sm font-semibold leading-none',
          lang === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-neutral-500 hover:text-neutral-800',
        ].join(' ')}
      >
        EN
      </button>
    </div>
  );
}
