"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import ToolLayoutPro from "./ToolLayoutPro";
import { useUiLang } from "@/lib/i18n/UiLangProvider";

type UiLang = "kr" | "en" | "ko";

function FrameGuideTable() {
  const { uiLang, t } = useUiLang();
  const lang = (uiLang === "kr" ? "ko" : uiLang) as UiLang;
  const isEn = lang === "en";

  return (
    <div className={styles.sideCard}>
      <div className={styles.sideTitle}>
        {isEn ? "Strategy Frame Table" : "전략 프레임 표"}
      </div>
      <div className={styles.sideDesc}>
        {isEn
          ? 'Even with the same input, "purpose/structure/tone" varies by frame.'
          : '같은 입력이라도 프레임에 따라 "목적/구조/톤"이 달라집니다.'}
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: 70 }}>{isEn ? "Frame" : "프레임"}</th>
              <th>{isEn ? "Core Purpose" : "핵심 목적"}</th>
              <th style={{ width: 160 }}>{isEn ? "Recommended Output" : "추천 산출"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tdStrong}>A</td>
              <td>
                {isEn
                  ? "Minimize risk · Prioritize accuracy · Prevent errors"
                  : "리스크 최소화 · 정확성 우선 · 실수 방지"}
              </td>
              <td>{isEn ? "Checklist / Risk log" : "체크리스트/리스크 로그"}</td>
            </tr>
            <tr>
              <td className={styles.tdStrong}>B</td>
              <td>
                {isEn
                  ? "Performance design · Goal achievement · Conversion-focused"
                  : "성과 설계 · 목표 달성 · 전환 중심"}
              </td>
              <td>{isEn ? "KPI / Experiment design / Campaign plan" : "KPI/실험 설계/캠페인 플랜"}</td>
            </tr>
            <tr>
              <td className={styles.tdStrong}>C</td>
              <td>
                {isEn
                  ? "Structuring · Documentation · Actionable organization"
                  : "구조화 · 문서화 · 실행 가능한 정리"}
              </td>
              <td>{isEn ? "Report / Proposal / Meeting agenda" : "보고서/기획서/회의 아젠다"}</td>
            </tr>
            <tr>
              <td className={styles.tdStrong}>D</td>
              <td>
                {isEn
                  ? "Expansion exploration · Alternative divergence · Ideas"
                  : "확장 탐색 · 대안 발산 · 아이디어"}
              </td>
              <td>{isEn ? "Alternative comparison / Priority / Idea map" : "대안 비교/우선순위/아이디어 맵"}</td>
            </tr>
            <tr>
              <td className={styles.tdStrong}>E</td>
              <td>
                {isEn
                  ? "Summary · Decision support · Essentials only"
                  : "요약 · 의사결정 지원 · 핵심만"}
              </td>
              <td>{isEn ? "1-page summary / Key conclusions" : "1페이지 요약/핵심 결론"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.sideNote}>
        {isEn
          ? "Recommended flow: C(Structuring) → B(Performance) → A(Risk)"
          : "추천 흐름: C(구조화) → B(성과) → A(리스크)"}
      </div>
    </div>
  );
}

function MainCardHeader() {
  const { uiLang } = useUiLang();
  const lang = (uiLang === "kr" ? "ko" : uiLang) as UiLang;
  const isEn = lang === "en";

  return (
    <div className={styles.mainCardHeader}>
      <div className={styles.mainCardTitle}>
        {isEn ? "Generation Settings" : "생성 설정"}
      </div>
      <div className={styles.mainCardSub}>
        {isEn
          ? "Input → Options → Generate → Copy Results. Configured for practical workflow."
          : "입력 → 옵션 → 생성 → 결과 복사. 실무 흐름에 맞춘 구성입니다."}
      </div>
    </div>
  );
}

function InputChecklistTable() {
  const { uiLang, t } = useUiLang();
  const lang = (uiLang === "kr" ? "ko" : uiLang) as UiLang;
  const isEn = lang === "en";

  return (
    <div className={styles.sideCard}>
      <div className={styles.sideTitle}>
        {isEn ? "Practical Input Checklist" : "실무 입력 체크표"}
      </div>
      <div className={styles.sideDesc}>
        {isEn
          ? 'Sufficient without sensitive information. Structured with "categorical input" only.'
          : '민감 정보 없이도 충분합니다. "범주형 입력"만으로 구조화됩니다.'}
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: 120 }}>{isEn ? "Item" : "항목"}</th>
              <th>{isEn ? "Recommended Input" : "권장 입력"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tdStrong}>{isEn ? "Purpose" : "목적"}</td>
              <td>{isEn ? "Generate / Analyze / Summarize / Translate / Code / Document" : "생성/분석/요약/번역/코드/문서"}</td>
            </tr>
            <tr>
              <td className={styles.tdStrong}>{isEn ? "Target" : "대상"}</td>
              <td>{isEn ? "Customer / Internal / Executive · Age group · Channel" : "고객/내부/임원 · 연령대 · 채널"}</td>
            </tr>
            <tr>
              <td className={styles.tdStrong}>{isEn ? "Constraints" : "제약"}</td>
              <td>{isEn ? "Tone · Prohibited words · Length · Required elements" : "톤 · 금지어 · 길이 · 필수 포함 요소"}</td>
            </tr>
            <tr>
              <td className={styles.tdStrong}>{isEn ? "Output Format" : "산출 형식"}</td>
              <td>{isEn ? "Table / List / Template / Checklist" : "표/리스트/템플릿/체크리스트"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.sideNote}>
        {isEn
          ? "Not recommended: Personal identification info, real names/contacts, internal confidential documents, full contract text"
          : "비권장: 개인식별정보, 실명/연락처, 내부 기밀 원문, 계약서 전문"}
      </div>
    </div>
  );
}

function ToolHeader() {
  const { uiLang, setUiLang } = useUiLang();
  const lang = (uiLang === "kr" ? "ko" : uiLang) as UiLang;

  const isKo = lang === "ko";
  const isEn = lang === "en";

  const kicker = isKo
    ? "실무용 프롬프트 · 프레임 기반 · 즉시 복사"
    : "Practical prompts · Frame-based · Copy-ready";
  const title = isKo ? "프롬프트 생성기" : "Prompt Generator";
  const desc = isKo
    ? "목적과 옵션을 선택하면 같은 입력도 프레임별로 다르게 정리됩니다. 결과는 바로 복사 가능한 형태로 출력됩니다."
    : "Choose a goal and options. The same input will be organized differently per frame. Results are output in a copy-ready format.";

  const handleLangChange = (next: "ko" | "en") => {
    const newLang: "kr" | "en" = next === "ko" ? "kr" : "en";
    setUiLang(newLang);
  };

  return (
    <header style={toolHeaderStyles.header}>
      <div style={toolHeaderStyles.headerInner}>
        <div style={toolHeaderStyles.left}>
          <div style={toolHeaderStyles.kicker}>{kicker}</div>
          <div style={toolHeaderStyles.titleRow}>
            <h1 style={toolHeaderStyles.title}>{title}</h1>
            <div style={toolHeaderStyles.rightControls}>
              <Link 
                href="/" 
                style={toolHeaderStyles.homeLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(15, 23, 42, 0.06)";
                  e.currentTarget.style.color = "rgba(11, 18, 32, 0.90)";
                  e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.20)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(15, 23, 42, 0.02)";
                  e.currentTarget.style.color = "rgba(11, 18, 32, 0.70)";
                  e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.12)";
                }}
              >
                {isEn ? "Home" : "홈"}
              </Link>
              <div style={toolHeaderStyles.langToggle}>
                <LangSegment
                  lang={lang}
                  setLang={handleLangChange}
                />
              </div>
            </div>
          </div>
          <p style={toolHeaderStyles.desc}>{desc}</p>
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
  setLang: (next: "ko" | "en") => void;
}) {
  const isKo = lang === "ko";
  const isEn = lang === "en";

  return (
    <div style={toolHeaderStyles.segmentWrap} role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLang("ko")}
        aria-pressed={isKo}
        aria-label="Korean"
        style={{
          ...toolHeaderStyles.segmentBtn,
          ...(isKo
            ? {
                ...toolHeaderStyles.segmentBtnActive,
                ...toolHeaderStyles.segmentKoActive,
              }
            : null),
        }}
      >
        한
      </button>

      <span style={toolHeaderStyles.segmentDivider} aria-hidden="true" />

      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={isEn}
        aria-label="English"
        style={{
          ...toolHeaderStyles.segmentBtn,
          ...(isEn
            ? {
                ...toolHeaderStyles.segmentBtnActive,
                ...toolHeaderStyles.segmentEnActive,
              }
            : null),
        }}
      >
        EN
      </button>
    </div>
  );
}

const toolHeaderStyles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.92)",
    borderBottom: "1px solid rgba(15, 23, 42, 0.10)",
    backdropFilter: "blur(10px)",
  },
  headerInner: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "18px 18px 14px",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  kicker: {
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: "-0.01em",
    color: "rgba(11, 18, 32, 0.62)",
  },
  titleRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 16,
    marginTop: 10,
  },
  title: {
    fontSize: 34,
    lineHeight: 1.14,
    letterSpacing: "-0.04em",
    fontWeight: 900,
    color: "#0b1220",
    margin: 0,
  },
  rightControls: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexShrink: 0,
  },
  homeLink: {
    fontSize: 14,
    fontWeight: 600,
    color: "rgba(11, 18, 32, 0.70)",
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: 8,
    transition: "all 0.2s ease",
    border: "1px solid rgba(15, 23, 42, 0.12)",
    background: "rgba(15, 23, 42, 0.02)",
    display: "inline-block",
  },
  langToggle: {
    flexShrink: 0,
  },
  desc: {
    marginTop: 10,
    maxWidth: 860,
    fontSize: 14,
    lineHeight: 1.7,
    letterSpacing: "-0.02em",
    color: "rgba(11, 18, 32, 0.76)",
  },
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
    background: "rgba(15, 23, 42, 0.04)",
    color: "rgba(11, 18, 32, 0.60)",
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: "-0.01em",
    lineHeight: 1,
    transition: "all 0.2s ease",
  },
  segmentBtnActive: {
    color: "#ffffff",
    boxShadow: "0 2px 8px rgba(2, 6, 23, 0.25)",
    fontWeight: 900,
  },
  segmentKoActive: {
    background: "#2563EB", // blue-600 (더 밝은 파란색)
    border: "1px solid #1E40AF",
  },
  segmentEnActive: {
    background: "#10B981", // emerald-500 (더 밝은 초록색)
    border: "1px solid #047857",
  },
  segmentDivider: {
    width: 1,
    height: 18,
    background: "rgba(15, 23, 42, 0.18)",
  },
};

export default function ToolPage() {
  return (
    <div className={styles.page}>
      <ToolHeader />
      <div className={styles.container}>
        <div className={styles.grid}>
          <section className={styles.mainCard}>
            <MainCardHeader />
            <div className={styles.toolArea}>
              <ToolLayoutPro />
            </div>
          </section>

          <aside className={styles.side}>
            <FrameGuideTable />
            <div className={styles.sideGap} />
            <InputChecklistTable />
          </aside>
        </div>
      </div>
    </div>
  );
}
