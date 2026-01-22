import "./globals.css";
import { UiLangProvider } from "@/components/tool/UiLangContext";

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
