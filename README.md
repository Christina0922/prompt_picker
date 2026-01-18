# Prompt Picker - 조각만 넣으면 완벽한 프롬프트

조각만 입력하면 **후보 프롬프트 5개**가 나오고, **1개만 고르면 끝**!

## 🚀 주요 기능

- ✨ **조각 입력**: 원하는 내용을 자유롭게 입력
- 🎯 **5가지 전략**: 초간단, 균형, 제약강화, 구조고정, 확장형
- 🤖 **AI별 최적화**: ChatGPT, Claude, Gemini에 맞는 프롬프트 구조
- 📏 **길이 조절**: 짧게/보통/상세 옵션
- 🔧 **최종 튜닝**: 더 짧게, 더 구체적으로, 글자수 지정
- 💎 **FREE/PRO 모델**: 하루 3회 무료, PRO는 무제한

## 📦 설치 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 OpenAI API 키를 설정하세요:

```env
OPENAI_API_KEY=your_openai_api_key_here
MODEL_NAME=gpt-4o-mini
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 을 열어보세요!

## 🏗️ 프로젝트 구조

```
prompt_picker(web)/
├── app/
│   ├── page.tsx              # 랜딩 페이지
│   ├── tool/
│   │   └── page.tsx          # 도구 메인 페이지
│   ├── api/
│   │   ├── generate/
│   │   │   └── route.ts      # 프롬프트 생성 API
│   │   └── tune/
│   │       └── route.ts      # 프롬프트 튜닝 API
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── SnippetInput.tsx      # 조각 입력 컴포넌트
│   ├── GoalSelector.tsx      # 목적 선택 컴포넌트
│   ├── AiSelector.tsx        # AI 선택 컴포넌트
│   ├── OptionsPanel.tsx      # 옵션 패널
│   ├── PromptCards.tsx       # 후보 카드 컴포넌트
│   ├── FinalPromptModal.tsx  # 최종 프롬프트 모달
│   └── ProGateModal.tsx      # PRO 안내 모달
└── lib/
    ├── promptBuilders.ts     # AI별 프롬프트 빌더
    └── rateLimit.ts          # 무료 제한 로직
```

## 🎨 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **AI**: OpenAI API (gpt-4o-mini)
- **Deploy**: Vercel

## 📝 사용 방법

1. **조각 입력**: 원하는 내용을 자유롭게 입력하세요
   - 예: "인스타에 올릴 운동화 홍보 문구, 편안함 강조, 60대도 이해할 표현, 과장 금지"

2. **옵션 선택**:
   - 목적: 콘텐츠 작성, 분석/리서치, 코드 생성, 번역/요약, 창작/기획
   - AI: ChatGPT, Claude, Gemini, 모르겠어요(자동)
   - 길이: 짧게, 보통, 상세
   - 기타: 언어, 톤, 출력형식

3. **생성**: 버튼 1번으로 후보 5개 생성

4. **선택**: 마음에 드는 프롬프트를 "이걸로 확정"

5. **튜닝** (선택): 더 짧게, 더 구체적으로, 글자수 지정

6. **복사**: 복사 버튼으로 바로 사용!

## 🔐 보안

- API 키는 서버 사이드에서만 사용됩니다
- 클라이언트에 API 키가 노출되지 않습니다
- `.env.local` 파일은 Git에 커밋되지 않습니다

## 🚀 배포 (Vercel)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 환경 변수 설정
vercel env add OPENAI_API_KEY
vercel env add MODEL_NAME
```

## 📋 완료 체크리스트

- ✅ 조각 입력 → 후보 5개 카드 생성
- ✅ 카드 5개가 서로 다른 전략
- ✅ 길이(짧/보통/상세) 반영
- ✅ AI 선택에 따른 프롬프트 구조 차이
- ✅ 최종 1개 확정 → 복사 기능
- ✅ 튜닝 버튼 동작 + 글자수 지정
- ✅ FREE 하루 3회 제한 + PRO 안내

## 📄 라이선스

MIT

## 💬 문의

이슈나 개선 제안은 GitHub Issues로 부탁드립니다!

