"use client";

import React, { useState, useEffect } from "react";
import { useUiLang } from "@/components/tool/UiLangContext";
import { getHistory, clearHistory, type HistoryItem } from "@/lib/storage";
import CopyButton from "./CopyButton";
import styles from "./HistoryPanel.module.css";

interface HistoryPanelProps {
  onRestore: (item: HistoryItem) => void;
}

export default function HistoryPanel({ onRestore }: HistoryPanelProps) {
  const { uiLang, t } = useUiLang();
  const [items, setItems] = useState<HistoryItem[]>([]);

  useEffect(() => {
    setItems(getHistory());
  }, []);

  function handleClear() {
    const { t: getT } = require("@/lib/i18n");
    const T = getT(uiLang === "en" ? "en" : "ko");
    if (window.confirm(T.clearConfirm)) {
      clearHistory();
      setItems([]);
    }
  }

  function handleRestore(item: HistoryItem) {
    onRestore(item);
  }

  function handleCopySelected(item: HistoryItem) {
    if (item.selectedFrame) {
      const selected = item.results.find((r) => r.frame === item.selectedFrame);
      if (selected) {
        navigator.clipboard.writeText(selected.text).catch(() => {});
      }
    }
  }

  if (items.length === 0) {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t("최근 기록", "History")}
          </h2>
        </div>
        <p className={styles.emptyText}>{t("기록이 없습니다.", "No history yet.")}</p>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {t("최근 기록", "History")}
        </h2>
        <button
          type="button"
          onClick={handleClear}
          className={styles.clearButton}
        >
          {t("전체 삭제", "Clear All")}
        </button>
      </div>
      <div className={styles.list}>
        {items.map((item) => {
          const selectedResult = item.selectedFrame
            ? item.results.find((r) => r.frame === item.selectedFrame)
            : null;

          return (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemContent}>
                <div className={styles.itemLeft}>
                  <div className={styles.timestamp}>
                    {new Date(item.timestamp).toLocaleString(
                      uiLang === "en" ? "en-US" : "ko-KR"
                    )}
                  </div>
                  <div className={styles.inputPreview}>
                    {item.inputText}
                  </div>
                  {item.selectedFrame && (
                    <div className={styles.selectedInfo}>
                      {t("선택된 프레임", "Selected frame")}: {item.selectedFrame}
                    </div>
                  )}
                  <div className={styles.itemActions}>
                    <button
                      type="button"
                      onClick={() => handleRestore(item)}
                      className={styles.restoreButton}
                    >
                      {t("복원", "Restore")}
                    </button>
                    {selectedResult && (
                      <button
                        type="button"
                        onClick={() => handleCopySelected(item)}
                        className={styles.copySelectedButton}
                      >
                        {t("선택 결과 복사", "Copy selected")}
                      </button>
                    )}
                  </div>
                </div>
                {selectedResult && (
                  <div className={styles.itemRight}>
                    <CopyButton text={selectedResult.text} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
