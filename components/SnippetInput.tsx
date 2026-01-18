'use client';

interface SnippetInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SnippetInput({ value, onChange }: SnippetInputProps) {
  return (
    <div className="w-full">
      <label className="label">
        조각 입력 <span className="text-indigo-600">*</span>
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="예: 인스타에 올릴 운동화 홍보 문구, 편안함 강조, 60대도 이해할 표현, 과장 금지"
        className="input-field min-h-[200px] resize-y"
        rows={8}
      />
      <p className="text-sm text-gray-500 mt-2 font-light">
        원하는 내용을 자유롭게 적어주세요. 쉼표로 구분하거나 여러 줄로 작성해도 됩니다.
      </p>
    </div>
  );
}

