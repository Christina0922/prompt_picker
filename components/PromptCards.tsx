'use client';

import { useState } from 'react';

export interface PromptOption {
  id: string;
  title: string;
  bestWhen: string;
  promptText: string;
}

interface PromptCardsProps {
  options: PromptOption[];
  onSelect: (option: PromptOption) => void;
}

export default function PromptCards({ options, onSelect }: PromptCardsProps) {
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

  if (options.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        후보 프롬프트 5개
      </h2>
      <p className="text-gray-600 mb-6">
        마음에 드는 프롬프트를 선택하세요. 복사해서 바로 사용하거나, "이걸로 확정"을 눌러 추가 튜닝할 수 있습니다.
      </p>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {options.map((option) => (
          <div
            key={option.id}
            className="card hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 italic mb-3">
                  💡 {option.bestWhen}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4 max-h-64 overflow-y-auto">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                {option.promptText}
              </pre>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleCopy(option.promptText, option.id)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
              >
                {copiedId === option.id ? '✓ 복사됨!' : '📋 복사'}
              </button>
              <button
                onClick={() => onSelect(option)}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                ✨ 이걸로 확정
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

