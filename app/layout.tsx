// app/layout.tsx
import "./globals.css";

import * as React from "react";
import AppShell from "@/components/layout/AppShell";
import { UiLangProvider } from "@/components/tool/UiLangProvider";

export const metadata = {
  title: "Prompt Picker",
  description: "경영·기획 전문가용 B2B 프롬프트 생성기",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <UiLangProvider>
          <AppShell>{children}</AppShell>
        </UiLangProvider>
      </body>
    </html>
  );
}
