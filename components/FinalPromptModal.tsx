'use client';

import { useState } from 'react';

interface FinalPromptModalProps {
  isOpen: boolean;
  prompt: string;
  onClose: () => void;
  onTune: (tuneType: 'shorter' | 'moreSpecific' | 'charLimit', charLimit?: number) => void;
  isProUser?: boolean;
}

export default function FinalPromptModal({
  isOpen,
  prompt,
  onClose,
  onTune,
  isProUser = false,
}: FinalPromptModalProps) {
  const [copiedFinal, setCopiedFinal] = useState(false);
  const [showCharLimit, setShowCharLimit] = useState(false);
  const [charLimit, setCharLimit] = useState<string>('500');
  const [isTuning, setIsTuning] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedFinal(true);
      setTimeout(() => setCopiedFinal(false), 2000);
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
      alert('글자수 정밀 지정은 PRO 기능입니다. PRO로 업그레이드하세요!');
      return;
    }
    setShowCharLimit(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 sticky top-0 bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              ✨ 최종 프롬프트
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* 프롬프트 표시 */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <pre className="text-gray-800 whitespace-pre-wrap font-mono text-sm leading-relaxed">
              {prompt}
            </pre>
          </div>

          {/* 복사 버튼 */}
          <button
            onClick={handleCopy}
            className="w-full btn-primary mb-6 text-lg py-4"
          >
            {copiedFinal ? '✓ 복사 완료!' : '📋 프롬프트 복사하기'}
          </button>

          {/* 최종 튜닝 섹션 */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              최종 튜닝 (선택사항)
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              필요하다면 프롬프트를 더 다듬을 수 있습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => handleTune('shorter')}
                disabled={isTuning}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all disabled:opacity-50"
              >
                <div className="text-2xl mb-2">📝</div>
                <div className="font-medium">더 짧게</div>
                <div className="text-xs text-gray-500 mt-1">
                  핵심만 남기기
                </div>
              </button>

              <button
                onClick={() => handleTune('moreSpecific')}
                disabled={isTuning}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all disabled:opacity-50"
              >
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-medium">더 구체적으로</div>
                <div className="text-xs text-gray-500 mt-1">
                  상세하게 다듬기
                </div>
              </button>

              <button
                onClick={handleCharLimitClick}
                disabled={isTuning}
                className={`p-4 border-2 rounded-lg transition-all disabled:opacity-50 relative ${
                  isProUser
                    ? 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                    : 'border-yellow-300 bg-yellow-50'
                }`}
              >
                {!isProUser && (
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    PRO
                  </div>
                )}
                <div className="text-2xl mb-2">📏</div>
                <div className="font-medium">글자수 지정</div>
                <div className="text-xs text-gray-500 mt-1">
                  정확한 길이 제한
                </div>
              </button>
            </div>

            {/* 글자수 입력 */}
            {showCharLimit && isProUser && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <label className="label">글자수 제한 (공백 포함)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={charLimit}
                    onChange={(e) => setCharLimit(e.target.value)}
                    placeholder="예: 500"
                    className="input-field"
                    min="1"
                  />
                  <button
                    onClick={() => handleTune('charLimit')}
                    disabled={isTuning}
                    className="btn-primary whitespace-nowrap"
                  >
                    적용
                  </button>
                </div>
              </div>
            )}

            {isTuning && (
              <div className="mt-4 text-center text-blue-600">
                튜닝 중...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

