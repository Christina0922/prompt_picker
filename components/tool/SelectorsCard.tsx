'use client';

import Card from '@/components/ui/Card';
import Segmented from '@/components/ui/Segmented';

interface SelectorsCardProps {
  goalType: string;
  onGoalTypeChange: (value: string) => void;
  aiTarget: string;
  onAiTargetChange: (value: string) => void;
  length: string;
  onLengthChange: (value: string) => void;
}

const GOALS = [
  { value: 'content', label: '콘텐츠 작성', sublabel: 'Content' },
  { value: 'analysis', label: '분석', sublabel: 'Analysis' },
  { value: 'code', label: '코드', sublabel: 'Code' },
  { value: 'translation', label: '번역', sublabel: 'Translation' },
  { value: 'creative', label: '창작', sublabel: 'Creative' },
];

const AI_PLATFORMS = [
  { value: 'chatgpt', label: 'ChatGPT' },
  { value: 'claude', label: 'Claude' },
  { value: 'gemini', label: 'Gemini' },
  { value: 'auto', label: '자동' },
];

const LENGTHS = [
  { value: 'short', label: '짧게', sublabel: 'Concise' },
  { value: 'medium', label: '보통', sublabel: 'Balanced' },
  { value: 'detailed', label: '상세', sublabel: 'Detailed' },
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
    <Card>
      <div className="space-y-6">
        {/* Goal Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            목적 <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-5 gap-2">
            {GOALS.map((goal) => (
              <button
                key={goal.value}
                onClick={() => onGoalTypeChange(goal.value)}
                className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                  goalType === goal.value
                    ? 'border-indigo-500 bg-indigo-50 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="text-xs font-semibold text-gray-900">{goal.label}</div>
                <div className="text-xs text-gray-500 mt-1">{goal.sublabel}</div>
              </button>
            ))}
          </div>
        </div>

        {/* AI Platform */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            AI 플랫폼
          </label>
          <Segmented
            options={AI_PLATFORMS}
            value={aiTarget}
            onChange={onAiTargetChange}
            fullWidth
          />
        </div>

        {/* Length */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            길이 <span className="text-red-500">*</span>
          </label>
          <Segmented
            options={LENGTHS}
            value={length}
            onChange={onLengthChange}
            fullWidth
          />
        </div>
      </div>
    </Card>
  );
}

