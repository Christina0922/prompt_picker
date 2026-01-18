'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface FinalPanelProps {
  isOpen: boolean;
  prompt: string;
  onClose: () => void;
  onTune: (tuneType: 'shorter' | 'moreSpecific' | 'charLimit', charLimit?: number) => void;
  isProUser?: boolean;
}

export default function FinalPanel({
  isOpen,
  prompt,
  onClose,
  onTune,
  isProUser = false,
}: FinalPanelProps) {
  const [copied, setCopied] = useState(false);
  const [showCharLimit, setShowCharLimit] = useState(false);
  const [charLimit, setCharLimit] = useState('500');
  const [isTuning, setIsTuning] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('복사 실패:', error);
    }
  };

  const handleTune = async (tuneType: 'shorter' | 'moreSpecific' | 'charLimit') => {
    setIsTuning(true);
    try {
      if (tuneType === 'charLimit') {
        const limit = parseInt(charLimit);
        if (limit > 0) {
          await onTune(tuneType, limit);
        }
      } else {
        await onTune(tuneType);
      }
    } finally {
      setIsTuning(false);
      setShowCharLimit(false);
    }
  };

  const handleCharLimitClick = () => {
    if (!isProUser) {
      alert('글자수 정밀 지정은 PRO 기능입니다!');
      return;
    }
    setShowCharLimit(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="px-8 py-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">최종 프롬프트</h2>
            <p className="text-sm text-gray-600">복사하거나 추가 튜닝을 진행하세요</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(85vh-180px)]">
          {/* Prompt Display */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 border-2 border-gray-200">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
              {prompt}
            </pre>
          </div>

          {/* Copy Button */}
          <Button onClick={handleCopy} fullWidth size="lg" className="mb-8">
            {copied ? (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                복사 완료!
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                프롬프트 복사하기
              </>
            )}
          </Button>

          {/* Tuning Section */}
          <div className="border-t-2 border-gray-200 pt-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                최종 튜닝
              </h3>
              <p className="text-sm text-gray-600">
                필요하다면 프롬프트를 더 다듬을 수 있습니다
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleTune('shorter')}
                disabled={isTuning}
                className="p-6 border-2 border-gray-200 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 transition-all disabled:opacity-50 group"
              >
                <div className="text-base font-semibold text-gray-900 mb-1">더 짧게</div>
                <div className="text-xs text-gray-500">핵심만 남기기</div>
              </button>

              <button
                onClick={() => handleTune('moreSpecific')}
                disabled={isTuning}
                className="p-6 border-2 border-gray-200 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 transition-all disabled:opacity-50 group"
              >
                <div className="text-base font-semibold text-gray-900 mb-1">더 구체적으로</div>
                <div className="text-xs text-gray-500">상세하게 다듬기</div>
              </button>

              <button
                onClick={handleCharLimitClick}
                disabled={isTuning}
                className={`p-6 border-2 rounded-2xl transition-all disabled:opacity-50 relative group ${
                  isProUser
                    ? 'border-gray-200 hover:border-indigo-500 hover:bg-indigo-50'
                    : 'border-amber-300 bg-amber-50'
                }`}
              >
                {!isProUser && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    PRO
                  </div>
                )}
                <div className="text-base font-semibold text-gray-900 mb-1">글자수 지정</div>
                <div className="text-xs text-gray-500">정확한 길이 제한</div>
              </button>
            </div>

            {showCharLimit && isProUser && (
              <div className="mt-6 p-5 bg-indigo-50 rounded-2xl border-2 border-indigo-200 animate-in slide-in-from-top-2 duration-200">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  글자수 제한 (공백 포함)
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={charLimit}
                    onChange={(e) => setCharLimit(e.target.value)}
                    placeholder="예: 500"
                    className="flex-1 px-4 py-3 bg-white border-2 border-indigo-300 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none text-sm"
                    min="1"
                  />
                  <Button onClick={() => handleTune('charLimit')} disabled={isTuning} className="whitespace-nowrap">
                    적용하기
                  </Button>
                </div>
              </div>
            )}

            {isTuning && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-indigo-50 rounded-xl">
                  <svg className="animate-spin h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-sm font-medium text-indigo-900">튜닝 중...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

