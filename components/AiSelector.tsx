'use client';

const AI_TARGETS = [
  { id: 'chatgpt', label: 'ChatGPT', description: 'OpenAI' },
  { id: 'claude', label: 'Claude', description: 'Anthropic' },
  { id: 'gemini', label: 'Gemini', description: 'Google' },
  { id: 'auto', label: 'Auto Select', description: 'Automatic' },
];

interface AiSelectorProps {
  selected: string;
  onChange: (aiTarget: string) => void;
}

export default function AiSelector({ selected, onChange }: AiSelectorProps) {
  return (
    <div className="w-full">
      <label className="label">사용할 AI</label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {AI_TARGETS.map((ai) => (
          <button
            key={ai.id}
            onClick={() => onChange(ai.id)}
            className={`p-4 rounded-lg border-2 transition-all text-center ${
              selected === ai.id
                ? 'border-indigo-600 bg-indigo-50 shadow-sm'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="text-sm font-semibold text-gray-900 mb-1">{ai.label}</div>
            <div className="text-xs text-gray-500">{ai.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

