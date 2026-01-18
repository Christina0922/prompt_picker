'use client';

import { useState } from 'react';
import ToolLayout from '@/components/tool/ToolLayout';
import SnippetCard from '@/components/tool/SnippetCard';
import SelectorsCard from '@/components/tool/SelectorsCard';
import AdvancedOptionsCard from '@/components/tool/AdvancedOptionsCard';
import ResultsGrid, { type PromptOption } from '@/components/tool/ResultsGrid';
import FinalPanel from '@/components/tool/FinalPanel';
import ProGateModal from '@/components/ProGateModal';
import Button from '@/components/ui/Button';
import { checkRateLimit, getRemainingRequests } from '@/lib/rateLimit';

export default function ToolPage() {
  // Form state
  const [snippets, setSnippets] = useState('');
  const [goalType, setGoalType] = useState('content');
  const [aiTarget, setAiTarget] = useState('auto');
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');
  const [outputFormat, setOutputFormat] = useState('paragraph');

  // Result state
  const [isGenerating, setIsGenerating] = useState(false);
  const [options, setOptions] = useState<PromptOption[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Final prompt state
  const [selectedPrompt, setSelectedPrompt] = useState<PromptOption | null>(null);
  const [finalPrompt, setFinalPrompt] = useState('');
  const [showFinalPanel, setShowFinalPanel] = useState(false);

  // Rate limit state
  const [showProModal, setShowProModal] = useState(false);
  const [rateLimitInfo, setRateLimitInfo] = useState({ remaining: 3, resetsAt: new Date() });

  const remaining = getRemainingRequests();

  const handleGenerate = async () => {
    if (!snippets.trim()) {
      setError('조각을 입력해주세요');
      return;
    }

    const rateLimit = checkRateLimit();
    if (!rateLimit.allowed) {
      setRateLimitInfo({
        remaining: rateLimit.remaining,
        resetsAt: rateLimit.resetsAt,
      });
      setShowProModal(true);
      return;
    }

    setIsGenerating(true);
    setError(null);
    setOptions([]);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          snippets,
          goalType,
          aiTarget,
          language,
          tone,
          lengthPreset: length,
          outputFormat,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || '생성에 실패했습니다');
      }

      setOptions(data.options || []);
      
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err: any) {
      setError(err.message || '결과 생성에 실패했습니다. 조각을 조금 더 구체적으로 적어주세요.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectPrompt = (option: PromptOption) => {
    setSelectedPrompt(option);
    setFinalPrompt(option.promptText);
    setShowFinalPanel(true);
  };

  const handleTune = async (
    tuneType: 'shorter' | 'moreSpecific' | 'charLimit',
    charLimit?: number
  ) => {
    if (!finalPrompt) return;

    try {
      const response = await fetch('/api/tune', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          finalPrompt,
          tuneType,
          charLimitValue: charLimit,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || '튜닝에 실패했습니다');
      }

      setFinalPrompt(data.tunedPrompt);
    } catch (err: any) {
      alert(err.message || '튜닝에 실패했습니다');
    }
  };

  return (
    <ToolLayout remaining={remaining} onUpgradeClick={() => setShowProModal(true)}>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">
            프롬프트 후보 생성
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            조각을 입력하고 옵션을 선택하면, 5가지 전략의 최적화된 프롬프트가 생성됩니다
          </p>
        </div>

        {/* Main Form Area - 2 Column Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <SnippetCard value={snippets} onChange={setSnippets} />
          <SelectorsCard
            goalType={goalType}
            onGoalTypeChange={setGoalType}
            aiTarget={aiTarget}
            onAiTargetChange={setAiTarget}
            length={length}
            onLengthChange={setLength}
          />
        </div>

        {/* Advanced Options */}
        <AdvancedOptionsCard
          language={language}
          onLanguageChange={setLanguage}
          tone={tone}
          onToneChange={setTone}
          outputFormat={outputFormat}
          onOutputFormatChange={setOutputFormat}
        />

        {/* Generate CTA */}
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !snippets.trim()}
            fullWidth
            size="lg"
            className="max-w-md shadow-2xl"
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                프롬프트 생성 중...
              </>
            ) : (
              <>
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                후보 5개 생성
              </>
            )}
          </Button>
          
          {!isGenerating && snippets.trim() && (
            <p className="text-sm text-gray-500">
              생성 버튼을 클릭하면 AI가 5가지 전략의 프롬프트를 생성합니다
            </p>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-5 animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-red-900 mb-1">오류 발생</h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
              <button
                onClick={() => setError(null)}
                className="text-red-400 hover:text-red-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Results Section */}
        <div id="results">
          <ResultsGrid options={options} onSelect={handleSelectPrompt} />
        </div>
      </div>

      {/* Modals */}
      <FinalPanel
        isOpen={showFinalPanel}
        prompt={finalPrompt}
        onClose={() => setShowFinalPanel(false)}
        onTune={handleTune}
        isProUser={false}
      />

      <ProGateModal
        isOpen={showProModal}
        onClose={() => setShowProModal(false)}
        remaining={rateLimitInfo.remaining}
        resetsAt={rateLimitInfo.resetsAt}
      />
    </ToolLayout>
  );
}
