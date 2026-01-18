'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
  remaining?: number;
  onUpgradeClick?: () => void;
}

export default function AppShell({ children, remaining = 3, onUpgradeClick }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">PP</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Prompt Picker</h1>
                <p className="text-xs text-gray-500">AI 프롬프트 생성 도구</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-100 text-green-800">
                  FREE
                </span>
                <span className="text-xs text-gray-600">
                  오늘 남은 <span className="font-semibold text-gray-900">{remaining}회</span>
                </span>
              </div>
              <button
                onClick={onUpgradeClick}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

