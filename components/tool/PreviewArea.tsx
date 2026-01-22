"use client";

import React from "react";
import { useUiLang } from "@/components/tool/UiLangContext";
import CopyButton from "./CopyButton";
import styles from "./PreviewArea.module.css";
import { t as getT } from "@/lib/i18n";
import type { PromptResult } from "@/lib/storage";

export interface PreviewItem {
  key: string;
  title?: string;
  prompt: string;
}

interface PreviewAreaProps {
  results: PromptResult[];
  selectedFrame?: "A" | "B" | "C" | "D" | "E";
  onSelectFrame: (frame: "A" | "B" | "C" | "D" | "E") => void;
  error?: string;
}

export default function PreviewArea({
  results,
  selectedFrame,
  onSelectFrame,
  error,
}: PreviewAreaProps) {
  const { uiLang, t } = useUiLang();
  const isEn = uiLang === "en";
  const lang = isEn ? "en" : "ko";
  const T = getT(lang);

  // 선택된 카드를 맨 위로 정렬
  const sortedResults = React.useMemo(() => {
    if (!selectedFrame) return results;
    const selected = results.find((r) => r.frame === selectedFrame);
    const others = results.filter((r) => r.frame !== selectedFrame);
    return selected ? [selected, ...others] : results;
  }, [results, selectedFrame]);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {t("결과", "Output")}
      </h2>
      <p className={styles.desc}>
        {t(
          "A-E 결과를 비교한 뒤, 마음에 드는 것을 복사해 사용하세요.",
          "Compare A–E results and copy the best one."
        )}
      </p>

      {error ? (
        <div className={styles.errorBox}>
          <div className={styles.errorTitle}>
            {t("오류", "Error")}
          </div>
          <div className={styles.errorMsg}>{error}</div>
        </div>
      ) : results.length === 0 ? (
        <div className={styles.emptyBox}>
          {t("아직 결과가 없습니다.", "No output yet.")}
        </div>
      ) : (
        <div className={styles.resultsList}>
          {sortedResults.map((result) => {
            const isSelected = result.frame === selectedFrame;
            return (
              <div
                key={result.frame}
                className={`${styles.resultCard} ${
                  isSelected ? styles.resultCardSelected : ""
                }`}
              >
                <div className={styles.resultCardHeader}>
                  <div
                    className={`${styles.frameBadge} ${
                      isSelected ? styles.frameBadgeSelected : ""
                    }`}
                  >
                    {result.frame}
                  </div>
                  <div className={styles.frameTitle}>{result.title}</div>
                  {isSelected && (
                    <div className={styles.selectedLabel}>
                      {T.selected}
                    </div>
                  )}
                </div>
                <div className={styles.frameDesc}>
                  {T.frameDescriptions[result.frame]}
                </div>
                <pre className={styles.resultText}>{result.text}</pre>
                <div className={styles.resultActions}>
                  <CopyButton text={result.text} />
                  <button
                    type="button"
                    onClick={() => onSelectFrame(result.frame)}
                    className={`${styles.selectButton} ${
                      isSelected ? styles.selectButtonSelected : ""
                    }`}
                  >
                    {isSelected
                      ? T.selected
                      : T.selectResult}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
