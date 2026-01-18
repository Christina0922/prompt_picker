import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MODEL_NAME = process.env.MODEL_NAME || 'gpt-4o-mini';

interface TuneRequest {
  finalPrompt: string;
  tuneType: 'shorter' | 'moreSpecific' | 'charLimit';
  charLimitValue?: number;
}

interface TuneResponse {
  success: boolean;
  tunedPrompt?: string;
  error?: string;
}

async function callOpenAI(systemPrompt: string, userPrompt: string): Promise<string> {
  if (!OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY가 설정되지 않았습니다');
  }

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
      temperature: 0.5,
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

  return content.trim();
}

export async function POST(request: NextRequest) {
  try {
    const body: TuneRequest = await request.json();
    const { finalPrompt, tuneType, charLimitValue } = body;

    if (!finalPrompt || !tuneType) {
      return NextResponse.json(
        { success: false, error: '필수 파라미터가 누락되었습니다' },
        { status: 400 }
      );
    }

    let tunedPrompt = finalPrompt;

    switch (tuneType) {
      case 'shorter':
        // 더 짧게: OpenAI로 축약
        const shorterSystemPrompt = `당신은 프롬프트를 간결하게 만드는 전문가입니다. 
주어진 프롬프트의 핵심 의미를 유지하면서 불필요한 부분을 제거하고 짧게 만드세요.
원본의 의도와 중요한 제약사항은 절대 삭제하지 마세요.`;
        
        tunedPrompt = await callOpenAI(shorterSystemPrompt, `다음 프롬프트를 더 짧고 간결하게 만들어주세요:\n\n${finalPrompt}`);
        break;

      case 'moreSpecific':
        // 더 구체적으로: OpenAI로 상세화
        const specificSystemPrompt = `당신은 프롬프트를 더 구체적으로 만드는 전문가입니다.
주어진 프롬프트에 구체적인 예시, 명확한 기준, 상세한 설명을 추가하세요.
단, 지나치게 길어지지 않도록 주의하세요.`;
        
        tunedPrompt = await callOpenAI(specificSystemPrompt, `다음 프롬프트를 더 구체적으로 만들어주세요:\n\n${finalPrompt}`);
        break;

      case 'charLimit':
        // 글자수 지정: 꼬리표 추가 방식 (MVP)
        if (!charLimitValue || charLimitValue <= 0) {
          return NextResponse.json(
            { success: false, error: '유효한 글자수를 입력해주세요' },
            { status: 400 }
          );
        }

        // 프롬프트 끝에 글자수 제한 지시문 추가
        tunedPrompt = `${finalPrompt}\n\n[중요] 출력은 공백 포함 ${charLimitValue}자 이내로 작성해주세요.`;
        break;

      default:
        return NextResponse.json(
          { success: false, error: '알 수 없는 튜닝 타입입니다' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      tunedPrompt,
    });
  } catch (error: any) {
    console.error('튜닝 API 오류:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || '프롬프트 튜닝에 실패했습니다.',
      },
      { status: 500 }
    );
  }
}

