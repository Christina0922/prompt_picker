'use client';

const GOAL_TYPES = [
  { id: 'content', label: '콘텐츠 작성', description: 'Content Creation' },
  { id: 'analysis', label: '분석/리서치', description: 'Analysis & Research' },
  { id: 'code', label: '코드 생성', description: 'Code Generation' },
  { id: 'translation', label: '번역/요약', description: 'Translation & Summary' },
  { id: 'creative', label: '창작/기획', description: 'Creative & Planning' },
];

interface GoalSelectorProps {
  selected: string;
  onChange: (goalType: string) => void;
}

export default function GoalSelector({ selected, onChange }: GoalSelectorProps) {
  return (
    <div className="w-full">
      <label className="label">
        목적 선택 <span className="text-indigo-600">*</span>
      </label>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {GOAL_TYPES.map((goal) => (
          <button
            key={goal.id}
            onClick={() => onChange(goal.id)}
            className={`p-4 rounded-lg border-2 transition-all text-center ${
              selected === goal.id
                ? 'border-indigo-600 bg-indigo-50 shadow-sm'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="text-sm font-semibold text-gray-900 mb-1">{goal.label}</div>
            <div className="text-xs text-gray-500">{goal.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

