export type Lang = 'ko' | 'en';

type Dict = {
  kicker: string;
  title: string;
  subtitle: string;

  leftCardTitle: string;
  leftCardSubtitle: string;

  inputTitle: string;
  inputWarn1: string;
  inputWarn2: string;
  inputPlaceholder: string;

  outputTitle: string;
  outputDesc: string;
  outputEmpty: string;

  purposeLabel: string;
  purposes: {
    content: string;
    analysis: string;
    code: string;
    translate: string;
    document: string;
  };

  platformLabel: string;
  platforms: {
    auto: string;
    chatgpt: string;
    claude: string;
    gemini: string;
  };

  lengthLabel: string;
  lengths: {
    short: string;
    normal: string;
    detailed: string;
  };

  advancedLabel: string;
  formatLabel: string;
  formats: {
    plain: string;
    bullets: string;
    table: string;
  };

  frameTableTitle: string;
  frameTableDesc: string;
  frameHeadFrame: string;
  frameHeadGoal: string;
  frameHeadOutput: string;
  frameRows: Array<{ key: 'A' | 'B' | 'C' | 'D' | 'E'; goal: string; output: string }>;
  frameHint: string;

  checklistTitle: string;
  checklistDesc: string;
  checklistHeadItem: string;
  checklistHeadInput: string;
  checklistRows: Array<{ item: string; input: string }>;
  blacklist: string;

  homeButton: string;
};

export const I18N: Record<Lang, Dict> = {
  ko: {
    kicker: '실무용 프롬프트 · 프레임 기반 · 즉시 복사',
    title: '프롬프트 생성기',
    subtitle:
      '목적과 옵션을 선택하면 같은 입력도 프레임별로 다르게 정리됩니다. 결과는 바로 복사 가능한 형태로 출력됩니다.',

    leftCardTitle: '생성 설정',
    leftCardSubtitle: '입력 → 옵션 → 생성 → 결과 복사. 실무 흐름에 맞춘 구성입니다.',

    inputTitle: '입력',
    inputWarn1: '민감 정보(개인식별/연락처/내부기밀)는 입력하지 마세요.',
    inputWarn2: '쉼표 또는 줄바꿈으로 구분해 입력해도 됩니다. 짧고 범주형으로 쓰면 더 안정적입니다.',
    inputPlaceholder: '예: 운동화 광고, 20~30대 여성 타깃, 편안함 강조, 인스타그램',

    outputTitle: '결과',
    outputDesc: 'A~E 결과를 비교한 뒤, 마음에 드는 것을 복사해 사용하세요.',
    outputEmpty: '아직 결과가 없습니다.',

    purposeLabel: '목적',
    purposes: {
      content: '콘텐츠',
      analysis: '분석',
      code: '코드',
      translate: '번역',
      document: '문서',
    },

    platformLabel: 'AI 플랫폼',
    platforms: {
      auto: '자동',
      chatgpt: 'ChatGPT',
      claude: 'Claude',
      gemini: 'Gemini',
    },

    lengthLabel: '길이',
    lengths: {
      short: '짧게',
      normal: '보통',
      detailed: '자세히',
    },

    advancedLabel: '고급',
    formatLabel: '형식',
    formats: {
      plain: '일반',
      bullets: '불릿',
      table: '표',
    },

    frameTableTitle: '전략 프레임 표',
    frameTableDesc: '같은 입력이라도 프레임에 따라 ‘목적/구조/톤’이 달라집니다.',
    frameHeadFrame: '프레임',
    frameHeadGoal: '핵심 목적',
    frameHeadOutput: '추천 산출',
    frameRows: [
      { key: 'A', goal: '리스크 최소화 · 정확성 우선 · 실수 방지', output: '체크리스트/리스크 로그' },
      { key: 'B', goal: '성과 설계 · 목표 달성 · 전환 중심', output: 'KPI/실험 설계/캠페인 플랜' },
      { key: 'C', goal: '구조화 · 문서화 · 실행 가능한 정리', output: '보고서/기획서/회의 아젠다' },
      { key: 'D', goal: '확장 탐색 · 대안 발산 · 아이디어', output: '대안 비교/우선순위/아이디어' },
      { key: 'E', goal: '요약 · 의사결정 지원 · 핵심만', output: '1페이지 요약/핵심 결론' },
    ],
    frameHint: '추천 흐름: C(구조화) → B(성과) → A(리스크)',

    checklistTitle: '실무 입력 체크표',
    checklistDesc: '민감 정보 없이도 충분합니다. “범주형 입력”만으로도 구조화됩니다.',
    checklistHeadItem: '항목',
    checklistHeadInput: '권장 입력',
    checklistRows: [
      { item: '목적', input: '생성/분석/요약/번역/코드/문서' },
      { item: '대상', input: '고객/내부/임원 · 연령대 · 채널' },
      { item: '제약', input: '톤 · 금지어 · 길이 · 필수 포함 요소' },
      { item: '산출 형식', input: '표/리스트/템플릿/체크리스트' },
    ],
    blacklist: '비권장: 개인식별정보, 실명/연락처, 내부 기밀 원문, 계약서 전문',

    homeButton: '홈',
  },

  en: {
    kicker: 'Practical prompts · Frame-based · Copy-ready',
    title: 'Prompt Generator',
    subtitle:
      'Choose a goal and options. The same input will be organized differently per frame. Results are output in a copy-ready format.',

    leftCardTitle: 'Generation Settings',
    leftCardSubtitle: 'Input → Options → Generate → Copy results. Designed for practical workflows.',

    inputTitle: 'Input',
    inputWarn1: 'Do not enter sensitive data (personal identifiers, contacts, internal secrets).',
    inputWarn2: 'You can separate items with commas or line breaks. Short, categorical inputs are more stable.',
    inputPlaceholder: 'Example: sneaker ad, women 20–30s, emphasize comfort, for Instagram',

    outputTitle: 'Output',
    outputDesc: 'Compare frames A–E, then copy the best result.',
    outputEmpty: 'No output yet.',

    purposeLabel: 'Purpose',
    purposes: {
      content: 'Content',
      analysis: 'Analysis',
      code: 'Code',
      translate: 'Translate',
      document: 'Document',
    },

    platformLabel: 'AI Platform',
    platforms: {
      auto: 'Auto',
      chatgpt: 'ChatGPT',
      claude: 'Claude',
      gemini: 'Gemini',
    },

    lengthLabel: 'Length',
    lengths: {
      short: 'Short',
      normal: 'Normal',
      detailed: 'Detailed',
    },

    advancedLabel: 'Advanced',
    formatLabel: 'Format',
    formats: {
      plain: 'Plain',
      bullets: 'Bullets',
      table: 'Table',
    },

    frameTableTitle: 'Strategy Frame Table',
    frameTableDesc: 'Even with the same input, the “goal/structure/tone” changes by frame.',
    frameHeadFrame: 'Frame',
    frameHeadGoal: 'Core Goal',
    frameHeadOutput: 'Recommended Output',
    frameRows: [
      { key: 'A', goal: 'Risk minimization · Accuracy first · Prevent mistakes', output: 'Checklist / Risk log' },
      { key: 'B', goal: 'Performance design · Goal achievement · Conversion-driven', output: 'KPI / Experiment plan / Campaign plan' },
      { key: 'C', goal: 'Structure · Documentation · Execution-ready organization', output: 'Report / Plan / Meeting agenda' },
      { key: 'D', goal: 'Explore · Diverge options · Generate ideas', output: 'Option comparison / Priorities / Ideas' },
      { key: 'E', goal: 'Summarize · Decision support · Only the essentials', output: 'One-page summary / Key conclusion' },
    ],
    frameHint: 'Suggested flow: C (Structure) → B (Performance) → A (Risk)',

    checklistTitle: 'Practical Input Checklist',
    checklistDesc: 'You do not need sensitive data. Categorical input alone is enough to structure outputs.',
    checklistHeadItem: 'Item',
    checklistHeadInput: 'Recommended Input',
    checklistRows: [
      { item: 'Purpose', input: 'Generate / Analyze / Summarize / Translate / Code / Document' },
      { item: 'Audience', input: 'Customer / Internal / Exec · Age group · Channel' },
      { item: 'Constraints', input: 'Tone · Banned words · Length · Must-include elements' },
      { item: 'Output format', input: 'Table / List / Template / Checklist' },
    ],
    blacklist: 'Avoid: personal identifiers, real names/contacts, internal confidential text, full contract documents',

    homeButton: 'Home',
  },
};

export function t(lang: Lang) {
  return I18N[lang];
}
