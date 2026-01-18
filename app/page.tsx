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
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Features
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-indigo-900">AI-Powered Prompt Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
              Professional Prompt
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Generation Platform
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              입력한 아이디어를 5가지 전략의 최적화된 프롬프트로 변환합니다.
              <br />
              ChatGPT, Claude, Gemini에 맞춘 전문가급 프롬프트를 즉시 생성하세요.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/tool" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
                Start Free Trial →
              </Link>
              <a href="#how-it-works" className="btn-secondary text-base px-8 py-4 w-full sm:w-auto">
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-100">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
                <div className="text-sm text-gray-600 font-light">Strategy Options</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
                <div className="text-sm text-gray-600 font-light">AI Platforms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <span className="text-xl">&lt;</span>10s
                </div>
                <div className="text-sm text-gray-600 font-light">Generation Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Prompt Picker?
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                AI 전문가들이 선택한 프롬프트 엔지니어링 솔루션
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  단 한 번의 클릭으로 5가지 전략의 프롬프트를 10초 이내에 생성합니다. 더 이상 프롬프트 작성에 시간을 낭비하지 마세요.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI-Optimized
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  ChatGPT, Claude, Gemini 각 AI 모델에 최적화된 프롬프트 구조를 자동으로 생성합니다. 각 플랫폼의 특성을 완벽히 반영합니다.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Multiple Strategies
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  초간단부터 상세 제약까지 5가지 다른 전략으로 프롬프트를 생성합니다. 상황에 맞는 최적의 옵션을 선택하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 font-light">
                3단계로 완성되는 전문가급 프롬프트
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full text-white font-bold text-sm">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Input Your Ideas
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  원하는 내용을 조각으로 입력하세요. 키워드, 제약사항, 톤 등을 자유롭게 작성할 수 있습니다.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full text-white font-bold text-sm">
                    2
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Select Options
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  목적, AI 플랫폼, 길이, 출력 형식 등 세부 옵션을 선택하세요. 모든 옵션은 결과에 즉시 반영됩니다.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-pink-600 rounded-full text-white font-bold text-sm">
                    3
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Get 5 Prompts
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  5가지 전략의 프롬프트가 즉시 생성됩니다. 가장 적합한 것을 선택하여 바로 사용하세요.
                </p>
              </div>
            </div>

            {/* Demo Card */}
            <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Example Input
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-800 leading-relaxed">
                      인스타그램 게시물용 운동화 홍보 문구 작성, 편안함과 스타일 강조, 2030 여성 타겟, 친근하고 트렌디한 톤, 과장 표현 지양
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium border border-indigo-100">
                      Content Creation
                    </span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-md text-xs font-medium border border-purple-100">
                      ChatGPT
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium border border-gray-200">
                      Medium Length
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Generated Options
                  </div>
                  <div className="space-y-2">
                    {['Option A: Minimal Approach', 'Option B: Balanced Standard', 'Option C: Constraint-Heavy', 'Option D: Structure-Fixed', 'Option E: Extended Version'].map((option, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:border-indigo-200 hover:shadow transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">{option}</span>
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 font-light">
                무료로 시작하고, 필요할 때 업그레이드하세요
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Free</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-gray-900">₩0</span>
                    <span className="text-gray-600 ml-2 font-light">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 font-light">개인 사용자 및 테스트용</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-light">하루 <strong className="font-semibold">3회</strong> 프롬프트 생성</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-light">5가지 전략 옵션</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-light">AI별 최적화 (ChatGPT, Claude, Gemini)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-light">기본 튜닝 기능</span>
                  </li>
                </ul>

                <Link href="/tool" className="btn-secondary w-full text-center block">
                  Get Started Free
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Coming Soon
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-2">Pro</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-white">TBA</span>
                  </div>
                  <p className="text-sm text-indigo-100 font-light">전문가 및 팀용</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-light"><strong className="font-semibold">무제한</strong> 프롬프트 생성</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-light">글자수 정밀 지정</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-light">고급 튜닝 옵션</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-light">히스토리 저장 및 관리</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-light">우선 지원</span>
                  </li>
                </ul>

                <button disabled className="w-full py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Creating Better Prompts Today
            </h2>
            <p className="text-xl text-indigo-100 mb-10 font-light">
              지금 바로 시작하세요. 신용카드 필요 없습니다.
            </p>
            <Link href="/tool" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-xl">
              Get Started Free →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
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
