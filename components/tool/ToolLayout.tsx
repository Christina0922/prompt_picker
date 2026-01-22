'use client';

import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { ReactNode } from 'react';
import { useUiLang } from '@/lib/i18n/UiLangProvider';

interface ToolLayoutProps {
  children: ReactNode;
  remaining: number;
  onUpgradeClick: () => void;
}

function LangToggle() {
  const { uiLang, setUiLang } = useUiLang();

  return (
    <div className="flex items-center gap-1 bg-gray-100 p-1" role="tablist">
      <button
        onClick={() => setUiLang('kr')}
        role="tab"
        aria-pressed={uiLang === 'kr'}
        className={`px-3 py-1.5 text-sm font-medium min-h-[44px] transition-colors ${
          uiLang === 'kr'
            ? 'bg-gray-800 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        KR
      </button>
      <button
        onClick={() => setUiLang('en')}
        role="tab"
        aria-pressed={uiLang === 'en'}
        className={`px-3 py-1.5 text-sm font-medium min-h-[44px] transition-colors ${
          uiLang === 'en'
            ? 'bg-gray-800 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function ToolLayout({ children, remaining, onUpgradeClick }: ToolLayoutProps) {
  const { t } = useUiLang();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 py-4">
        <div className="container-saas">
          <div className="flex items-center justify-between">
            {/* Left: Brand */}
            <Link href="/" className="flex items-center gap-3 group no-underline">
              <div className="w-9 h-9 bg-gray-800 flex items-center justify-center">
                <span className="text-white font-medium text-xs">PP</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-800 no-underline">Prompt Picker</h1>
              </div>
            </Link>

            {/* Right: Status & Action */}
            <div className="flex items-center gap-4">
              <LangToggle />
              <div className="flex items-center gap-3 px-6 py-2.5 bg-gray-100 rounded-lg border border-gray-200">
                <Badge variant="success">{t('무료', 'FREE')}</Badge>
                <div className="text-sm text-gray-700">
                  {t('오늘 남은', 'Remaining today')} <span className="font-bold text-gray-900">{remaining}</span>
                </div>
              </div>
              <Button onClick={onUpgradeClick} size="sm">
                {t('업그레이드', 'Upgrade')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="section-major">
        {children}
      </main>
    </div>
  );
}
