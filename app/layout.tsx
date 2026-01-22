import "./globals.css";
import { UiLangProvider } from "@/lib/i18n/UiLangProvider";

export const metadata = {
  title: "Prompt Picker",
  description: "Prompt Picker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <UiLangProvider>{children}</UiLangProvider>
      </body>
    </html>
  );
}
