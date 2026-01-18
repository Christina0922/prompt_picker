// Prompt builders for different AI targets

export type AITarget = 'chatgpt' | 'claude' | 'gemini' | 'auto';
export type LengthPreset = 'short' | 'medium' | 'detailed';
export type ToneType = 'professional' | 'casual' | 'technical' | 'creative';
export type OutputFormat = 'paragraph' | 'checklist' | 'table' | 'markdown' | 'json' | 'script';

export interface PromptOptions {
  snippets: string;
  goalType: string;
  aiTarget: AITarget;
  language: 'ko' | 'en';
  tone: ToneType;
  lengthPreset: LengthPreset;
  outputFormat: OutputFormat;
}

// 길이 설정에 대한 구체적인 지시문
const lengthInstructions: Record<LengthPreset, string> = {
  short: '간결하게, 핵심만 포함하여 짧게 작성',
  medium: '적절한 설명을 포함한 중간 길이로 작성',
  detailed: '상세한 설명과 예시를 포함하여 길게 작성',
};

// ChatGPT 스타일: 역할/규칙/출력형식 순서화
export function buildChatGPTPrompt(options: PromptOptions, variant: string): string {
  const { snippets, goalType, language, tone, lengthPreset, outputFormat } = options;
  const lengthInstruction = lengthInstructions[lengthPreset];

  return `당신은 ${goalType} 전문가입니다.

역할: ${goalType}을 위한 ${tone} 톤의 콘텐츠를 생성합니다.

규칙:
- 언어: ${language === 'ko' ? '한국어' : '영어'}
- 길이: ${lengthInstruction}
- 출력형식: ${outputFormat}
- ${variant}

입력 내용:
${snippets}

위 입력을 바탕으로 ${outputFormat} 형식으로 작성해주세요.`;
}

// Claude 스타일: 태그 형태로 구획 분리
export function buildClaudePrompt(options: PromptOptions, variant: string): string {
  const { snippets, goalType, language, tone, lengthPreset, outputFormat } = options;
  const lengthInstruction = lengthInstructions[lengthPreset];

  return `<role>
${goalType} 전문가로서 ${tone} 톤의 콘텐츠를 생성합니다.
</role>

<input>
${snippets}
</input>

<rules>
- 언어: ${language === 'ko' ? '한국어' : '영어'}
- 길이: ${lengthInstruction}
- 출력형식: ${outputFormat}
- ${variant}
</rules>

<instruction>
위 입력 내용을 분석하여 ${outputFormat} 형식으로 결과를 생성해주세요.
</instruction>`;
}

// Gemini 스타일: 제약/출력형식 앞쪽 고정, 짧고 명확하게
export function buildGeminiPrompt(options: PromptOptions, variant: string): string {
  const { snippets, goalType, language, tone, lengthPreset, outputFormat } = options;
  const lengthInstruction = lengthInstructions[lengthPreset];

  return `제약조건:
- 출력형식: ${outputFormat}
- 언어: ${language === 'ko' ? '한국어' : '영어'}
- 길이: ${lengthInstruction}
- ${variant}

역할: ${goalType} 전문가 (${tone} 톤)

입력:
${snippets}

지시: 위 입력을 ${outputFormat} 형식으로 작성`;
}

// 5가지 전략 변형
export const variantStrategies = {
  A: '최소한의 지시만 포함, 바로 사용 가능하도록 초간단화',
  B: '균형잡힌 표준 접근, 필수 요소만 포함',
  C: '엄격한 제약 강화: 필수사항과 금지사항을 명확히 지정',
  D: '출력 구조를 엄격하게 고정: 형식 준수 강제',
  E: '확장 버전: 여러 대안이나 버전을 생성하도록 요청',
};

export function buildPromptForAI(options: PromptOptions, variantKey: keyof typeof variantStrategies): string {
  const variant = variantStrategies[variantKey];

  switch (options.aiTarget) {
    case 'chatgpt':
      return buildChatGPTPrompt(options, variant);
    case 'claude':
      return buildClaudePrompt(options, variant);
    case 'gemini':
      return buildGeminiPrompt(options, variant);
    case 'auto':
      // 자동 선택 시 ChatGPT 형식을 기본으로
      return buildChatGPTPrompt(options, variant);
    default:
      return buildChatGPTPrompt(options, variant);
  }
}

