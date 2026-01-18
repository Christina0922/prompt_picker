'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export interface PromptOption {
  id: string;
  title: string;
  bestWhen: string;
  promptText: string;
}

interface ResultsGridProps {
  options: PromptOption[];
  onSelect: (option: PromptOption) => void;
}

export default function ResultsGrid({ options, onSelect }: ResultsGridProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (options.length === 0) return null;

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error('복사 실패:', error);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-4">
          <span className="text-sm font-semibold text-green-900">✓ 생성 완료</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          후보 프롬프트 5개
        </h2>
        <p className="text-gray-600">
          마음에 드는 프롬프트를 선택하세요. 복사하거나 확정하여 추가 튜닝할 수 있습니다.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {options.map((option, index) => (
          <div
            key={option.id}
            className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                  <span className="text-indigo-600 font-semibold">💡</span>
                  <span>{option.bestWhen}</span>
                </div>
              </div>
            </div>

            {/* Prompt Preview */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 mb-4 max-h-48 overflow-y-auto border border-gray-200">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
                {option.promptText}
              </pre>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleCopy(option.promptText, option.id)}
                className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm font-medium flex items-center justify-center gap-2 group-hover:shadow-sm"
              >
                {copiedId === option.id ? '✓ 복사됨' : '복사'}
              </button>
              <Button
                onClick={() => onSelect(option)}
                size="sm"
                className="group-hover:scale-105"
              >
                확정
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

