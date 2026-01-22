import { NextRequest, NextResponse } from 'next/server';
import { buildPromptForAI, variantStrategies, type AITarget, type LengthPreset, type ToneType, type OutputFormat } from '@/lib/promptBuilders';

// API 키 체크
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MODEL_NAME = process.env.MODEL_NAME || 'gpt-4o-mini';

// Tone 타입 매핑 (한글/영문 지원)
const TONE_MAP: Record<string, ToneType> = {
  professional: 'professional',
  '전문적': 'professional',
  casual: 'casual',
  '캐주얼': 'casual',
  '편한': 'casual',
  technical: 'technical',
  '기술적': 'technical',
  creative: 'creative',
  '창의적': 'creative',
};

function toToneType(v: unknown): ToneType {
  const key = String(v ?? '').trim();
  return TONE_MAP[key] ?? 'professional';
}

// OutputFormat 타입 매핑 (한글/영문 지원)
const OUTPUT_MAP: Record<string, OutputFormat> = {
  paragraph: 'paragraph',
  '문단': 'paragraph',
  checklist: 'checklist',
  '체크리스트': 'checklist',
  '목록': 'checklist',
  table: 'table',
  '표': 'table',
  markdown: 'markdown',
  '마크다운': 'markdown',
  json: 'json',
  script: 'script',
  '스크립트': 'script',
};

function toOutputFormat(v: unknown): OutputFormat {
  const key = String(v ?? '').trim();
  return OUTPUT_MAP[key] ?? 'paragraph';
}

interface GenerateRequest {
  snippets: string;
  goalType: string;
  aiTarget: AITarget;
  language: 'ko' | 'en';
  tone: string; // 런타임에서는 string으로 받음
  lengthPreset: LengthPreset;
  outputFormat: string; // 런타임에서는 string으로 받음
}

interface PromptOption {
  id: string;
  title: string;
  bestWhen: string;
  promptText: string;
}

interface GenerateResponse {
  success: boolean;
  organizedSnippets?: string;
  options?: PromptOption[];
  error?: string;
}

// OpenAI API 호출 (재시도 로직 포함)
async function callOpenAI(systemPrompt: string, userPrompt: string, retries = 1): Promise<any> {
  if (!OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY가 설정되지 않았습니다');
  }

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL_NAME,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          response_format: { type: 'json_object' },
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`OpenAI API 오류: ${response.status} - ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content;

      if (!content) {
        throw new Error('OpenAI 응답에 내용이 없습니다');
      }

      return JSON.parse(content);
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }
      // 재시도 전 잠시 대기
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateRequest = await request.json();
    const { snippets, goalType, aiTarget, language, lengthPreset } = body;

    // 타입 안전하게 변환
    const tone: ToneType = toToneType(body.tone);
    const outputFormat: OutputFormat = toOutputFormat(body.outputFormat);

    // 입력 검증
    if (!snippets || !goalType) {
      return NextResponse.json(
        { success: false, error: '조각과 목적을 모두 입력해주세요' },
        { status: 400 }
      );
    }

    // 1단계: 조각 정리
    const organizeSystemPrompt = `당신은 사용자의 입력을 정리하는 AI입니다. 
입력된 조각들을 분석하여 명확하게 정리하되, 원래 의도를 해치지 마세요.
JSON 형식으로만 응답하세요: {"organized": "정리된 내용"}`;

    const organizeUserPrompt = `다음 조각들을 정리해주세요:\n\n${snippets}`;

    const organizeResult = await callOpenAI(organizeSystemPrompt, organizeUserPrompt);
    const organizedSnippets = organizeResult.organized || snippets;

    // 2단계: 5개 후보 프롬프트 생성
    const variantKeys = ['A', 'B', 'C', 'D', 'E'] as const;
    const options: PromptOption[] = [];

    for (const variantKey of variantKeys) {
      const promptText = buildPromptForAI(
        {
          snippets: organizedSnippets,
          goalType,
          aiTarget,
          language,
          tone,
          lengthPreset,
          outputFormat,
        },
        variantKey
      );

      // 각 변형에 대한 설명 생성
      let title = '';
      let bestWhen = '';

      switch (variantKey) {
        case 'A':
          title = '옵션 A: 초간단';
          bestWhen = '빠르게 시작하고 싶을 때, 복잡한 설정 없이 바로 사용';
          break;
        case 'B':
          title = '옵션 B: 균형잡힌 표준';
          bestWhen = '일반적인 상황, 무난하고 안정적인 결과를 원할 때';
          break;
        case 'C':
          title = '옵션 C: 제약 강화';
          bestWhen = '정확한 규칙과 제약이 필요할 때, 실수를 방지하고 싶을 때';
          break;
        case 'D':
          title = '옵션 D: 구조 고정';
          bestWhen = '특정 형식이 중요할 때, 일관된 출력 구조가 필요할 때';
          break;
        case 'E':
          title = '옵션 E: 확장형';
          bestWhen = '여러 버전이나 대안이 필요할 때, 창의적 접근을 원할 때';
          break;
      }

      options.push({
        id: variantKey,
        title,
        bestWhen,
        promptText,
      });
    }

    return NextResponse.json({
      success: true,
      organizedSnippets,
      options,
    });
  } catch (error: any) {
    console.error('생성 API 오류:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || '결과 생성에 실패했습니다. 조각을 조금 더 구체적으로 적어주세요.',
      },
      { status: 500 }
    );
  }
}

