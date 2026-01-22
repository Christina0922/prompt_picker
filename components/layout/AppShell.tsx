"use client";

import React from "react";
import Link from "next/link";

// ⚠️ 이 import 경로가 누님 프로젝트와 다르면, 기존 AppShell.tsx에 있던 useUiLang import 줄을 그대로 가져와서 여기만 바꾸시면 됩니다.
import { useUiLang } from "@/lib/i18n/UiLangProvider";

type UiLang = "ko" | "en";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={styles.page}>
      <TopHeader />
      <main style={styles.main}>{children}</main>
    </div>
  );
}

function TopHeader() {
  const { lang, setLang, t } = useUiLang() as unknown as {
    lang: UiLang;
    setLang: (next: UiLang) => void;
    t?: (key: string) => string;
  };

  const startLabel = typeof t === "function" ? t("start") : "시작하기";

  return (
    <header style={styles.header}>
      <div style={styles.headerInner}>
        <Link href="/" style={styles.brandWrap} aria-label="Prompt Picker Home">
          <span style={styles.brandBadge} aria-hidden="true">
            PP
          </span>
          <span style={styles.brandTitle}>Prompt Picker</span>
        </Link>

        <div style={styles.rightControls}>
          <LangSegment lang={lang} setLang={setLang} />
          <Link href="/tool" style={styles.startBtn}>
            {startLabel || "시작하기"}
          </Link>
        </div>
      </div>
    </header>
  );
}

function LangSegment({
  lang,
  setLang,
}: {
  lang: UiLang;
  setLang: (next: UiLang) => void;
}) {
  const isKo = lang === "ko";
  const isEn = lang === "en";

  return (
    <div style={styles.segmentWrap} role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLang("ko")}
        aria-pressed={isKo}
        aria-label="Korean"
        style={{
          ...styles.segmentBtn,
          ...(isKo ? { ...styles.segmentBtnActive, ...styles.segmentKoActive } : null),
        }}
      >
        한
      </button>

      <span style={styles.segmentDivider} aria-hidden="true" />

      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={isEn}
        aria-label="English"
        style={{
          ...styles.segmentBtn,
          ...(isEn ? { ...styles.segmentBtnActive, ...styles.segmentEnActive } : null),
        }}
      >
        EN
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#0b1220",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.92)",
    borderBottom: "1px solid rgba(15, 23, 42, 0.10)",
    backdropFilter: "blur(10px)",
  },

  headerInner: {
    height: 68,
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },

  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    color: "inherit",
    minWidth: 0,
  },

  brandBadge: {
    width: 38,
    height: 38,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    border: "1px solid rgba(15, 23, 42, 0.14)",
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.05), rgba(15,23,42,0.02))",
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: "0.02em",
    flex: "0 0 auto",
  },

  // 폰트/선명도는 globals.css에서 적용되지만,
  // 헤더 텍스트는 더 또렷하게 체감되도록 굵기/자간/색을 추가 강화
  brandTitle: {
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: "-0.03em",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#0b1220",
  },

  rightControls: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flex: "0 0 auto",
  },

  // ✅ 한/EN 구분 확실: 기본은 중립, 선택 시 색상 다르게
  segmentWrap: {
    display: "inline-flex",
    alignItems: "center",
    padding: 4,
    borderRadius: 999,
    border: "1px solid rgba(15, 23, 42, 0.18)",
    background: "rgba(15, 23, 42, 0.06)",
    boxShadow: "0 1px 2px rgba(2, 6, 23, 0.06)",
  },
  segmentBtn: {
    border: 0,
    cursor: "pointer",
    padding: "8px 12px",
    minWidth: 44,
    borderRadius: 999,
    background: "transparent",
    color: "rgba(11, 18, 32, 0.70)",
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: "-0.01em",
    lineHeight: 1,
  },
  segmentBtnActive: {
    color: "#ffffff",
    boxShadow: "0 2px 6px rgba(2, 6, 23, 0.22)",
  },
  // 한국어 선택: 파란 계열
  segmentKoActive: {
    background: "#1D4ED8", // blue-700
    border: "1px solid rgba(29, 78, 216, 0.55)",
  },
  // 영어 선택: 초록 계열
  segmentEnActive: {
    background: "#059669", // emerald-600
    border: "1px solid rgba(5, 150, 105, 0.55)",
  },
  segmentDivider: {
    width: 1,
    height: 18,
    background: "rgba(15, 23, 42, 0.18)",
  },

  // ✅ start 더 선명하게: 글자 크기/굵기/대비 강화
  startBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 14,
    textDecoration: "none",
    background: "#0b1220",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 900,
    letterSpacing: "-0.01em",
    border: "1px solid rgba(0,0,0,0.26)",
    boxShadow: "0 12px 26px rgba(2, 6, 23, 0.18)",
  },

  main: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "18px",
  },
};
