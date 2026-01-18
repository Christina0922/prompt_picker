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
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container-saas py-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              프롬프트 생성
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              입력 → 5가지 전략 → 10초 완성
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Input Card */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl p-12 mb-8">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left: Input */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">입력</h2>
                  <textarea
                    value={snippets}
                    onChange={(e) => setSnippets(e.target.value)}
                    placeholder="예: 운동화 광고, 2030 여성, 편안함 강조"
                    className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200 resize-none text-lg placeholder:text-gray-400 leading-relaxed font-normal"
                    rows={10}
                    style={{ minHeight: '280px' }}
                  />
                </div>

                {/* Right: Settings */}
                <div className="lg:col-span-1 space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">목적</h3>
                    <select
                      value={goalType}
                      onChange={(e) => setGoalType(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-base font-medium"
                    >
                      <option value="content">콘텐츠</option>
                      <option value="analysis">분석</option>
                      <option value="code">코드</option>
                      <option value="translation">번역</option>
                      <option value="creative">창작</option>
                    </select>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">AI</h3>
                    <select
                      value={aiTarget}
                      onChange={(e) => setAiTarget(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-base font-medium"
                    >
                      <option value="auto">자동</option>
                      <option value="chatgpt">ChatGPT</option>
                      <option value="claude">Claude</option>
                      <option value="gemini">Gemini</option>
                    </select>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">길이</h3>
                    <select
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-base font-medium"
                    >
                      <option value="short">짧게</option>
                      <option value="medium">보통</option>
                      <option value="detailed">상세</option>
                    </select>
                  </div>
                </div>
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

            {/* Generate Button */}
            <div className="flex flex-col items-center gap-4 py-10">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !snippets.trim()}
                size="lg"
                className="min-w-[480px] h-20 text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-2xl"
              >
                {isGenerating ? '생성 중...' : '생성하기'}
              </Button>
              
              {!isGenerating && (
                <p className="text-sm text-gray-500 font-medium">
                  무료 · 하루 3회
                </p>
              )}
            </div>

            {/* Error */}
            {error && (
              <div className="card-saas bg-red-50 border-2 border-red-200 mb-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-red-900 mb-1">오류</h3>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                  <button
                    onClick={() => setError(null)}
                    className="text-red-400 hover:text-red-600 text-2xl font-bold ml-4"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            {/* Results */}
            {options.length > 0 && (
              <div id="results" className="mt-20">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-black text-gray-900 mb-4">완료</h2>
                  <p className="text-xl text-gray-600">5가지 전략</p>
                </div>
                <ResultsGrid options={options} onSelect={handleSelectPrompt} />
              </div>
            )}
          </div>
        </div>
      </div>

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
