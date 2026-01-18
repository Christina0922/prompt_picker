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
            원하는 내용을 자유롭게 입력하세요. 키워드, 제약사항, 톤 등을 포함할 수 있습니다.
          </p>
        </div>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="예: 인스타그램 게시물용 운동화 홍보 문구 작성, 편안함과 스타일 강조, 2030 여성 타겟, 친근하고 트렌디한 톤, 과장 표현 지양"
          className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200 resize-none text-sm placeholder:text-gray-400"
          rows={8}
        />
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>쉼표로 구분하거나 여러 줄로 작성 가능합니다</span>
        </div>
      </div>
    </Card>
  );
}

