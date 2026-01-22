"use client";

import React from "react";
import TopTitleBar from "@/components/TopTitleBar";
import PromptGeneratorPage from "@/components/PromptGeneratorPage";

// 동적 렌더링으로 설정 (프리렌더링 방지)
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <TopTitleBar />
      <PromptGeneratorPage />
    </div>
  );
}
