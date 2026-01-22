"use client";

import React, { useState } from "react";
import { useUiLang } from "@/components/tool/UiLangContext";
import styles from "./CopyButton.module.css";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const { t } = useUiLang();
  const [status, setStatus] = useState<"idle" | "success" | "failed">("idle");

  async function handleCopy() {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      setStatus("failed");
      setTimeout(() => setStatus("idle"), 2000);
    }
  }

  const buttonText =
    status === "success"
      ? t("복사됨", "Copied")
      : status === "failed"
      ? t("복사 실패", "Copy failed")
      : t("복사", "Copy");

  const buttonClass =
    status === "success"
      ? `${styles.button} ${styles.buttonSuccess}`
      : status === "failed"
      ? `${styles.button} ${styles.buttonFailed}`
      : `${styles.button} ${styles.buttonPrimary}`;

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text || status !== "idle"}
      className={`${buttonClass} ${(!text || status !== "idle") ? styles.buttonDisabled : ""}`}
    >
      {buttonText}
    </button>
  );
}
