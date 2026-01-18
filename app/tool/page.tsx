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
      <div className="container-saas py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            프롬프트 생성기
          </h1>
          <p className="text-lg text-gray-600">
            조각을 입력하면 5가지 전략의 프롬프트가 생성됩니다
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Grid */}
          <div className="grid lg:grid-cols-5 gap-6 mb-6">
            {/* Left: Input (3/5) */}
            <div className="lg:col-span-3">
              <div className="card-saas h-full">
                <h2 className="text-xl font-bold text-gray-900 mb-4">입력</h2>
                <textarea
                  value={snippets}
                  onChange={(e) => setSnippets(e.target.value)}
                  placeholder="예: 운동화 광고, 2030 여성 타겟, 편안함 강조"
                  className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all resize-none text-base placeholder:text-gray-400 leading-relaxed"
                  rows={12}
                />
                <p className="text-xs text-gray-500 mt-3">
                  쉼표 또는 줄바꿈으로 구분하여 입력하세요
                </p>
              </div>
            </div>

            {/* Right: Options (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Goal */}
              <div className="card-saas">
                <h3 className="text-base font-bold text-gray-900 mb-3">목적</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'content', label: '콘텐츠' },
                    { value: 'analysis', label: '분석' },
                    { value: 'code', label: '코드' },
                    { value: 'translation', label: '번역' },
                    { value: 'creative', label: '창작' },
                  ].map((goal) => (
                    <button
                      key={goal.value}
                      onClick={() => setGoalType(goal.value)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                        goalType === goal.value
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                      }`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI */}
              <div className="card-saas">
                <h3 className="text-base font-bold text-gray-900 mb-3">AI 플랫폼</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'auto', label: '자동' },
                    { value: 'chatgpt', label: 'ChatGPT' },
                    { value: 'claude', label: 'Claude' },
                    { value: 'gemini', label: 'Gemini' },
                  ].map((ai) => (
                    <button
                      key={ai.value}
                      onClick={() => setAiTarget(ai.value)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                        aiTarget === ai.value
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                      }`}
                    >
                      {ai.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Length */}
              <div className="card-saas">
                <h3 className="text-base font-bold text-gray-900 mb-3">길이</h3>
                <div className="space-y-2">
                  {[
                    { value: 'short', label: '짧게' },
                    { value: 'medium', label: '보통' },
                    { value: 'detailed', label: '상세' },
                  ].map((len) => (
                    <button
                      key={len.value}
                      onClick={() => setLength(len.value)}
                      className={`w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-left transition-all ${
                        length === len.value
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                      }`}
                    >
                      {len.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Advanced */}
          <div className="mb-8">
            <AdvancedOptionsCard
              language={language}
              onLanguageChange={setLanguage}
              tone={tone}
              onToneChange={setTone}
              outputFormat={outputFormat}
              onOutputFormatChange={setOutputFormat}
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 py-6">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !snippets.trim()}
              size="lg"
              className="min-w-[320px] h-14 text-lg font-bold shadow-lg"
            >
              {isGenerating ? '생성 중...' : '후보 5개 생성하기'}
            </Button>
            <p className="text-sm text-gray-500">무료 · 하루 3회까지</p>
          </div>

          {/* Error */}
          {error && (
            <div className="card-saas bg-red-50 border-2 border-red-200 mb-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-red-900 mb-1">오류</h3>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
                <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600 text-2xl font-bold ml-4">×</button>
              </div>
            </div>
          )}

          {/* Results */}
          {options.length > 0 && (
            <div id="results" className="mt-16">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">생성 완료</h2>
                <p className="text-lg text-gray-600">5가지 전략 중 하나를 선택하세요</p>
              </div>
              <ResultsGrid options={options} onSelect={handleSelectPrompt} />
            </div>
          )}
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
