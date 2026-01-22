"use client";

import React, { useState, useMemo } from "react";
import InputArea from "./tool/InputArea";
import PreviewArea from "./tool/PreviewArea";
import HistoryPanel from "./tool/HistoryPanel";
import { Purpose, Platform, LengthOpt, Tone, Format } from "@/config/options";
import { FRAMES, RECOMMEND_ORDER } from "@/config/frames";
import { CHECKLIST_ROWS, BLACKLIST } from "@/config/prompts";
import { useUiLang } from "@/components/tool/UiLangContext";
import { saveHistory, type HistoryItem, type PromptResult } from "@/lib/storage";
import { buildPromptVariants, type PromptOptions } from "@/lib/promptBuilder";
import styles from "./PromptGeneratorPage.module.css";

export default function PromptGeneratorPage() {
  const { uiLang, t } = useUiLang();
  const isEn = uiLang === "en";
  const lang = isEn ? "en" : "ko";

  const [input, setInput] = useState("");
  const [purpose, setPurpose] = useState<Purpose>("content");
  const [platform, setPlatform] = useState<Platform>("auto");
  const [length, setLength] = useState<LengthOpt>("normal");
  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [tone, setTone] = useState<Tone>("neutral");
  const [format, setFormat] = useState<Format>("plain");
  const [mustInclude, setMustInclude] = useState("");
  const [avoid, setAvoid] = useState("");

  const [results, setResults] = useState<PromptResult[]>([]);
  const [selectedFrame, setSelectedFrame] = useState<"A" | "B" | "C" | "D" | "E" | undefined>(undefined);
  const [error, setError] = useState<string>("");

  const canRun = useMemo(() => input.trim().length > 0, [input]);

  // History 복원
  function handleRestore(item: HistoryItem) {
    setInput(item.inputText);
    setPurpose(item.options.purpose as Purpose);
    setPlatform(item.options.platform as Platform);
    setLength(item.options.length as LengthOpt);
    setTone(item.options.tone as Tone);
    setFormat(item.options.format as Format);
    setMustInclude(item.options.mustInclude || "");
    setAvoid(item.options.avoid || "");
    setMinLength(item.options.minLength || "");
    setMaxLength(item.options.maxLength || "");
    setResults(item.results);
    setSelectedFrame(item.selectedFrame);
  }

  // 후보 5개 생성
  function handleGenerate() {
    if (!canRun) return;

    setError("");
    setSelectedFrame(undefined);

    try {
      const options: PromptOptions = {
        input: input.trim(),
        purpose,
        platform,
        length,
        tone,
        format,
        mustInclude: mustInclude.trim() || undefined,
        avoid: avoid.trim() || undefined,
        minLength: minLength.trim() || undefined,
        maxLength: maxLength.trim() || undefined,
      };

      const variants = buildPromptVariants(options, lang);
      setResults(variants);

      // History 저장
      const historyItem: HistoryItem = {
        id: `history_${Date.now()}`,
        timestamp: Date.now(),
        lang: uiLang,
        inputText: input.trim(),
        options: {
          purpose,
          platform,
          length,
          tone,
          format,
          mustInclude: mustInclude.trim() || undefined,
          avoid: avoid.trim() || undefined,
          minLength: minLength.trim() || undefined,
          maxLength: maxLength.trim() || undefined,
        },
        results: variants,
        selectedFrame: undefined,
      };
      saveHistory(historyItem);
    } catch (e: any) {
      setError(e?.message ?? "Generation failed");
    }
  }

  // 프레임 선택
  function handleSelectFrame(frame: "A" | "B" | "C" | "D" | "E") {
    setSelectedFrame(frame);

    // History 업데이트 (선택된 프레임 저장)
    if (results.length > 0) {
      const existing = results.find((r) => r.frame === frame);
      if (existing) {
        const historyItem: HistoryItem = {
          id: `history_${Date.now()}`,
          timestamp: Date.now(),
          lang: uiLang,
          inputText: input.trim(),
          options: {
            purpose,
            platform,
            length,
            tone,
            format,
            mustInclude: mustInclude.trim() || undefined,
            avoid: avoid.trim() || undefined,
            minLength: minLength.trim() || undefined,
            maxLength: maxLength.trim() || undefined,
          },
          results,
          selectedFrame: frame,
        };
        saveHistory(historyItem);
      }
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <InputArea
              input={input}
              onInputChange={setInput}
              purpose={purpose}
              onPurposeChange={setPurpose}
              platform={platform}
              onPlatformChange={setPlatform}
              length={length}
              onLengthChange={setLength}
              minLength={minLength}
              onMinLengthChange={setMinLength}
              maxLength={maxLength}
              onMaxLengthChange={setMaxLength}
              tone={tone}
              onToneChange={setTone}
              format={format}
              onFormatChange={setFormat}
              mustInclude={mustInclude}
              onMustIncludeChange={setMustInclude}
              avoid={avoid}
              onAvoidChange={setAvoid}
            />

            <div className={styles.generateButton}>
              <button
                type="button"
                onClick={handleGenerate}
                disabled={!canRun}
                className={`${styles.button} ${
                  !canRun ? styles.buttonDisabled : styles.buttonPrimary
                }`}
              >
                {t("후보 5개 생성하기", "Generate 5 candidates")}
              </button>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <PreviewArea
              results={results}
              selectedFrame={selectedFrame}
              onSelectFrame={handleSelectFrame}
              error={error}
            />

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                {t("전략 프레임 표", "Strategy Frame Table")}
              </h2>
              <p className={styles.cardDesc}>
                {t(
                  "같은 입력이라도 프레임에 따라 '목적/구조/톤'이 달라집니다.",
                  'Even with the same input, the "goal/structure/tone" changes by frame.'
                )}
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead className={styles.tableHead}>
                    <tr className={styles.tableHeadRow}>
                      <th className={styles.tableHeadCell}>
                        {t("프레임", "Frame")}
                      </th>
                      <th className={styles.tableHeadCell}>
                        {t("목적", "Goal")}
                      </th>
                      <th className={styles.tableHeadCell}>
                        {t("출력", "Output")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className={styles.tableBody}>
                    {FRAMES.map((frame) => (
                      <tr key={frame.key} className={styles.tableRow}>
                        <td className={`${styles.tableCell} ${styles.tableCellBold}`}>
                          {frame.key}
                        </td>
                        <td className={styles.tableCell}>
                          {isEn ? frame.goal.en : frame.goal.ko}
                        </td>
                        <td className={styles.tableCell}>
                          {isEn ? frame.output.en : frame.output.ko}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.tableNote}>
                {isEn ? RECOMMEND_ORDER.en : RECOMMEND_ORDER.ko}
              </div>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                {t("실무 입력 체크표", "Practical Input Checklist")}
              </h2>
              <p className={styles.cardDesc}>
                {t(
                  "입력 시 참고할 수 있는 체크리스트입니다.",
                  "A checklist to reference when entering input."
                )}
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead className={styles.tableHead}>
                    <tr className={styles.checklistTableHeadRow}>
                      <th className={styles.tableHeadCell}>
                        {t("항목", "Item")}
                      </th>
                      <th className={styles.tableHeadCell}>
                        {t("권장 사항", "Recommended")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className={styles.tableBody}>
                    {(isEn ? CHECKLIST_ROWS.en : CHECKLIST_ROWS.ko).map(
                      (r, idx) => (
                        <tr key={idx} className={styles.checklistTableRow}>
                          <td className={`${styles.tableCell} ${styles.tableCellBold}`}>
                            {r.item}
                          </td>
                          <td className={styles.tableCell}>
                            {r.recommended}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <div className={styles.tableNote}>
                {isEn ? BLACKLIST.en : BLACKLIST.ko}
              </div>
            </div>

            <HistoryPanel onRestore={handleRestore} />
          </div>
        </div>
      </div>
    </main>
  );
}
