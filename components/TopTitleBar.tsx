'use client';

import React from 'react';

type Lang = 'ko' | 'en';

export default function TopTitleBar() {
  const [lang, setLang] = React.useState<Lang>('ko');

  React.useEffect(() => {
    const saved = (localStorage.getItem('lang') as Lang | null) ?? 'ko';
    setLang(saved);
  }, []);

  const onChange = (next: Lang) => {
    setLang(next);
    localStorage.setItem('lang', next);
    window.dispatchEvent(new CustomEvent('lang-change', { detail: next }));
  };

  const isEN = lang === 'en';

  return (
    <header className="w-full">
      {/* 1줄: 작은 설명 */}
      <div className="text-xs font-medium text-neutral-500">
        {isEN
          ? 'Practical prompts · Frame-based · Copy-ready'
          : '실무용 프롬프트 · 프레임 기반 · 즉시 복사'}
      </div>

      {/* 2줄: 제목(왼쪽) + 언어토글(오른쪽 끝) */}
      <div className="mt-2 flex items-baseline justify-between gap-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">
          {isEN ? 'Prompt Generator' : '프롬프트 생성기'}
        </h1>

        {/* ✅ 오른쪽 끝 정렬 + 줄바꿈 방지 */}
        <div className="shrink-0 whitespace-nowrap">
          <LangToggle lang={lang} onChange={onChange} />
        </div>
      </div>

      {/* 3줄: 설명 문구 */}
      <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600">
        {isEN
          ? 'Choose a goal and options. The same input will be organized differently per frame. Results are output in a copy-ready format.'
          : '목적과 옵션을 선택하면 같은 입력도 프레임별로 다르게 정리됩니다. 결과는 바로 복사 가능한 형태로 출력됩니다.'}
      </p>
    </header>
  );
}

function LangToggle({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (next: Lang) => void;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 shadow-sm">
      <button
        type="button"
        onClick={() => onChange('ko')}
        className={[
          'text-sm font-semibold leading-none',
          lang === 'ko' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700',
        ].join(' ')}
        aria-current={lang === 'ko' ? 'page' : undefined}
      >
        한
      </button>

      <span className="text-sm leading-none text-neutral-300">|</span>

      <button
        type="button"
        onClick={() => onChange('en')}
        className={[
          'text-sm font-semibold leading-none',
          lang === 'en' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700',
        ].join(' ')}
        aria-current={lang === 'en' ? 'page' : undefined}
      >
        EN
      </button>
    </div>
  );
}
