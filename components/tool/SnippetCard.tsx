'use client';

import Card from '@/components/ui/Card';

interface SnippetCardProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SnippetCard({ value, onChange }: SnippetCardProps) {
  return (
    <Card>
      <div className="space-y-3">
        <div>
          <label className="block mb-2">
            <span className="text-sm font-semibold text-gray-900">
              조각 입력 <span className="text-red-500">*</span>
            </span>
          </label>
          <p className="text-xs text-gray-500 mb-3">
            키워드·제약·톤을 함께 적어도 됩니다. 줄바꿈도 가능합니다.
          </p>
        </div>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="예: 운동화 홍보, 2030 여성, 편안함 강조, 친근한 톤"
          className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200 resize-none text-sm placeholder:text-gray-400"
          rows={6}
          style={{ minHeight: '140px' }}
        />
        <div className="text-xs text-gray-500">
          <span>쉼표로 구분하거나 여러 줄로 작성 가능합니다</span>
        </div>
      </div>
    </Card>
  );
}

