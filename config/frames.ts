// 프레임 정의

export type FrameKey = "A" | "B" | "C" | "D" | "E";

export interface Frame {
  key: FrameKey;
  goal: {
    ko: string;
    en: string;
  };
  output: {
    ko: string;
    en: string;
  };
}

export const FRAMES: Frame[] = [
  {
    key: "A",
    goal: {
      ko: "초간단",
      en: "Ultra Simple",
    },
    output: {
      ko: "최소한의 지시만 포함",
      en: "Minimal instructions only",
    },
  },
  {
    key: "B",
    goal: {
      ko: "균형잡힌 표준",
      en: "Balanced Standard",
    },
    output: {
      ko: "필수 요소만 포함",
      en: "Essential elements only",
    },
  },
  {
    key: "C",
    goal: {
      ko: "제약 강화",
      en: "Strict Constraints",
    },
    output: {
      ko: "엄격한 규칙과 제약",
      en: "Strict rules and constraints",
    },
  },
  {
    key: "D",
    goal: {
      ko: "구조 고정",
      en: "Fixed Structure",
    },
    output: {
      ko: "출력 구조 엄격히 고정",
      en: "Strictly fixed output structure",
    },
  },
  {
    key: "E",
    goal: {
      ko: "확장형",
      en: "Extended",
    },
    output: {
      ko: "여러 대안 생성",
      en: "Generate multiple alternatives",
    },
  },
];

export const RECOMMEND_ORDER = {
  ko: "추천 순서: A → B → C → D → E",
  en: "Recommended order: A → B → C → D → E",
};

