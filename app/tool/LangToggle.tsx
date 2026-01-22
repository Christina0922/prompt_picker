"use client";

import React from "react";
import styles from "./LangToggle.module.css";
import { useUiLang } from "@/lib/i18n/UiLangProvider";

export default function LangToggle() {
  const { uiLang, setUiLang } = useUiLang();

  return (
    <div className={styles.wrap} role="tablist" aria-label="Language toggle">
      <button
        type="button"
        className={`${styles.btn} ${uiLang === "kr" ? styles.active : ""}`}
        onClick={() => setUiLang("kr")}
        role="tab"
        aria-selected={uiLang === "kr"}
      >
        한
      </button>

      <div className={styles.divider} aria-hidden="true" />

      <button
        type="button"
        className={`${styles.btn} ${uiLang === "en" ? styles.active : ""}`}
        onClick={() => setUiLang("en")}
        role="tab"
        aria-selected={uiLang === "en"}
      >
        EN
      </button>
    </div>
  );
}
