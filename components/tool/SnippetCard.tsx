'use client';

import Card from '@/components/ui/Card';

interface SnippetCardProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SnippetCard({ value, onChange }: SnippetCardProps) {
  return (
    <Card className="h-full">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            조각 입력 <span className="text-red-500">*</span>
          </h3>
          <p className="text-sm text-gray-600">
            키워드, 제약사항, 원하는 톤을 자유롭게 입력하세요
          </p>
        </div>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="예시: 운동화 광고, 2030 여성, 편안함 강조, 친근한 톤, SNS용"
          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200 resize-none text-base placeholder:text-gray-400 leading-relaxed"
          rows={8}
          style={{ minHeight: '200px' }}
        />
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          <span>쉼표 또는 줄바꿈으로 구분</span>
        </div>
      </div>
    </Card>
  );
}

