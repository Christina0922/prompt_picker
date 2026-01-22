"use client";

import React from "react";
import Link from "next/link";
import { useUiLang } from "@/components/tool/UiLangContext";
import styles from "./TopTitleBar.module.css";

export default function TopTitleBar() {
  const { uiLang, setUiLang, t } = useUiLang();
  const isEn = uiLang === "en";

  const handleLangChange = (next: "ko" | "en") => {
    const newLang: "kr" | "en" = next === "ko" ? "kr" : "en";
    setUiLang(newLang);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Top Row: Kicker */}
        <div className={styles.kicker}>
          {t(
            "실무용 프롬프트 · 프레임 기반 · 즉시 복사",
            "Practical prompts · Frame-based · Copy-ready"
          )}
        </div>

        {/* Middle Row: Title (Left) + Home Button & Lang Toggle (Right) */}
        <div className={styles.titleRow}>
          <h1 className={styles.title}>
            {t("프롬프트 생성기", "Prompt Generator")}
          </h1>

          {/* Right-aligned controls */}
          <div className={styles.controls}>
            <Link href="/" className={styles.homeButton}>
              {t("홈", "Home")}
            </Link>
            <LangToggle
              lang={isEn ? "en" : "ko"}
              onChange={handleLangChange}
            />
          </div>
        </div>

        {/* Bottom Row: Subtitle */}
        <p className={styles.subtitle}>
          {t(
            "목적과 옵션을 선택하면 같은 입력도 프레임별로 다르게 정리됩니다. 결과는 바로 복사 가능한 형태로 출력됩니다.",
            "Choose a goal and options. The same input will be organized differently per frame. Results are output in a copy-ready format."
          )}
        </p>
      </div>
    </header>
  );
}

function LangToggle({
  lang,
  onChange,
}: {
  lang: "ko" | "en";
  onChange: (next: "ko" | "en") => void;
}) {
  const isKo = lang === "ko";
  const isEn = lang === "en";

  return (
    <div className={styles.langToggle} role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => onChange("ko")}
        className={`${styles.langButton} ${
          isKo ? styles.langButtonActive : styles.langButtonInactive
        }`}
        aria-current={isKo ? "page" : undefined}
        aria-label="Korean"
      >
        한
      </button>

      <span className={styles.langSeparator} aria-hidden="true">
        |
      </span>

      <button
        type="button"
        onClick={() => onChange("en")}
        className={`${styles.langButton} ${
          isEn ? styles.langButtonActive : styles.langButtonInactive
        }`}
        aria-current={isEn ? "page" : undefined}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
