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
  },

  en: {
    kicker: 'Practical prompts · Frame-based · Copy-ready',
    title: 'Prompt Generator',
    subtitle:
      'Choose a goal and options. The same input will be organized differently per frame. Results are output in a copy-ready format.',

    leftCardTitle: 'Generation Settings',
    leftCardSubtitle: 'Input → Options → Generate → Copy results. Designed for practical workflows.',

    rightCardTitle: 'Strategy Frame Table',
    rightCardSubtitle: 'Even with the same input, the “goal/structure/tone” changes by frame.',

    placeholderLeft: '(Keep your existing input/options UI here)',
    placeholderRight: '(Keep your existing strategy table UI here)',
  },
};
