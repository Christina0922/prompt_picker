'use client';

import React from 'react';
import TopTitleBar from './TopTitleBar';
import { useUiLang } from './tool/UiLangContext';
import { t } from '../lib/i18n';

type ChipValue =
  | 'content'
  | 'analysis'
  | 'code'
  | 'translate'
  | 'document'
  | 'auto'
  | 'chatgpt'
  | 'claude'
  | 'gemini'
  | 'short'
  | 'normal'
  | 'detailed'
  | 'plain'
  | 'bullets'
  | 'table';

export default function PromptGeneratorPage() {
  const { lang } = useUiLang();
  const T = t(lang);

  const [purpose, setPurpose] = React.useState<ChipValue>('content');
  const [platform, setPlatform] = React.useState<ChipValue>('auto');
  const [length, setLength] = React.useState<ChipValue>('short');
  const [format, setFormat] = React.useState<ChipValue>('plain');

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <TopTitleBar />

      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 좌측 */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-neutral-900">{T.leftCardTitle}</h2>
          <p className="mt-1 text-sm text-neutral-600">{T.leftCardSubtitle}</p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Input */}
            <div className="rounded-2xl border border-neutral-200 p-5">
              <div className="text-sm font-semibold text-neutral-900">{T.inputTitle}</div>
              <p className="mt-1 text-xs leading-5 text-neutral-600">{T.inputWarn1}</p>
              <p className="mt-1 text-xs leading-5 text-neutral-600">{T.inputWarn2}</p>

              <textarea
                className="mt-4 h-44 w-full resize-none rounded-xl border border-neutral-200 p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-200"
                placeholder={T.inputPlaceholder}
              />
            </div>

            {/* Output */}
            <div className="rounded-2xl border border-neutral-200 p-5">
              <div className="text-sm font-semibold text-neutral-900">{T.outputTitle}</div>
              <p className="mt-1 text-xs leading-5 text-neutral-600">{T.outputDesc}</p>

              <div className="mt-4 rounded-xl border border-dashed border-neutral-300 p-4 text-sm text-neutral-500">
                {T.outputEmpty}
              </div>
            </div>
          </div>

          {/* 옵션 */}
          <div className="mt-6 space-y-5">
            <OptionBlock label={T.purposeLabel}>
              <Chip active={purpose === 'content'} onClick={() => setPurpose('content')} text={T.purposes.content} />
              <Chip active={purpose === 'analysis'} onClick={() => setPurpose('analysis')} text={T.purposes.analysis} />
              <Chip active={purpose === 'code'} onClick={() => setPurpose('code')} text={T.purposes.code} />
              <Chip active={purpose === 'translate'} onClick={() => setPurpose('translate')} text={T.purposes.translate} />
              <Chip active={purpose === 'document'} onClick={() => setPurpose('document')} text={T.purposes.document} />
            </OptionBlock>

            <OptionBlock label={T.platformLabel}>
              <Chip active={platform === 'auto'} onClick={() => setPlatform('auto')} text={T.platforms.auto} />
              <Chip active={platform === 'chatgpt'} onClick={() => setPlatform('chatgpt')} text={T.platforms.chatgpt} />
              <Chip active={platform === 'claude'} onClick={() => setPlatform('claude')} text={T.platforms.claude} />
              <Chip active={platform === 'gemini'} onClick={() => setPlatform('gemini')} text={T.platforms.gemini} />
            </OptionBlock>

            <OptionBlock label={T.lengthLabel}>
              <Chip active={length === 'short'} onClick={() => setLength('short')} text={T.lengths.short} />
              <Chip active={length === 'normal'} onClick={() => setLength('normal')} text={T.lengths.normal} />
              <Chip active={length === 'detailed'} onClick={() => setLength('detailed')} text={T.lengths.detailed} />
            </OptionBlock>

            <div className="rounded-2xl border border-neutral-200 p-5">
              <div className="text-sm font-semibold text-neutral-900">{T.advancedLabel}</div>
              <div className="mt-3">
                <div className="text-xs font-medium text-neutral-500">{T.formatLabel}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Chip active={format === 'plain'} onClick={() => setFormat('plain')} text={T.formats.plain} />
                  <Chip active={format === 'bullets'} onClick={() => setFormat('bullets')} text={T.formats.bullets} />
                  <Chip active={format === 'table'} onClick={() => setFormat('table')} text={T.formats.table} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 우측 */}
        <div className="space-y-6">
          {/* 전략 프레임 표 */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-900">{T.frameTableTitle}</h2>
            <p className="mt-1 text-sm text-neutral-600">{T.frameTableDesc}</p>

            <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-50 text-xs text-neutral-600">
                  <tr>
                    <th className="w-20 px-4 py-3 font-semibold">{T.frameHeadFrame}</th>
                    <th className="px-4 py-3 font-semibold">{T.frameHeadGoal}</th>
                    <th className="px-4 py-3 font-semibold">{T.frameHeadOutput}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {T.frameRows.map((row) => (
                    <tr key={row.key} className="bg-white">
                      <td className="px-4 py-3 font-semibold text-neutral-900">{row.key}</td>
                      <td className="px-4 py-3 text-neutral-700">{row.goal}</td>
                      <td className="px-4 py-3 text-neutral-700">{row.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-xs text-neutral-500">{T.frameHint}</div>
          </div>

          {/* 실무 입력 체크표 */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-900">{T.checklistTitle}</h2>
            <p className="mt-1 text-sm text-neutral-600">{T.checklistDesc}</p>

            <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-50 text-xs text-neutral-600">
                  <tr>
                    <th className="w-32 px-4 py-3 font-semibold">{T.checklistHeadItem}</th>
                    <th className="px-4 py-3 font-semibold">{T.checklistHeadInput}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {T.checklistRows.map((r) => (
                    <tr key={r.item} className="bg-white">
                      <td className="px-4 py-3 font-semibold text-neutral-900">{r.item}</td>
                      <td className="px-4 py-3 text-neutral-700">{r.input}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-xs text-neutral-500">{T.blacklist}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

function OptionBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-medium text-neutral-500">{label}</div>
      <div className="mt-2 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({ text, active, onClick }: { text: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'rounded-full border px-4 py-2 text-sm font-semibold',
        'transition-colors',
        active
          ? 'border-neutral-900 bg-neutral-900 text-white'
          : 'border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50',
      ].join(' ')}
    >
      {text}
    </button>
  );
}
