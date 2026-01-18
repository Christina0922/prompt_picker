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
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  goalType === goal.value
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {goal.label}
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

