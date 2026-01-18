import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Prompt Picker</span>
            </Link>
            <div className="flex items-center space-x-8">
              <a href="#examples" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Examples
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <Link href="/tool" className="btn-primary py-2 px-5">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 개선됨 */}
      <section className="container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽: 헤드라인 + CTA */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-indigo-900">5가지 전략 · 간단 입력 · 바로 복사</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                단어 조각을
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  목적별 프롬프트 5개
                </span>로
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                전략이 서로 다른 5가지 후보(A~E)를 제공합니다.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                하나 골라 ChatGPT · Claude · Gemini에 바로 사용하세요
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/tool" className="btn-primary text-base px-8 py-4 text-center">
                  지금 바로 만들어보기 →
                </Link>
                <a href="#examples" className="btn-secondary text-base px-8 py-4 text-center">
                  예시 먼저 보기
                </a>
              </div>

              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">신용카드 불필요</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">10초 이내 생성</span>
                </div>
              </div>
            </div>

            {/* 오른쪽: 미리보기 카드 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Live Preview
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                <div className="text-xs text-gray-500 mb-2">사용자 입력</div>
                <p className="text-sm text-gray-800">
                  인스타 운동화 홍보, 편안함·스타일 강조, 2030 여성, 친근한 톤
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">A. 초간단 (빠른 시작)</span>
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">B. 균형 표준 (무난)</span>
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">C~E. 3가지 더...</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 실제 예시 섹션 - 신규 추가 */}
      <section id="examples" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                어떤 결과가 나올까요?
              </h2>
              <p className="text-xl text-gray-600">
                같은 입력이라도 전략에 따라 완전히 다른 프롬프트를 생성합니다
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* 입력 예시 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">사용자 입력</h3>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 mb-4">
                  <p className="text-gray-800 leading-relaxed">
                    "유튜브 썸네일 문구 만들기"<br />
                    "클릭 유도, 과장 금지"<br />
                    "재테크 콘텐츠"<br />
                    "30~40대 직장인 타겟"
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium">콘텐츠 작성</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-md text-xs font-medium">ChatGPT</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">보통 길이</span>
                </div>
              </div>

              {/* 출력 예시 2개 */}
              <div className="space-y-4">
                {/* 옵션 A */}
                <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-indigo-600 text-white rounded-md flex items-center justify-center text-sm font-bold">A</span>
                      <span className="text-sm font-semibold text-gray-900">초간단 (빠른 시작)</span>
                    </div>
                    <button className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-100 transition-colors">
                      복사
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                    30~40대 직장인을 위한 재테크 유튜브 썸네일 문구를 만들어줘. 클릭을 유도하되 과장하지 말고, 신뢰감 있게 작성해.
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    ✓ 최소한의 지시 | 바로 사용 가능
                  </div>
                </div>

                {/* 옵션 C */}
                <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-purple-600 text-white rounded-md flex items-center justify-center text-sm font-bold">C</span>
                      <span className="text-sm font-semibold text-gray-900">제약 강화 (실수 방지)</span>
                    </div>
                    <button className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-100 transition-colors">
                      복사
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                    <strong>역할:</strong> 마케팅 카피라이터<br />
                    <strong>제약:</strong> 과장 표현 금지, "무조건" "100%" 같은 단어 사용 불가<br />
                    <strong>타겟:</strong> 30~40대 직장인 (재테크 관심층)<br />
                    <strong>요구사항:</strong> 유튜브 썸네일 문구 3개 생성, 각 15자 이내, 클릭 유도하되 신뢰감 유지
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    ✓ 명확한 제약 | 실수 최소화
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/tool" className="btn-primary px-8 py-4 text-lg">
                이 예시로 바로 생성하기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5가지 전략 차이 섹션 - 개선됨 */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                5가지 전략, 뭐가 다를까요?
              </h2>
              <p className="text-xl text-gray-600">
                상황에 맞는 최적의 프롬프트를 선택하세요
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 전략 A */}
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mb-4">
                  A
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">초간단</h3>
                <p className="text-sm text-gray-600 mb-3">
                  빠르게 시작하고 싶을 때
                </p>
                <div className="text-xs text-gray-500 leading-relaxed">
                  최소한의 지시만 포함. 복잡한 설정 없이 바로 결과를 얻고 싶을 때 선택하세요.
                </div>
              </div>

              {/* 전략 B */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mb-4">
                  B
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">균형 표준</h3>
                <p className="text-sm text-gray-600 mb-3">
                  일반적인 상황에 무난
                </p>
                <div className="text-xs text-gray-500 leading-relaxed">
                  필수 요소만 포함한 표준형. 가장 안정적이고 예측 가능한 결과를 원할 때 사용하세요.
                </div>
              </div>

              {/* 전략 C */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-pink-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mb-4">
                  C
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">제약 강화</h3>
                <p className="text-sm text-gray-600 mb-3">
                  실수를 방지하고 싶을 때
                </p>
                <div className="text-xs text-gray-500 leading-relaxed">
                  명확한 규칙과 금지사항 포함. 정확한 제어가 필요하거나 과장을 막고 싶을 때 선택하세요.
                </div>
              </div>

              {/* 전략 D */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mb-4">
                  D
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">구조 고정</h3>
                <p className="text-sm text-gray-600 mb-3">
                  특정 형식이 필요할 때
                </p>
                <div className="text-xs text-gray-500 leading-relaxed">
                  출력 구조를 엄격하게 지정. 일관된 형식(리스트, 표, JSON 등)이 필요할 때 사용하세요.
                </div>
              </div>

              {/* 전략 E */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mb-4">
                  E
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">확장형</h3>
                <p className="text-sm text-gray-600 mb-3">
                  여러 대안이 필요할 때
                </p>
                <div className="text-xs text-gray-500 leading-relaxed">
                  다양한 버전 생성 요청. 창의적 접근이나 여러 아이디어를 비교하고 싶을 때 선택하세요.
                </div>
              </div>

              {/* 요약 카드 */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold mb-4">핵심 정리</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>빠르게 → A</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>안전하게 → B</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>정확하게 → C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>형식 맞춰 → D</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>다양하게 → E</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 개선됨 */}
      <section id="how-it-works" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                3단계로 완성
              </h2>
              <p className="text-xl text-gray-600">
                복잡한 과정 없이 누구나 쉽게 사용할 수 있습니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    조각 입력
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    키워드, 제약, 톤, 목적 등을 자유롭게 적어주세요. 문장으로 안 써도 괜찮습니다.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700">
                    예: "블로그, 요리법, 초보자용, 따뜻한 말투"
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    옵션 선택
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    목적, AI 플랫폼, 길이를 선택하세요. 고급 옵션으로 톤과 출력 형식도 지정 가능합니다.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 space-y-1">
                    <div>✓ 목적: 콘텐츠 작성</div>
                    <div>✓ AI: ChatGPT</div>
                    <div>✓ 길이: 보통</div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    A~E 선택 & 복사
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    5가지 전략의 프롬프트가 생성됩니다. 마음에 드는 것을 선택하고 복사 버튼을 누르세요.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700">
                    선택 후 "더 짧게" "더 구체적으로" 튜닝도 가능
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 사용 사례 (Testimonials) - 신규 추가 */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                누가 사용하나요?
              </h2>
              <p className="text-xl text-gray-600">
                다양한 분야에서 프롬프트 작성 시간을 절약하고 있습니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 사례 1 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  콘텐츠 크리에이터
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "유튜브 썸네일, 블로그 제목, 인스타 문구 만들 때마다 사용해요. 5가지 중에 고르니까 훨씬 빠르고 퀄리티도 좋아졌어요."
                </p>
                <div className="text-xs text-gray-500">
                  — 유튜버 / 블로거
                </div>
              </div>

              {/* 사례 2 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  직장인 (업무 자동화)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "보고서 요약, 이메일 초안, 회의록 정리할 때 프롬프트 만들기가 제일 귀찮았는데 이제 10초면 끝나요. 제약 강화 옵션이 특히 유용해요."
                </p>
                <div className="text-xs text-gray-500">
                  — 스타트업 마케터
                </div>
              </div>

              {/* 사례 3 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  강사 / 교육자
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "강의 자료 만들거나 퀴즈 출제할 때 AI 쓰는데, 프롬프트를 어떻게 써야 할지 매번 고민이었어요. 이제 입력만 하면 알아서 만들어줘서 편해요."
                </p>
                <div className="text-xs text-gray-500">
                  — 온라인 강사
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - 비교표 형식으로 개선 */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                가볍게 시작, 필요하면 업그레이드
              </h2>
              <p className="text-xl text-gray-600">
                무료 체험으로 충분히 테스트한 후 결정하세요
              </p>
            </div>

            {/* 비교표 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-12">
              <div className="grid md:grid-cols-3">
                {/* 헤더 */}
                <div className="bg-gray-50 p-6 border-r border-gray-200">
                  <div className="h-32 flex items-end">
                    <h3 className="text-lg font-bold text-gray-900">기능</h3>
                  </div>
                </div>
                <div className="bg-white p-6 border-r border-gray-200">
                  <div className="h-32 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-gray-500 uppercase">Free</span>
                    <div>
                      <div className="text-4xl font-bold text-gray-900">₩0</div>
                      <div className="text-sm text-gray-500">가볍게 체험</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 relative">
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </div>
                  <div className="h-32 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-indigo-100 uppercase">Pro</span>
                    <div>
                      <div className="text-4xl font-bold text-white">TBA</div>
                      <div className="text-sm text-indigo-100">반복 사용</div>
                    </div>
                  </div>
                </div>

                {/* 생성 횟수 */}
                <div className="bg-gray-50 p-6 border-r border-t border-gray-200">
                  <div className="font-medium text-gray-900">프롬프트 생성</div>
                </div>
                <div className="bg-white p-6 border-r border-t border-gray-200">
                  <div className="text-gray-700">하루 3회</div>
                </div>
                <div className="bg-white p-6 border-t border-gray-200">
                  <div className="text-gray-900 font-semibold">무제한</div>
                </div>

                {/* 전략 옵션 */}
                <div className="bg-gray-50 p-6 border-r border-t border-gray-200">
                  <div className="font-medium text-gray-900">전략 옵션</div>
                </div>
                <div className="bg-white p-6 border-r border-t border-gray-200">
                  <div className="text-gray-700">A~E 5가지</div>
                </div>
                <div className="bg-white p-6 border-t border-gray-200">
                  <div className="text-gray-700">A~E 5가지</div>
                </div>

                {/* 글자수 지정 */}
                <div className="bg-gray-50 p-6 border-r border-t border-gray-200">
                  <div className="font-medium text-gray-900">글자수 정밀 지정</div>
                </div>
                <div className="bg-white p-6 border-r border-t border-gray-200">
                  <div className="text-gray-400">—</div>
                </div>
                <div className="bg-white p-6 border-t border-gray-200">
                  <div className="text-green-600 font-semibold">✓</div>
                </div>

                {/* 히스토리 */}
                <div className="bg-gray-50 p-6 border-r border-t border-gray-200">
                  <div className="font-medium text-gray-900">히스토리 저장</div>
                </div>
                <div className="bg-white p-6 border-r border-t border-gray-200">
                  <div className="text-gray-400">—</div>
                </div>
                <div className="bg-white p-6 border-t border-gray-200">
                  <div className="text-green-600 font-semibold">✓</div>
                </div>

                {/* 복사/다운로드 */}
                <div className="bg-gray-50 p-6 border-r border-t border-gray-200">
                  <div className="font-medium text-gray-900">복사 & 내보내기</div>
                </div>
                <div className="bg-white p-6 border-r border-t border-gray-200">
                  <div className="text-green-600 font-semibold">✓</div>
                </div>
                <div className="bg-white p-6 border-t border-gray-200">
                  <div className="text-green-600 font-semibold">✓</div>
                </div>

                {/* 지원 */}
                <div className="bg-gray-50 p-6 border-r border-t border-gray-200">
                  <div className="font-medium text-gray-900">고객 지원</div>
                </div>
                <div className="bg-white p-6 border-r border-t border-gray-200">
                  <div className="text-gray-700">커뮤니티</div>
                </div>
                <div className="bg-white p-6 border-t border-gray-200">
                  <div className="text-gray-900 font-semibold">우선 지원</div>
                </div>

                {/* CTA */}
                <div className="bg-gray-50 p-6 border-r border-t border-gray-200">
                </div>
                <div className="bg-white p-6 border-r border-t border-gray-200">
                  <Link href="/tool" className="btn-secondary w-full text-center block">
                    시작하기
                  </Link>
                </div>
                <div className="bg-white p-6 border-t border-gray-200">
                  <button disabled className="w-full py-3 bg-gray-100 text-gray-400 rounded-lg font-semibold cursor-not-allowed">
                    출시 예정
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              신용카드 등록 없이 무료로 시작할 수 있습니다
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              10초면 원하는 프롬프트를 만들 수 있습니다. 신용카드 필요 없습니다.
            </p>
            <Link href="/tool" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-xl">
              무료로 시작하기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PP</span>
                </div>
                <span className="text-white font-semibold">Prompt Picker</span>
              </div>
              <div className="text-sm">
                © 2026 Prompt Picker. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
