import './globals.css';
import type { Metadata } from 'next';
import { UILangProvider } from '../components/tool/UiLangContext';

export const metadata: Metadata = {
  title: 'Prompt Picker',
  description: 'Prompt Picker',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* ✅ 정석: 앱 전체를 언어 Provider로 감싸서,
            어디서든 useUiLang()을 써도 빌드/프리렌더에서 터지지 않게 합니다. */}
        <UILangProvider>{children}</UILangProvider>
      </body>
    </html>
  );
}
