"use client";

import React from "react";
import { useUiLang } from "@/components/tool/UiLangContext";
import { Purpose, Platform, LengthOpt, Tone, Format } from "@/config/options";
import { t as getT } from "@/lib/i18n";
import styles from "./InputArea.module.css";

interface InputAreaProps {
  input: string;
  onInputChange: (value: string) => void;
  purpose: Purpose;
  onPurposeChange: (value: Purpose) => void;
  platform: Platform;
  onPlatformChange: (value: Platform) => void;
  length: LengthOpt;
  onLengthChange: (value: LengthOpt) => void;
  minLength: string;
  onMinLengthChange: (value: string) => void;
  maxLength: string;
  onMaxLengthChange: (value: string) => void;
  tone: Tone;
  onToneChange: (value: Tone) => void;
  format: Format;
  onFormatChange: (value: Format) => void;
  mustInclude: string;
  onMustIncludeChange: (value: string) => void;
  avoid: string;
  onAvoidChange: (value: string) => void;
}

export default function InputArea({
  input,
  onInputChange,
  purpose,
  onPurposeChange,
  platform,
  onPlatformChange,
  length,
  onLengthChange,
  minLength,
  onMinLengthChange,
  maxLength,
  onMaxLengthChange,
  tone,
  onToneChange,
  format,
  onFormatChange,
  mustInclude,
  onMustIncludeChange,
  avoid,
  onAvoidChange,
}: InputAreaProps) {
  const { uiLang, t } = useUiLang();
  const isEn = uiLang === "en";
  const lang = isEn ? "en" : "ko";
  const T = getT(lang);

  function handleExampleClick(type: "marketing" | "meeting" | "risk") {
    onInputChange(T.exampleTexts[type]);
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {t("생성 설정", "Generation Settings")}
      </h2>
      <p className={styles.subtitle}>
        {t(
          "입력 → 옵션 → 생성 → 결과 복사. 실무 흐름에 맞춘 구성입니다.",
          "Input → Options → Generate → Copy results. Designed for practical workflows."
        )}
      </p>

      <div className={styles.inputSection}>
        <div className={styles.inputHeader}>
          <div className={styles.inputLabel}>
            {t("입력", "Input")}
          </div>
          <div className={styles.exampleButtons}>
            <button
              type="button"
              onClick={() => handleExampleClick("marketing")}
              className={styles.exampleButton}
            >
              {T.exampleButtons.marketing}
            </button>
            <button
              type="button"
              onClick={() => handleExampleClick("meeting")}
              className={styles.exampleButton}
            >
              {T.exampleButtons.meeting}
            </button>
            <button
              type="button"
              onClick={() => handleExampleClick("risk")}
              className={styles.exampleButton}
            >
              {T.exampleButtons.risk}
            </button>
          </div>
        </div>
        <p className={styles.warning}>
          {t(
            "민감 정보(개인식별/연락처/내부기밀)는 입력하지 마세요.",
            "Do not enter sensitive data (personal info, contacts, internal secrets)."
          )}
        </p>
        <p className={styles.warning}>
          {t(
            "쉼표 또는 줄바꿈으로 구분해 입력하셔도 됩니다. 짧고 범주형으로 쓰면 더 안정적입니다.",
            "You can separate items with commas or line breaks. Keep it short and categorical."
          )}
        </p>

        <textarea
          className={styles.textarea}
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={t(
            "예: 운동화 광고, 2030 여성 타깃, 편안함 강조, 인스타용",
            "Example: sneaker ad, women 20-30s, comfort, for Instagram"
          )}
        />
      </div>

      <div className={styles.options}>
        <OptionBlock label={t("목적", "Purpose")}>
          <Chip
            active={purpose === "content"}
            onClick={() => onPurposeChange("content")}
            text={t("콘텐츠", "Content")}
          />
          <Chip
            active={purpose === "analysis"}
            onClick={() => onPurposeChange("analysis")}
            text={t("분석", "Analysis")}
          />
          <Chip
            active={purpose === "code"}
            onClick={() => onPurposeChange("code")}
            text={t("코드", "Code")}
          />
          <Chip
            active={purpose === "translate"}
            onClick={() => onPurposeChange("translate")}
            text={t("번역", "Translation")}
          />
          <Chip
            active={purpose === "doc"}
            onClick={() => onPurposeChange("doc")}
            text={t("문서", "Document")}
          />
        </OptionBlock>

        <OptionBlock label={t("AI 플랫폼", "AI Platform")}>
          <Chip
            active={platform === "auto"}
            onClick={() => onPlatformChange("auto")}
            text={t("자동", "Auto")}
          />
          <Chip
            active={platform === "chatgpt"}
            onClick={() => onPlatformChange("chatgpt")}
            text="ChatGPT"
          />
          <Chip
            active={platform === "claude"}
            onClick={() => onPlatformChange("claude")}
            text="Claude"
          />
          <Chip
            active={platform === "gemini"}
            onClick={() => onPlatformChange("gemini")}
            text="Gemini"
          />
        </OptionBlock>

        <OptionBlock label={t("길이", "Length")}>
          <Chip
            active={length === "short"}
            onClick={() => onLengthChange("short")}
            text={t("짧게", "Short")}
          />
          <Chip
            active={length === "normal"}
            onClick={() => onLengthChange("normal")}
            text={t("보통", "Normal")}
          />
          <div className={styles.lengthInputs}>
            <input
              type="number"
              className={styles.lengthInput}
              value={minLength}
              onChange={(e) => {
                onMinLengthChange(e.target.value);
                if (e.target.value) onLengthChange("custom");
              }}
              placeholder={t("자 이상", "Min characters")}
              min="0"
            />
            <input
              type="number"
              className={styles.lengthInput}
              value={maxLength}
              onChange={(e) => {
                onMaxLengthChange(e.target.value);
                if (e.target.value) onLengthChange("custom");
              }}
              placeholder={t("자 미만", "Max characters")}
              min="0"
            />
          </div>
        </OptionBlock>

        <div className={styles.advanced}>
          <div className={styles.advancedTitle}>
            {t("고급 옵션", "Advanced Options")}
          </div>
          <div className={styles.advancedSection}>
            <div className={styles.advancedLabel}>
              {t("형식", "Format")}
            </div>
            <div className={styles.chips}>
              <Chip
                active={format === "plain"}
                onClick={() => onFormatChange("plain")}
                text={t("문장", "Plain")}
              />
              <Chip
                active={format === "bullets"}
                onClick={() => onFormatChange("bullets")}
                text={t("불릿", "Bullets")}
              />
              <Chip
                active={format === "table"}
                onClick={() => onFormatChange("table")}
                text={t("표", "Table")}
              />
            </div>
          </div>
          <div className={styles.advancedSection}>
            <div className={styles.advancedLabel}>
              {t("톤", "Tone")}
            </div>
            <div className={styles.chips}>
              <Chip
                active={tone === "neutral"}
                onClick={() => onToneChange("neutral")}
                text={t("중립", "Neutral")}
              />
              <Chip
                active={tone === "formal"}
                onClick={() => onToneChange("formal")}
                text={t("격식", "Formal")}
              />
              <Chip
                active={tone === "friendly"}
                onClick={() => onToneChange("friendly")}
                text={t("친근", "Friendly")}
              />
            </div>
          </div>
          <div className={styles.advancedInputs}>
            <div>
              <div className={styles.advancedLabel}>
                {t("필수 포함", "Must include")}
              </div>
              <input
                type="text"
                className={styles.advancedInput}
                value={mustInclude}
                onChange={(e) => onMustIncludeChange(e.target.value)}
                placeholder={t(
                  "반드시 포함할 키워드/포인트",
                  "Required keywords/points"
                )}
              />
            </div>
            <div>
              <div className={styles.advancedLabel}>
                {t("금지어", "Avoid words")}
              </div>
              <input
                type="text"
                className={styles.advancedInput}
                value={avoid}
                onChange={(e) => onAvoidChange(e.target.value)}
                placeholder={t("피해야 할 단어", "Words to avoid")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.optionBlock}>
      <div className={styles.optionLabel}>{label}</div>
      <div className={styles.chips}>{children}</div>
    </div>
  );
}

function Chip({
  text,
  active,
  onClick,
}: {
  text: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.chip} ${
        active ? styles.chipActive : styles.chipInactive
      }`}
    >
      {text}
    </button>
  );
}
