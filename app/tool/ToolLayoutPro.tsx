"use client";

import React, { useMemo, useState } from "react";
import styles from "./ToolLayoutPro.module.css";
import { useUiLang } from "@/lib/i18n/UiLangProvider";

type Purpose = "content" | "analysis" | "code" | "translate" | "doc";
type Platform = "auto" | "chatgpt" | "claude" | "gemini";
type LengthOpt = "short" | "normal" | "detailed";

type ApiItem = { key: string; title?: string; prompt: string };

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function ToolLayoutPro() {
  const { uiLang, t } = useUiLang();

  const [input, setInput] = useState("");
  const [purpose, setPurpose] = useState<Purpose>("content");
  const [platform, setPlatform] = useState<Platform>("auto");
  const [length, setLength] = useState<LengthOpt>("normal");

  const [tone, setTone] = useState<"neutral" | "formal" | "friendly">("neutral");
  const [format, setFormat] = useState<"plain" | "bullets" | "table">("plain");
  const [mustInclude, setMustInclude] = useState("");
  const [avoid, setAvoid] = useState("");

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ApiItem[]>([]);
  const [activeKey, setActiveKey] = useState<string>("A");
  const [error, setError] = useState<string>("");

  const canRun = useMemo(() => input.trim().length > 0, [input]);

  const labels = useMemo(() => {
    return {
      inputTitle: t("입력", "Input"),
      inputDesc: t(
        "쉼표 또는 줄바꿈으로 구분해 입력하셔도 됩니다. 짧고 범주형으로 쓰면 더 안정적입니다.",
        "Use commas or line breaks. Keep it short and categorical."
      ),
      placeholder: t(
        "예: 운동화 광고, 2030 여성 타깃, 편안함 강조, 인스타용",
        "Example: sneaker ad, women 20-30s, comfort, for Instagram"
      ),
      purpose: t("목적", "Purpose"),
      platform: t("AI 플랫폼", "AI platform"),
      length: t("길이", "Length"),
      advanced: t("고급 옵션", "Advanced"),
      tone: t("톤", "Tone"),
      format: t("형식", "Format"),
      must: t("필수 포함", "Must include"),
      avoid: t("금지어", "Avoid words"),
      run: t("후보 5개 생성하기", "Generate 5 candidates"),
      running: t("생성 중...", "Generating..."),
      output: t("결과", "Output"),
      outputHelp: t("A–E 결과를 비교한 뒤, 마음에 드는 것을 복사해 사용하세요.", "Compare A–E and copy the best one."),
      copy: t("복사", "Copy"),
      empty: t("아직 결과가 없습니다.", "No output yet."),
      err: t("오류", "Error"),
      note: t("민감 정보(개인식별/연락처/내부기밀)는 입력하지 마세요.", "Do not enter sensitive data."),
    };
  }, [t]);

  async function onGenerate() {
    if (!canRun || loading) return;

    setLoading(true);
    setError("");
    setItems([]);

    const payload = {
      uiLang,
      input: input.trim(),
      purpose,
      platform,
      length,
      advanced: {
        tone,
        format,
        mustInclude: mustInclude.trim() || undefined,
        avoid: avoid.trim() || undefined,
      },
    };

    try {
      const r = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const textBody = await r.text();
      let json: any = null;
      try {
        json = JSON.parse(textBody);
      } catch {
        json = { rawText: textBody };
      }

      if (!r.ok) {
        setError(json?.error ?? json?.message ?? "Request failed");
        return;
      }

      const found =
        (Array.isArray(json?.items) && json.items) ||
        (Array.isArray(json?.data?.items) && json.data.items) ||
        (Array.isArray(json?.result?.items) && json.result.items) ||
        null;

      if (found) {
        const normalized: ApiItem[] = found.map((it: any, idx: number) => ({
          key: String(it?.key ?? ["A", "B", "C", "D", "E"][idx] ?? `#${idx + 1}`),
          title: it?.title ? String(it.title) : undefined,
          prompt: String(it?.prompt ?? it?.text ?? it?.output ?? ""),
        }));
        setItems(normalized);
        setActiveKey(normalized[0]?.key ?? "A");
        return;
      }

      const raw = typeof json === "string" ? json : JSON.stringify(json, null, 2);
      setItems([{ key: "A", title: "RAW", prompt: raw }]);
      setActiveKey("A");
    } catch (e: any) {
      setError(e?.message ?? "Network error");
    } finally {
      setLoading(false);
    }
  }

  async function copyToClipboard(v: string) {
    try {
      await navigator.clipboard.writeText(v);
    } catch {
      // 권한 문제면 무시
    }
  }

  const active = useMemo(() => {
    return items.find((x) => x.key === activeKey) ?? items[0] ?? null;
  }, [items, activeKey]);

  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <div className={styles.head}>
          <div className={styles.titleRow}>
            <div>
              <div className={styles.title}>{labels.inputTitle}</div>
              <div className={styles.note}>{labels.note}</div>
            </div>
          </div>

          <div className={styles.desc}>{labels.inputDesc}</div>
        </div>

        <textarea
          className={styles.textarea}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={labels.placeholder}
        />

        <div className={styles.grid}>
          <div className={styles.field}>
            <div className={styles.label}>{labels.purpose}</div>
            <div className={styles.row}>
              <button type="button" className={cx(styles.chip, purpose === "content" && styles.active)} onClick={() => setPurpose("content")}>
                {t("콘텐츠", "Content")}
              </button>
              <button type="button" className={cx(styles.chip, purpose === "analysis" && styles.active)} onClick={() => setPurpose("analysis")}>
                {t("분석", "Analysis")}
              </button>
              <button type="button" className={cx(styles.chip, purpose === "code" && styles.active)} onClick={() => setPurpose("code")}>
                {t("코드", "Code")}
              </button>
              <button type="button" className={cx(styles.chip, purpose === "translate" && styles.active)} onClick={() => setPurpose("translate")}>
                {t("번역", "Translate")}
              </button>
              <button type="button" className={cx(styles.chip, purpose === "doc" && styles.active)} onClick={() => setPurpose("doc")}>
                {t("문서", "Document")}
              </button>
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>{labels.platform}</div>
            <div className={styles.row}>
              <button type="button" className={cx(styles.chip, platform === "auto" && styles.active)} onClick={() => setPlatform("auto")}>
                {t("자동", "Auto")}
              </button>
              <button type="button" className={cx(styles.chip, platform === "chatgpt" && styles.active)} onClick={() => setPlatform("chatgpt")}>
                ChatGPT
              </button>
              <button type="button" className={cx(styles.chip, platform === "claude" && styles.active)} onClick={() => setPlatform("claude")}>
                Claude
              </button>
              <button type="button" className={cx(styles.chip, platform === "gemini" && styles.active)} onClick={() => setPlatform("gemini")}>
                Gemini
              </button>
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>{labels.length}</div>
            <div className={styles.row}>
              <button type="button" className={cx(styles.chip, length === "short" && styles.active)} onClick={() => setLength("short")}>
                {t("짧게", "Short")}
              </button>
              <button type="button" className={cx(styles.chip, length === "normal" && styles.active)} onClick={() => setLength("normal")}>
                {t("보통", "Normal")}
              </button>
              <button type="button" className={cx(styles.chip, length === "detailed" && styles.active)} onClick={() => setLength("detailed")}>
                {t("상세", "Detailed")}
              </button>
            </div>
          </div>

          <div className={styles.advanced}>
            <div className={styles.label}>{labels.advanced}</div>

            <div className={styles.advRow}>
              <div className={styles.subLabel}>{labels.format}</div>
              <div className={styles.row}>
                <button type="button" className={cx(styles.chip, format === "plain" && styles.active)} onClick={() => setFormat("plain")}>
                  {t("문장", "Plain")}
                </button>
                <button type="button" className={cx(styles.chip, format === "bullets" && styles.active)} onClick={() => setFormat("bullets")}>
                  {t("불릿", "Bullets")}
                </button>
                <button type="button" className={cx(styles.chip, format === "table" && styles.active)} onClick={() => setFormat("table")}>
                  {t("표", "Table")}
                </button>
              </div>
            </div>

            <div className={styles.advRow}>
              <div className={styles.subLabel}>{labels.tone}</div>
              <div className={styles.row}>
                <button type="button" className={cx(styles.chip, tone === "neutral" && styles.active)} onClick={() => setTone("neutral")}>
                  {t("중립", "Neutral")}
                </button>
                <button type="button" className={cx(styles.chip, tone === "formal" && styles.active)} onClick={() => setTone("formal")}>
                  {t("격식", "Formal")}
                </button>
                <button type="button" className={cx(styles.chip, tone === "friendly" && styles.active)} onClick={() => setTone("friendly")}>
                  {t("친근", "Friendly")}
                </button>
              </div>
            </div>

            <div className={styles.advGrid}>
              <div>
                <div className={styles.subLabel}>{labels.must}</div>
                <input
                  className={styles.input}
                  value={mustInclude}
                  onChange={(e) => setMustInclude(e.target.value)}
                  placeholder={t("반드시 포함할 키워드/포인트", "Required keywords/points")}
                />
              </div>
              <div>
                <div className={styles.subLabel}>{labels.avoid}</div>
                <input
                  className={styles.input}
                  value={avoid}
                  onChange={(e) => setAvoid(e.target.value)}
                  placeholder={t("피해야 할 단어", "Words to avoid")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={cx(styles.primary, (!canRun || loading) && styles.disabled)} disabled={!canRun || loading} onClick={onGenerate}>
            {loading ? labels.running : labels.run}
          </button>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.head}>
          <div className={styles.title}>{labels.output}</div>
          <div className={styles.desc}>{labels.outputHelp}</div>
        </div>

        {!error && items.length === 0 ? <div className={styles.empty}>{labels.empty}</div> : null}

        {error ? (
          <div className={styles.errorBox}>
            <div className={styles.errorTitle}>{labels.err}</div>
            <div className={styles.errorMsg}>{error}</div>
          </div>
        ) : null}

        {items.length > 0 ? (
          <>
            <div className={styles.tabs}>
              {items.map((it) => (
                <button key={it.key} className={cx(styles.tab, it.key === activeKey && styles.tabActive)} onClick={() => setActiveKey(it.key)}>
                  {it.key}
                </button>
              ))}
            </div>

            <div className={styles.outputHeader}>
              <div className={styles.outputTitle}>
                {(active?.title ?? t("후보", "Candidate")) + " · " + activeKey}
              </div>
              <button className={styles.copy} onClick={() => copyToClipboard(active?.prompt ?? "")}>
                {labels.copy}
              </button>
            </div>

            <pre className={styles.code}>{active?.prompt ?? ""}</pre>
          </>
        ) : null}
      </div>
    </div>
  );
}
