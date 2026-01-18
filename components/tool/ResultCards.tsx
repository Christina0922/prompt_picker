'use client';

import { useState } from 'react';

export interface PromptOption {
  id: string;
  title: string;
  bestWhen: string;
  promptText: string;
}

interface ResultCardsProps {
  options: PromptOption[];
  onSelect: (option: PromptOption) => void;
}

export default function ResultCards({ options, onSelect }: ResultCardsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error('복사 실패:', error);
    }
  };

  if (options.length === 0) return null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          후보 프롬프트 5개
        </h2>
        <p className="text-sm text-gray-600">
          마음에 드는 프롬프트를 선택하세요. 복사하거나 "확정"을 눌러 추가 튜닝할 수 있습니다.
        </p>
      </div>

      <div className="grid gap-4">
        {options.map((option) => (
          <div
            key={option.id}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 flex items-start">
                  <svg className="w-4 h-4 text-indigo-500 mr-1.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {option.bestWhen}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4 max-h-48 overflow-y-auto border border-gray-200">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
                {option.promptText}
              </pre>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleCopy(option.promptText, option.id)}
                className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center gap-2"
              >
                {copiedId === option.id ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    복사됨
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    복사
                  </>
                )}
              </button>
              <button
                onClick={() => onSelect(option)}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                확정
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

