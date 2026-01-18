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
                예시
              </a>
              <a href="#how" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                사용법
              </a>
              <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <Link href="/tool" className="btn-primary py-2 px-5">
                시작하기
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 완전 재작성 */}
      <section className="container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 신뢰 신호 칩 */}
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-5 py-2 mb-8">
            <span className="text-sm text-gray-700">전략 5종 자동 생성</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-700">선택만 하면 바로 사용</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-700">과장 없는 구조화 프롬프트</span>
          </div>

          {/* 헤드라인 */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            조각 입력만으로,
            <br />
            바로 쓰는 프롬프트 5개를 만듭니다
          </h1>

          {/* 서브 헤드라인 */}
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            단어·문장·아이디어를 입력하면
          </p>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            전략이 서로 다른 프롬프트 후보 A~E를 즉시 생성합니다
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/tool" className="btn-primary text-base px-8 py-4">
              무료로 바로 만들어보기
            </Link>
            <a href="#examples" className="btn-secondary text-base px-8 py-4">
              결과 예시 보기
            </a>
          </div>

          {/* 간단한 지표 */}
          <div className="flex justify-center gap-12 pt-8 border-t border-gray-100">
            <div>
              <div className="text-2xl font-bold text-gray-900">5가지</div>
              <div className="text-sm text-gray-500">전략 후보</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">10초</div>
              <div className="text-sm text-gray-500">생성 시간</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">무료</div>
              <div className="text-sm text-gray-500">하루 3회</div>
            </div>
          </div>
        </div>
      </section>

      {/* 문제 인식 섹션 - 신규 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              프롬프트 작성이 어려운 이유
            </h2>
            <p className="text-center text-gray-600 mb-12">
              생각을 효과적인 프롬프트로 만드는 과정에서 반복되는 문제들
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-4xl font-bold text-gray-300 mb-3">01</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  정리가 어렵다
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  생각은 있는데 문장으로 정리하기 어렵습니다. 어떤 순서로, 어떻게 써야 할지 막막합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-4xl font-bold text-gray-300 mb-3">02</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  수정이 반복된다
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  한 번에 잘 쓰기 어려워 계속 수정합니다. 결과가 나와도 프롬프트를 다시 고쳐야 합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-4xl font-bold text-gray-300 mb-3">03</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  확신이 없다
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  이 프롬프트가 좋은지 확신이 없습니다. 더 나은 방법이 있을 것 같은데 모르겠습니다.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-900 font-semibold">
                Prompt Picker는 이 문제를 <span className="text-indigo-600">'선택형 구조'</span>로 해결합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 기능 - 전략 5종 설명 */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5가지 전략으로 생성합니다
              </h2>
              <p className="text-lg text-gray-600">
                상황에 맞는 프롬프트를 선택할 수 있도록 서로 다른 접근 방식을 제공합니다
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* 전략 A */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">
                    A
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">안정형</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  실수 없이 쓰기 좋은 보수적 프롬프트. 명확한 지시와 최소한의 규칙으로 안정적인 결과를 만듭니다.
                </p>
              </div>

              {/* 전략 B */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                    B
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">성과형</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  명확한 목표와 결과를 강조합니다. 달성하고자 하는 바를 중심으로 구조화된 프롬프트입니다.
                </p>
              </div>

              {/* 전략 C */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-pink-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center font-bold">
                    C
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">구조형</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  조건·형식·출력 규칙이 분명합니다. 정확한 제어가 필요할 때 적합한 상세 프롬프트입니다.
                </p>
              </div>

              {/* 전략 D */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold">
                    D
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">확장형</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  아이디어를 넓히는 창의 전략. 여러 관점과 대안을 탐색할 수 있도록 설계된 프롬프트입니다.
                </p>
              </div>

              {/* 전략 E */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                    E
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">요약형</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  짧고 바로 쓰는 간결한 프롬프트. 빠른 실행이 필요할 때 사용하기 좋습니다.
                </p>
              </div>

              {/* 요약 카드 */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">5개를 제공하는 이유</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">·</span>
                    <span>생각 정리에 쓰기 좋음</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">·</span>
                    <span>여러 버전을 비교 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">·</span>
                    <span>하나 고르면 그대로 사용</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 실사용 예시 섹션 - 강화 */}
      <section id="examples" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                실제 생성 결과
              </h2>
              <p className="text-lg text-gray-600">
                아래는 실제로 생성된 프롬프트입니다. 복사해서 바로 사용할 수 있습니다
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* 입력 */}
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  사용자 입력
                </div>
                <div className="bg-gray-50 rounded-lg p-5 mb-4">
                  <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                    블로그 글 작성
                    재테크 입문자용
                    친절하고 쉬운 설명
                    전문 용어 최소화
                    실용적인 팁 포함
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium border border-indigo-100">
                    콘텐츠 작성
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium border border-gray-200">
                    ChatGPT
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium border border-gray-200">
                    보통 길이
                  </span>
                </div>
              </div>

              {/* 출력 */}
              <div className="space-y-4">
                {/* 안정형 */}
                <div className="bg-white rounded-xl p-6 border-2 border-indigo-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-bold">
                        A · 안정형
                      </span>
                    </div>
                    <button className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-100 transition-colors">
                      복사
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                    재테크 입문자를 위한 블로그 글을 작성해줘. 친절하고 쉽게 설명하고, 전문 용어는 최소화해줘. 실용적인 팁을 포함해서 독자가 바로 실천할 수 있게 만들어줘.
                  </div>
                </div>

                {/* 구조형 */}
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-bold">
                        C · 구조형
                      </span>
                    </div>
                    <button className="px-3 py-1 bg-pink-50 text-pink-700 rounded-lg text-xs font-medium hover:bg-pink-100 transition-colors">
                      복사
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                    <strong>목적:</strong> 재테크 입문자용 블로그 글 작성<br />
                    <strong>톤:</strong> 친절하고 쉬운 설명<br />
                    <strong>제약:</strong> 전문 용어 최소화, 어려운 개념은 쉬운 말로 풀어쓰기<br />
                    <strong>필수 포함:</strong> 실용적인 팁 3가지 이상<br />
                    <strong>구조:</strong> 서론(문제 제기) - 본론(해결 방법) - 결론(실천 가이드)
                  </div>
                </div>

                {/* 요약형 */}
                <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">
                        E · 요약형
                      </span>
                    </div>
                    <button className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium hover:bg-green-100 transition-colors">
                      복사
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                    재테크 초보자가 이해하기 쉽게 블로그 글 작성. 친절한 말투, 쉬운 설명, 바로 쓸 수 있는 팁 포함.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/tool" className="btn-primary px-8 py-4 text-lg">
                지금 바로 만들어보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 단순화 */}
      <section id="how" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                사용 방법
              </h2>
              <p className="text-lg text-gray-600">
                3단계로 완성됩니다
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">입력한다</h3>
                  <p className="text-gray-600">
                    단어, 문장, 키워드 등 생각나는 대로 입력합니다. 완벽한 문장이 아니어도 괜찮습니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">옵션을 고른다</h3>
                  <p className="text-gray-600">
                    목적, AI 플랫폼, 길이 등 필요한 옵션을 선택합니다. 고급 설정은 선택사항입니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">5개 중 하나를 선택해 사용한다</h3>
                  <p className="text-gray-600">
                    A~E 5가지 전략의 프롬프트가 생성됩니다. 마음에 드는 것을 선택하고 복사해서 사용합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 신뢰 섹션 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                이런 분들이 사용합니다
              </h2>
              <p className="text-lg text-gray-600">
                프롬프트 작성이 필요한 다양한 분야의 실무자들이 활용하고 있습니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  콘텐츠 제작자
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  블로그, 유튜브, 소셜미디어 콘텐츠를 만들 때 AI를 활용하는 크리에이터들이 프롬프트 작성 시간을 절약하고 있습니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  기획자 · 마케터
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  문서 작성, 기획안, 보고서, 이메일 초안 등 업무에 AI를 사용하는 실무자들이 정확한 프롬프트로 결과물의 품질을 높이고 있습니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  강의 · 문서 작성자
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  교육 자료, 매뉴얼, 가이드 문서를 만드는 분들이 명확한 구조의 프롬프트로 일관된 결과를 얻고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 - 신규 */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                자주 묻는 질문
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  이 프롬프트는 그대로 써도 되나요?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  네. 생성된 프롬프트는 ChatGPT, Claude, Gemini 등에 복사해서 바로 사용할 수 있습니다. 
                  필요하다면 "더 짧게" "더 구체적으로" 튜닝 기능을 사용해 조정할 수도 있습니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ChatGPT 말고도 쓸 수 있나요?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  네. ChatGPT, Claude, Gemini 각각에 맞는 프롬프트 구조로 생성할 수 있습니다. 
                  AI 선택 옵션에서 원하는 플랫폼을 고르면 해당 플랫폼에 최적화된 형식으로 만들어집니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  왜 5개나 만들어 주나요?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  같은 입력이라도 상황에 따라 적합한 프롬프트가 다르기 때문입니다. 
                  안정형(A)은 실수를 줄이고 싶을 때, 구조형(C)은 정확한 제어가 필요할 때, 요약형(E)은 빠른 결과가 필요할 때 사용합니다. 
                  5가지 중에서 상황에 맞는 것을 선택하면 됩니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  무료로 계속 쓸 수 있나요?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  현재 무료 체험 기간 동안 하루 3회까지 프롬프트를 생성할 수 있습니다. 
                  더 많이 사용하고 싶거나 히스토리 저장, 글자수 지정 등 고급 기능이 필요하다면 추후 출시될 유료 플랜을 이용하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 요금 안내 - 신뢰도 개선 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                현재는 무료 체험 제공 중
              </h2>
              <p className="text-lg text-gray-600">
                신용카드 등록 없이 바로 시작할 수 있습니다
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">무료 체험</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">₩0</div>
                <p className="text-gray-600">개인 사용자 대상</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">하루 3회 프롬프트 생성</div>
                    <div className="text-sm text-gray-500">매일 자정 초기화</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">5가지 전략 옵션</div>
                    <div className="text-sm text-gray-500">A~E 모든 전략 사용 가능</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">AI별 최적화</div>
                    <div className="text-sm text-gray-500">ChatGPT, Claude, Gemini 지원</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">기본 튜닝 기능</div>
                    <div className="text-sm text-gray-500">더 짧게, 더 구체적으로 조정</div>
                  </div>
                </div>
              </div>

              <Link href="/tool" className="btn-primary w-full text-center block py-4 text-lg">
                무료로 시작하기
              </Link>
            </div>

            <div className="text-center mt-8 text-sm text-gray-500">
              <p>유료 플랜은 추후 공개 예정입니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* 마무리 CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              지금, 생각을 바로 쓰는
              <br />
              프롬프트로 바꿔보세요
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              조각 입력만으로 5가지 프롬프트가 만들어집니다
            </p>
            <Link href="/tool" className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-xl">
              무료로 시작하기
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
