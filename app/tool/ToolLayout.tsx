"use client";

import React, { useMemo, useState } from "react";
import styles from "./ToolLayout.module.css";
import { useUiLang } from "@/lib/i18n/UiLangProvider";

type Purpose = "content" | "analysis" | "code" | "translate" | "doc";
type Platform = "auto" | "chatgpt" | "claude" | "gemini";
type LengthOpt = "short" | "normal" | "detailed";

type ApiItem = { key: string; title?: string; prompt: string };

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function pickLang(ctx: any): "kr" | "en" {
  const v = (ctx?.uiLang ?? ctx?.lang ?? ctx?.current ?? "kr") as string;
  return v === "en" ? "en" : "kr";
}

export default function ToolLayout() {
  const ui = useUiLang() as any;
  const lang = pickLang(ui);

  /**
   * 중요:
   * - 여기에는 “PP / Prompt Picker / KR·EN / 무료 / 오늘 남은 / 업그레이드” 같은 랜딩용 UI를 절대 렌더하지 않습니다.
   * - /tool 페이지는 ‘도구 화면’만 있어야 합니다.
   */

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

  const t = useMemo(() => {
    const en = lang === "en";
    return {
      input: en ? "Input" : "입력",
      inputHelp: en
        ? "Separate with commas or line breaks. Keep it categorical."
        : "쉼표 또는 줄바꿈으로 구분해 입력하셔도 됩니다. 범주형으로 짧게 쓰면 더 안정적입니다.",
      placeholder: en
        ? "Example: sneaker ad, women 20-30s, comfort, for Instagram"
        : "예: 운동화 광고, 2030 여성 타깃, 편안함 강조, 인스타용",
      purpose: en ? "Purpose" : "목적",
      platform: en ? "AI platform" : "AI 플랫폼",
      length: en ? "Length" : "길이",
      advanced: en ? "Advanced options" : "고급 옵션",
      tone: en ? "Tone" : "톤",
      format: en ? "Output format" : "출력 형식",
      must: en ? "Must include" : "필수 포함",
      avoid: en ? "Avoid words" : "금지어",
      run: en ? "Generate 5 candidates" : "후보 5개 생성하기",
      running: en ? "Generating..." : "생성 중...",
      result: en ? "Output" : "결과",
      resultHelp: en
        ? "Compare A–E frames and copy the best one."
        : "A–E 프레임을 비교한 뒤, 마음에 드는 결과를 복사해 사용하세요.",
      copy: en ? "Copy" : "복사",
      empty: en ? "No output yet." : "아직 결과가 없습니다.",
      errTitle: en ? "Error" : "오류",
      note: en
        ? "Avoid sensitive data. Keep inputs short and structured."
        : "민감 정보는 입력하지 마세요. 입력을 짧고 구조적으로 쓰면 더 안정적입니다.",
    };
  }, [lang]);

  async function onGenerate() {
    if (!canRun || loading) return;

    setLoading(true);
    setError("");
    setItems([]);

    const payload = {
      uiLang: lang,
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

      const rawPrompt = typeof json === "string" ? json : JSON.stringify(json, null, 2);
      setItems([{ key: "A", title: "RAW", prompt: rawPrompt }]);
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
      // 권한 문제일 수 있어 조용히 무시합니다.
    }
  }

  const active = useMemo(() => {
    return items.find((x) => x.key === activeKey) ?? items[0] ?? null;
  }, [items, activeKey]);

  return (
    <div className={styles.root}>
      {/* ✅ 중복 블록(PP/무료/업그레이드/오늘 남은/KR·EN) 제거 완료: 도구 UI만 렌더 */}
      <section className={styles.block}>
        <div className={styles.blockTitle}>{t.input}</div>

        <textarea
          className={styles.textarea}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
        />
        <div className={styles.help}>{t.inputHelp}</div>

        <div className={styles.grid}>
          <div className={styles.field}>
            <div className={styles.label}>{t.purpose}</div>
            <div className={styles.row}>
              <button type="button" className={cx(styles.chip, purpose === "content" && styles.active)} onClick={() => setPurpose("content")}>
                {lang === "en" ? "Content" : "콘텐츠"}
              </button>
              <button type="button" className={cx(styles.chip, purpose === "analysis" && styles.active)} onClick={() => setPurpose("analysis")}>
                {lang === "en" ? "Analysis" : "분석"}
              </button>
              <button type="button" className={cx(styles.chip, purpose === "code" && styles.active)} onClick={() => setPurpose("code")}>
                {lang === "en" ? "Code" : "코드"}
              </button>
              <button type="button" className={cx(styles.chip, purpose === "translate" && styles.active)} onClick={() => setPurpose("translate")}>
                {lang === "en" ? "Translate" : "번역"}
              </button>
              <button type="button" className={cx(styles.chip, purpose === "doc" && styles.active)} onClick={() => setPurpose("doc")}>
                {lang === "en" ? "Document" : "문서"}
              </button>
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>{t.platform}</div>
            <div className={styles.row}>
              <button type="button" className={cx(styles.chip, platform === "auto" && styles.active)} onClick={() => setPlatform("auto")}>
                {lang === "en" ? "Auto" : "자동"}
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
            <div className={styles.label}>{t.length}</div>
            <div className={styles.row}>
              <button type="button" className={cx(styles.chip, length === "short" && styles.active)} onClick={() => setLength("short")}>
                {lang === "en" ? "Short" : "짧게"}
              </button>
              <button type="button" className={cx(styles.chip, length === "normal" && styles.active)} onClick={() => setLength("normal")}>
                {lang === "en" ? "Normal" : "보통"}
              </button>
              <button type="button" className={cx(styles.chip, length === "detailed" && styles.active)} onClick={() => setLength("detailed")}>
                {lang === "en" ? "Detailed" : "상세"}
              </button>
            </div>
          </div>

          <div className={styles.advanced}>
            <div className={styles.label}>{t.advanced}</div>

            <div className={styles.advRow}>
              <div className={styles.subLabel}>{t.format}</div>
              <div className={styles.row}>
                <button type="button" className={cx(styles.chip, format === "plain" && styles.active)} onClick={() => setFormat("plain")}>
                  {lang === "en" ? "Plain" : "문장"}
                </button>
                <button type="button" className={cx(styles.chip, format === "bullets" && styles.active)} onClick={() => setFormat("bullets")}>
                  {lang === "en" ? "Bullets" : "불릿"}
                </button>
                <button type="button" className={cx(styles.chip, format === "table" && styles.active)} onClick={() => setFormat("table")}>
                  {lang === "en" ? "Table" : "표"}
                </button>
              </div>
            </div>

            <div className={styles.advRow}>
              <div className={styles.subLabel}>{t.tone}</div>
              <div className={styles.row}>
                <button type="button" className={cx(styles.chip, tone === "neutral" && styles.active)} onClick={() => setTone("neutral")}>
                  {lang === "en" ? "Neutral" : "중립"}
                </button>
                <button type="button" className={cx(styles.chip, tone === "formal" && styles.active)} onClick={() => setTone("formal")}>
                  {lang === "en" ? "Formal" : "격식"}
                </button>
                <button type="button" className={cx(styles.chip, tone === "friendly" && styles.active)} onClick={() => setTone("friendly")}>
                  {lang === "en" ? "Friendly" : "친근"}
                </button>
              </div>
            </div>

            <div className={styles.advGrid}>
              <div>
                <div className={styles.subLabel}>{t.must}</div>
                <input
                  className={styles.input}
                  type="text"
                  value={mustInclude}
                  onChange={(e) => setMustInclude(e.target.value)}
                  placeholder={lang === "en" ? "Required keywords/points" : "반드시 포함할 키워드/포인트"}
                />
              </div>
              <div>
                <div className={styles.subLabel}>{t.avoid}</div>
                <input
                  className={styles.input}
                  type="text"
                  value={avoid}
                  onChange={(e) => setAvoid(e.target.value)}
                  placeholder={lang === "en" ? "Words to avoid" : "피해야 할 단어"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={cx(styles.primary, (!canRun || loading) && styles.disabled)}
            onClick={onGenerate}
            disabled={!canRun || loading}
          >
            {loading ? t.running : t.run}
          </button>
          <div className={styles.note}>{t.note}</div>
        </div>
      </section>

      <section className={styles.block}>
        <div className={styles.resultTop}>
          <div className={styles.blockTitle}>{t.result}</div>
          <div className={styles.help}>{t.resultHelp}</div>
        </div>

        {!error && items.length === 0 && <div className={styles.empty}>{t.empty}</div>}

        {error ? (
          <div className={styles.errorBox}>
            <div className={styles.errorTitle}>{t.errTitle}</div>
            <div className={styles.errorMsg}>{error}</div>
          </div>
        ) : null}

        {items.length > 0 ? (
          <div>
            <div className={styles.tabs}>
              {items.map((it) => (
                <button
                  key={it.key}
                  type="button"
                  className={cx(styles.tab, it.key === activeKey && styles.tabActive)}
                  onClick={() => setActiveKey(it.key)}
                >
                  {it.key}
                </button>
              ))}
            </div>

            <div className={styles.outputHeader}>
              <div className={styles.outputTitle}>
                {(active?.title ?? (lang === "en" ? "Candidate" : "후보")) + " · " + activeKey}
              </div>
              <button type="button" className={styles.copy} onClick={() => copyToClipboard(active?.prompt ?? "")}>
                {t.copy}
              </button>
            </div>

            <pre className={styles.code}>{active?.prompt ?? ""}</pre>
          </div>
        ) : null}
      </section>
    </div>
  );
}
