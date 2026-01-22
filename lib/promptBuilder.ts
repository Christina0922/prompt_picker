// 프롬프트 빌더: A~E 프레임별 최종 프롬프트 텍스트 생성

import { Purpose, Platform, LengthOpt, Tone, Format } from "@/config/options";
import type { Lang } from "./i18n";

export interface PromptOptions {
  input: string;
  purpose: Purpose;
  platform: Platform;
  length: LengthOpt;
  minLength?: string;
  maxLength?: string;
  tone: Tone;
  format: Format;
  mustInclude?: string;
  avoid?: string;
}

export interface PromptVariant {
  frame: "A" | "B" | "C" | "D" | "E";
  title: string;
  text: string;
}

const PURPOSE_MAP: Record<Purpose, { ko: string; en: string }> = {
  content: { ko: "콘텐츠 생성", en: "Content Generation" },
  analysis: { ko: "분석", en: "Analysis" },
  code: { ko: "코드 작성", en: "Code Writing" },
  translate: { ko: "번역", en: "Translation" },
  doc: { ko: "문서 작성", en: "Document Writing" },
};

const PLATFORM_MAP: Record<Platform, { ko: string; en: string }> = {
  auto: { ko: "자동", en: "Auto" },
  chatgpt: { ko: "ChatGPT", en: "ChatGPT" },
  claude: { ko: "Claude", en: "Claude" },
  gemini: { ko: "Gemini", en: "Gemini" },
};

const LENGTH_MAP: Record<LengthOpt, { ko: string; en: string }> = {
  short: { ko: "짧게 (약 100~200자)", en: "Short (approximately 100-200 characters)" },
  normal: { ko: "보통 (약 300~500자)", en: "Normal (approximately 300-500 characters)" },
  detailed: { ko: "상세 (약 700~1000자)", en: "Detailed (approximately 700-1000 characters)" },
  custom: { ko: "사용자 지정", en: "Custom" },
};

const TONE_MAP: Record<Tone, { ko: string; en: string }> = {
  neutral: { ko: "중립적이고 전문적인 톤", en: "Neutral and professional tone" },
  formal: { ko: "격식 있고 정중한 톤", en: "Formal and polite tone" },
  friendly: { ko: "친근하고 편안한 톤", en: "Friendly and casual tone" },
};

const FORMAT_MAP: Record<Format, { ko: string; en: string }> = {
  plain: { ko: "일반 문단 형식", en: "Plain paragraph format" },
  bullets: { ko: "불릿 포인트 형식", en: "Bullet points format" },
  table: { ko: "표 형식", en: "Table format" },
};

const FRAME_TITLES: Record<"A" | "B" | "C" | "D" | "E", { ko: string; en: string }> = {
  A: { ko: "초간단 프롬프트", en: "Ultra Simple Prompt" },
  B: { ko: "균형잡힌 프롬프트", en: "Balanced Prompt" },
  C: { ko: "제약 강화 프롬프트", en: "Strict Constraints Prompt" },
  D: { ko: "구조 고정 프롬프트", en: "Fixed Structure Prompt" },
  E: { ko: "확장형 프롬프트", en: "Extended Prompt" },
};

export function buildPromptVariants(
  options: PromptOptions,
  lang: Lang
): PromptVariant[] {
  const isEn = lang === "en";
  const T = {
    purpose: isEn ? PURPOSE_MAP[options.purpose].en : PURPOSE_MAP[options.purpose].ko,
    platform: isEn ? PLATFORM_MAP[options.platform].en : PLATFORM_MAP[options.platform].ko,
    length: options.length === "custom"
      ? (isEn
          ? `Custom length${options.minLength ? ` (min: ${options.minLength} chars)` : ""}${options.maxLength ? ` (max: ${options.maxLength} chars)` : ""}`
          : `사용자 지정${options.minLength ? ` (최소: ${options.minLength}자)` : ""}${options.maxLength ? ` (최대: ${options.maxLength}자)` : ""}`)
      : (isEn ? LENGTH_MAP[options.length].en : LENGTH_MAP[options.length].ko),
    tone: isEn ? TONE_MAP[options.tone].en : TONE_MAP[options.tone].ko,
    format: isEn ? FORMAT_MAP[options.format].en : FORMAT_MAP[options.format].ko,
  };

  const variants: PromptVariant[] = [];

  // Frame A: 초간단
  {
    const title = isEn ? FRAME_TITLES.A.en : FRAME_TITLES.A.ko;
    let text = "";
    if (isEn) {
      text = `Purpose: ${T.purpose}\nPlatform: ${T.platform}\n\nTask: ${options.input.trim()}\n\nOutput format: ${T.format}`;
      if (options.mustInclude) text += `\nMust include: ${options.mustInclude}`;
      if (options.avoid) text += `\nAvoid: ${options.avoid}`;
    } else {
      text = `목적: ${T.purpose}\n플랫폼: ${T.platform}\n\n작업: ${options.input.trim()}\n\n출력 형식: ${T.format}`;
      if (options.mustInclude) text += `\n필수 포함: ${options.mustInclude}`;
      if (options.avoid) text += `\n금지어: ${options.avoid}`;
    }
    variants.push({ frame: "A", title, text });
  }

  // Frame B: 균형잡힌 표준
  {
    const title = isEn ? FRAME_TITLES.B.en : FRAME_TITLES.B.ko;
    let text = "";
    if (isEn) {
      text = `You are an AI assistant specialized in ${T.purpose}.\n\nPlatform: ${T.platform}\nTone: ${T.tone}\nOutput format: ${T.format}\nLength: ${T.length}\n\nTask:\n${options.input.trim()}`;
      if (options.mustInclude) text += `\n\nRequired elements:\n${options.mustInclude}`;
      if (options.avoid) text += `\n\nAvoid:\n${options.avoid}`;
    } else {
      text = `${T.purpose} 전문 AI 어시스턴트입니다.\n\n플랫폼: ${T.platform}\n톤: ${T.tone}\n출력 형식: ${T.format}\n길이: ${T.length}\n\n작업:\n${options.input.trim()}`;
      if (options.mustInclude) text += `\n\n필수 요소:\n${options.mustInclude}`;
      if (options.avoid) text += `\n\n금지 사항:\n${options.avoid}`;
    }
    variants.push({ frame: "B", title, text });
  }

  // Frame C: 제약 강화
  {
    const title = isEn ? FRAME_TITLES.C.en : FRAME_TITLES.C.ko;
    let text = "";
    if (isEn) {
      text = `STRICT REQUIREMENTS:\n\nPurpose: ${T.purpose}\nPlatform: ${T.platform}\nTone: ${T.tone} (MANDATORY)\nFormat: ${T.format} (MANDATORY)\nLength: ${T.length} (STRICT)\n\nTask:\n${options.input.trim()}`;
      if (options.mustInclude) {
        text += `\n\nMUST INCLUDE (REQUIRED):\n${options.mustInclude}`;
      }
      if (options.avoid) {
        text += `\n\nFORBIDDEN (DO NOT USE):\n${options.avoid}`;
      }
      text += `\n\nRULES:\n- Follow the format exactly\n- Maintain tone strictly\n- Length must be within specified range\n- Do not deviate from requirements`;
    } else {
      text = `엄격한 요구사항:\n\n목적: ${T.purpose}\n플랫폼: ${T.platform}\n톤: ${T.tone} (필수)\n형식: ${T.format} (필수)\n길이: ${T.length} (엄격)\n\n작업:\n${options.input.trim()}`;
      if (options.mustInclude) {
        text += `\n\n필수 포함 (반드시 포함):\n${options.mustInclude}`;
      }
      if (options.avoid) {
        text += `\n\n금지어 (사용 금지):\n${options.avoid}`;
      }
      text += `\n\n규칙:\n- 형식을 정확히 따르세요\n- 톤을 엄격히 유지하세요\n- 길이는 지정된 범위 내여야 합니다\n- 요구사항에서 벗어나지 마세요`;
    }
    variants.push({ frame: "C", title, text });
  }

  // Frame D: 구조 고정
  {
    const title = isEn ? FRAME_TITLES.D.en : FRAME_TITLES.D.ko;
    let text = "";
    if (isEn) {
      text = `Purpose: ${T.purpose}\nPlatform: ${T.platform}\nTone: ${T.tone}\nLength: ${T.length}\n\nTask:\n${options.input.trim()}`;
      if (options.mustInclude) text += `\n\nMust include: ${options.mustInclude}`;
      if (options.avoid) text += `\n\nAvoid: ${options.avoid}`;
      text += `\n\nOUTPUT STRUCTURE (MANDATORY):\n1) Introduction\n2) Main Content\n3) Conclusion\n\nFormat each section as ${T.format}.`;
    } else {
      text = `목적: ${T.purpose}\n플랫폼: ${T.platform}\n톤: ${T.tone}\n길이: ${T.length}\n\n작업:\n${options.input.trim()}`;
      if (options.mustInclude) text += `\n\n필수 포함: ${options.mustInclude}`;
      if (options.avoid) text += `\n\n금지어: ${options.avoid}`;
      text += `\n\n출력 구조 (필수):\n1) 도입부\n2) 본문\n3) 결론\n\n각 섹션을 ${T.format} 형식으로 작성하세요.`;
    }
    variants.push({ frame: "D", title, text });
  }

  // Frame E: 확장형
  {
    const title = isEn ? FRAME_TITLES.E.en : FRAME_TITLES.E.ko;
    let text = "";
    if (isEn) {
      text = `Purpose: ${T.purpose}\nPlatform: ${T.platform}\nTone: ${T.tone}\nFormat: ${T.format}\nLength: ${T.length}\n\nTask:\n${options.input.trim()}`;
      if (options.mustInclude) text += `\n\nMust include: ${options.mustInclude}`;
      if (options.avoid) text += `\n\nAvoid: ${options.avoid}`;
      text += `\n\nGenerate 3 alternative approaches:\n\nOption 1: [Approach 1]\n- Pros: [1 advantage]\n- Cons: [1 limitation]\n\nOption 2: [Approach 2]\n- Pros: [1 advantage]\n- Cons: [1 limitation]\n\nOption 3: [Approach 3]\n- Pros: [1 advantage]\n- Cons: [1 limitation]`;
    } else {
      text = `목적: ${T.purpose}\n플랫폼: ${T.platform}\n톤: ${T.tone}\n형식: ${T.format}\n길이: ${T.length}\n\n작업:\n${options.input.trim()}`;
      if (options.mustInclude) text += `\n\n필수 포함: ${options.mustInclude}`;
      if (options.avoid) text += `\n\n금지어: ${options.avoid}`;
      text += `\n\n3가지 대안을 생성하세요:\n\n대안 1: [접근법 1]\n- 장점: [1가지]\n- 단점: [1가지]\n\n대안 2: [접근법 2]\n- 장점: [1가지]\n- 단점: [1가지]\n\n대안 3: [접근법 3]\n- 장점: [1가지]\n- 단점: [1가지]`;
    }
    variants.push({ frame: "E", title, text });
  }

  return variants;
}

