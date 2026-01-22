export type Lang = 'ko' | 'en';

type Dict = {
  kicker: string;
  title: string;
  subtitle: string;

  leftCardTitle: string;
  leftCardSubtitle: string;

  rightCardTitle: string;
  rightCardSubtitle: string;

  placeholderLeft: string;
  placeholderRight: string;

  inputTitle: string;
  inputWarn1: string;
  inputWarn2: string;
  inputPlaceholder: string;
  outputTitle: string;
  outputDesc: string;
  outputEmpty: string;
  purposeLabel: string;
  purpose: {
    content: string;
    analysis: string;
    code: string;
    translate: string;
    document: string;
  };
  platformLabel: string;
  platform: {
    auto: string;
    chatgpt: string;
    claude: string;
    gemini: string;
  };
  lengthLabel: string;
  length: {
    short: string;
    normal: string;
    detailed: string;
  };
  advancedLabel: string;
  formatLabel: string;
  format: {
    plain: string;
    bullets: string;
    table: string;
  };
  rightTopTitle: string;
  rightTopDesc: string;
  tableHeaders: {
    frame: string;
    goal: string;
    output: string;
  };
  frames: Array<{
    key: string;
    goal: string;
    output: string;
  }>;
  recommendOrder: string;
  rightBottomTitle: string;
  rightBottomDesc: string;
  checklistHeaders: {
    item: string;
    recommended: string;
  };
  checklistRows: Array<{
    item: string;
    recommended: string;
  }>;
  blacklist: string;
};

export const I18N: Record<Lang, Dict> = {
  ko: {
    kicker: '실무용 프롬프트 · 프레임 기반 · 즉시 복사',
    title: '프롬프트 생성기',
    subtitle:
      '목적과 옵션을 선택하면 같은 입력도 프레임별로 다르게 정리됩니다. 결과는 바로 복사 가능한 형태로 출력됩니다.',

    leftCardTitle: '생성 설정',
    leftCardSubtitle: '입력 → 옵션 → 생성 → 결과 복사. 실무 흐름에 맞춘 구성입니다.',

    rightCardTitle: '전략 프레임 표',
    rightCardSubtitle: '같은 입력이라도 프레임에 따라 ‘목적/구조/톤’이 달라집니다.',

    placeholderLeft: '(여기에 기존 입력 카드/옵션을 그대로 넣으세요)',
    placeholderRight: '(여기에 기존 전략 프레임 표를 그대로 넣으세요)',

    inputTitle: '입력',
    inputWarn1: '민감 정보(개인식별/연락처/내부기밀)는 입력하지 마세요.',
    inputWarn2: '쉼표 또는 줄바꿈으로 구분해 입력하셔도 됩니다.',
    inputPlaceholder: '예: 운동화 광고, 2030 여성 타깃, 편안함 강조, 인스타용',
    outputTitle: '결과',
    outputDesc: 'A-E 결과를 비교한 뒤, 마음에 드는 것을 복사해 사용하세요.',
    outputEmpty: '아직 결과가 없습니다.',
    purposeLabel: '목적',
    purpose: {
      content: '콘텐츠',
      analysis: '분석',
      code: '코드',
      translate: '번역',
      document: '문서',
    },
    platformLabel: 'AI 플랫폼',
    platform: {
      auto: '자동',
      chatgpt: 'ChatGPT',
      claude: 'Claude',
      gemini: 'Gemini',
    },
    lengthLabel: '길이',
    length: {
      short: '짧게',
      normal: '보통',
      detailed: '상세',
    },
    advancedLabel: '고급 옵션',
    formatLabel: '형식',
    format: {
      plain: '문장',
      bullets: '불릿',
      table: '표',
    },
    rightTopTitle: '전략 프레임 표',
    rightTopDesc: '같은 입력이라도 프레임에 따라 ‘목적/구조/톤’이 달라집니다.',
    tableHeaders: {
      frame: '프레임',
      goal: '목적',
      output: '출력',
    },
    frames: [
      { key: 'A', goal: '초간단', output: '최소한의 지시만 포함' },
      { key: 'B', goal: '균형잡힌 표준', output: '필수 요소만 포함' },
      { key: 'C', goal: '제약 강화', output: '엄격한 규칙과 제약' },
      { key: 'D', goal: '구조 고정', output: '출력 구조 엄격히 고정' },
      { key: 'E', goal: '확장형', output: '여러 대안 생성' },
    ],
    recommendOrder: '추천 순서: A → B → C → D → E',
    rightBottomTitle: '실무 입력 체크표',
    rightBottomDesc: '입력 시 참고할 수 있는 체크리스트입니다.',
    checklistHeaders: {
      item: '항목',
      recommended: '권장 사항',
    },
    checklistRows: [
      { item: '목적', recommended: '명확하게 정의' },
      { item: '대상', recommended: '구체적으로 명시' },
      { item: '톤', recommended: '일관성 유지' },
    ],
    blacklist: '금지어: 개인정보, 내부기밀, 저작권 침해 내용',
  },

  en: {
    kicker: 'Practical prompts · Frame-based · Copy-ready',
    title: 'Prompt Generator',
    subtitle:
      'Choose a goal and options. The same input will be organized differently per frame. Results are output in a copy-ready format.',

    leftCardTitle: 'Generation Settings',
    leftCardSubtitle: 'Input → Options → Generate → Copy results. Designed for practical workflows.',

    rightCardTitle: 'Strategy Frame Table',
    rightCardSubtitle: 'Even with the same input, the "goal/structure/tone" changes by frame.',

    placeholderLeft: '(Keep your existing input/options UI here)',
    placeholderRight: '(Keep your existing strategy table UI here)',

    inputTitle: 'Input',
    inputWarn1: 'Do not enter sensitive data (personal info, contacts, internal secrets).',
    inputWarn2: 'You can separate items with commas or line breaks.',
    inputPlaceholder: 'Example: sneaker ad, women 20-30s, comfort, for Instagram',
    outputTitle: 'Output',
    outputDesc: 'Compare A-E results and copy the best one.',
    outputEmpty: 'No output yet.',
    purposeLabel: 'Purpose',
    purpose: {
      content: 'Content',
      analysis: 'Analysis',
      code: 'Code',
      translate: 'Translation',
      document: 'Document',
    },
    platformLabel: 'AI Platform',
    platform: {
      auto: 'Auto',
      chatgpt: 'ChatGPT',
      claude: 'Claude',
      gemini: 'Gemini',
    },
    lengthLabel: 'Length',
    length: {
      short: 'Short',
      normal: 'Normal',
      detailed: 'Detailed',
    },
    advancedLabel: 'Advanced Options',
    formatLabel: 'Format',
    format: {
      plain: 'Plain',
      bullets: 'Bullets',
      table: 'Table',
    },
    rightTopTitle: 'Strategy Frame Table',
    rightTopDesc: 'Even with the same input, the "goal/structure/tone" changes by frame.',
    tableHeaders: {
      frame: 'Frame',
      goal: 'Goal',
      output: 'Output',
    },
    frames: [
      { key: 'A', goal: 'Ultra Simple', output: 'Minimal instructions only' },
      { key: 'B', goal: 'Balanced Standard', output: 'Essential elements only' },
      { key: 'C', goal: 'Strict Constraints', output: 'Strict rules and constraints' },
      { key: 'D', goal: 'Fixed Structure', output: 'Strictly fixed output structure' },
      { key: 'E', goal: 'Extended', output: 'Generate multiple alternatives' },
    ],
    recommendOrder: 'Recommended order: A → B → C → D → E',
    rightBottomTitle: 'Practical Input Checklist',
    rightBottomDesc: 'A checklist to reference when entering input.',
    checklistHeaders: {
      item: 'Item',
      recommended: 'Recommended',
    },
    checklistRows: [
      { item: 'Purpose', recommended: 'Define clearly' },
      { item: 'Target', recommended: 'Specify concretely' },
      { item: 'Tone', recommended: 'Maintain consistency' },
    ],
    blacklist: 'Forbidden: Personal info, internal secrets, copyright infringement',
  },
};

export function t(lang: Lang): Dict {
  return I18N[lang];
}
