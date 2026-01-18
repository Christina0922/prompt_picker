'use client';

import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { ReactNode } from 'react';

interface ToolLayoutProps {
  children: ReactNode;
  remaining: number;
  onUpgradeClick: () => void;
}

export default function ToolLayout({ children, remaining, onUpgradeClick }: ToolLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/95">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Brand */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <span className="text-white font-bold">PP</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Prompt Picker</h1>
                <p className="text-xs text-gray-500">AI 프롬프트 생성 플랫폼</p>
              </div>
            </Link>

            {/* Right: Status & Action */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200">
                <Badge variant="success">FREE</Badge>
                <div className="text-sm">
                  <span className="text-gray-600">오늘 남은</span>
                  <span className="ml-1.5 font-bold text-gray-900">{remaining}회</span>
                </div>
              </div>
              <Button onClick={onUpgradeClick} size="sm">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}

