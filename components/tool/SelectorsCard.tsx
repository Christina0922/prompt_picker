'use client';

import Card from '@/components/ui/Card';

interface SelectorsCardProps {
  goalType: string;
  onGoalTypeChange: (value: string) => void;
  aiTarget: string;
  onAiTargetChange: (value: string) => void;
  length: string;
  onLengthChange: (value: string) => void;
}

const GOALS = [
  { value: 'content', label: '콘텐츠' },
  { value: 'analysis', label: '분석' },
  { value: 'code', label: '코드' },
  { value: 'translation', label: '번역' },
  { value: 'creative', label: '창작' },
];

const AI_PLATFORMS = [
  { value: 'chatgpt', label: 'ChatGPT' },
  { value: 'claude', label: 'Claude' },
  { value: 'gemini', label: 'Gemini' },
  { value: 'auto', label: '자동' },
];

const LENGTHS = [
  { value: 'short', label: '짧게' },
  { value: 'medium', label: '보통' },
  { value: 'detailed', label: '상세' },
];

export default function SelectorsCard({
  goalType,
  onGoalTypeChange,
  aiTarget,
  onAiTargetChange,
  length,
  onLengthChange,
}: SelectorsCardProps) {
  return (
    <Card className="h-full">
      <div className="space-y-8">
        {/* Goal Selection */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4">
            목적 <span className="text-red-500">*</span>
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {GOALS.map((goal) => (
              <button
                key={goal.value}
                onClick={() => onGoalTypeChange(goal.value)}
                className={`px-2 py-3 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  goalType === goal.value
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                {goal.label}
              </button>
            ))}
          </div>
        </div>

        {/* AI Platform */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4">AI 플랫폼</h3>
          <div className="grid grid-cols-2 gap-2">
            {AI_PLATFORMS.map((platform) => (
              <button
                key={platform.value}
                onClick={() => onAiTargetChange(platform.value)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  aiTarget === platform.value
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {platform.label}
              </button>
            ))}
          </div>
        </div>

        {/* Length */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4">
            길이 <span className="text-red-500">*</span>
          </h3>
          <div className="space-y-2">
            {LENGTHS.map((len) => (
              <button
                key={len.value}
                onClick={() => onLengthChange(len.value)}
                className={`w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 text-left ${
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
    </Card>
  );
}

