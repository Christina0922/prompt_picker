// app/tool/layout.tsx
import * as React from "react";
import { UiLangProvider } from "@/components/tool/UiLangProvider";

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <UiLangProvider>{children}</UiLangProvider>;
}
