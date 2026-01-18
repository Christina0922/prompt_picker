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
    charLimitValue?: number
  ) => {
    if (!finalPrompt) return;

    try {
      const response = await fetch('/api/tune', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          finalPrompt,
          tuneType,
          charLimitValue,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || '튜닝에 실패했습니다');
      }

      setFinalPrompt(data.tunedPrompt);
    } catch (err: any) {
      console.error('Tune error:', err);
    }
  };

  return (
    <ToolLayout remaining={remaining} onUpgradeClick={() => setShowProModal(true)}>
      <div className="container-saas">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            프롬프트 생성기
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            조각만 입력하면 AI가 5가지 전략의 완성된 프롬프트를 생성합니다
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Input Area */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Left: Snippet Input (2/3) */}
            <div className="lg:col-span-2">
              <SnippetCard value={snippets} onChange={setSnippets} />
            </div>

            {/* Right: Quick Settings (1/3) */}
            <div className="lg:col-span-1">
              <SelectorsCard
                goalType={goalType}
                onGoalTypeChange={setGoalType}
                aiTarget={aiTarget}
                onAiTargetChange={setAiTarget}
                length={length}
                onLengthChange={setLength}
              />
            </div>
          </div>

          {/* Advanced Options */}
          <div className="mb-10">
            <AdvancedOptionsCard
              language={language}
              onLanguageChange={setLanguage}
              tone={tone}
              onToneChange={setTone}
              outputFormat={outputFormat}
              onOutputFormatChange={setOutputFormat}
            />
          </div>

          {/* Generate Button - Centered & Large */}
          <div className="flex flex-col items-center gap-4 py-8">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !snippets.trim()}
              size="lg"
              className="min-w-[400px] h-16 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
            >
              {isGenerating ? '프롬프트 생성 중...' : '후보 5개 생성하기'}
            </Button>
            
            {!isGenerating && (
              <p className="text-sm text-gray-500">
                무료 체험 · 하루 3회까지 사용 가능
              </p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="card-saas bg-red-50 border-2 border-red-200 mb-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-red-900 mb-1">생성 오류</h3>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="text-red-400 hover:text-red-600 text-2xl font-bold ml-4 flex-shrink-0"
                >
                  ×
                </button>
              </div>
            </div>
          )}

          {/* Results Section */}
          {options.length > 0 && (
            <div id="results" className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">생성 완료</h2>
                <p className="text-lg text-gray-600">5가지 전략의 프롬프트가 준비되었습니다</p>
              </div>
              <ResultsGrid options={options} onSelect={handleSelectPrompt} />
            </div>
          )}
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
