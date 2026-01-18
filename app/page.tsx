'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header - 완전 재구성 */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <Link href="/" className="flex items-center gap-2 no-underline">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="text-lg font-bold text-gray-900 no-underline">Prompt Picker</span>
            </Link>

            {/* 네비게이션 */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#examples" className="text-sm font-medium text-gray-700 hover:text-gray-900 no-underline">
                예시
              </a>
              <a href="#strategies" className="text-sm font-medium text-gray-700 hover:text-gray-900 no-underline">
                전략
              </a>
              <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-gray-900 no-underline">
                FAQ
              </a>
            </nav>

            {/* CTA */}
            <Link href="/tool" className="px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors no-underline">
              무료로 시작하기
            </Link>
          </div>
        </div>
      </header>

      {/* Hero - 짧고 강하게 */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 좌: 텍스트 */}
          <div>
            {/* 칩 3개 */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold border border-indigo-100">
                전략 5종
              </span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-semibold border border-gray-200">
                10초 생성
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-100">
                무료 체험 (하루 3회)
              </span>
            </div>

            {/* 헤드라인 */}
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              조각 입력만으로,<br />바로 쓰는 프롬프트 5개를 만듭니다
            </h1>

            {/* 서브 */}
            <p className="text-lg text-gray-600 mb-3">
              단어·문장·아이디어를 넣으면
            </p>
            <p className="text-lg text-gray-600 mb-8">
              전략이 다른 후보 A~E를 즉시 생성합니다
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/tool" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-center no-underline">
                무료로 바로 만들어보기
              </Link>
              <a href="#examples" className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center no-underline">
                결과 예시 보기
              </a>
            </div>
          </div>

          {/* 우: 미리보기 카드 */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase mb-3">Preview</div>
            
            {/* 입력 */}
            <div className="bg-white rounded-lg p-4 mb-3 border border-gray-200">
              <div className="text-xs text-gray-500 mb-2">입력</div>
              <div className="text-sm text-gray-800 font-mono">
                블로그 글, 재테크, 쉬운 설명
              </div>
            </div>

            {/* 출력 */}
            <div className="space-y-2">
              <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                <div className="text-xs font-bold text-indigo-700 mb-1">A · 안정형</div>
                <div className="text-xs text-gray-700">재테크 입문자를 위한...</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                <div className="text-xs font-bold text-green-700 mb-1">E · 요약형</div>
                <div className="text-xs text-gray-700">재테크 초보자가 이해...</div>
              </div>
              <div className="text-xs text-gray-500 text-center pt-2">
                + 3개 더 (B, C, D)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문제 인식 - 카드 3개 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              프롬프트 작성이 어려운 이유
            </h2>
            <p className="text-gray-600">
              생각을 효과적인 프롬프트로 만드는 과정에서 반복되는 문제들
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-2xl font-bold text-gray-300 mb-3">01</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">정리가 어렵다</h3>
              <p className="text-sm text-gray-600">
                생각은 있는데 문장 구조가 막힙니다
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-2xl font-bold text-gray-300 mb-3">02</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">수정이 반복된다</h3>
              <p className="text-sm text-gray-600">
                결과가 안 나오면 다시 고쳐야 합니다
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-2xl font-bold text-gray-300 mb-3">03</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">확신이 없다</h3>
              <p className="text-sm text-gray-600">
                이 방식이 맞는지 판단하기 어렵습니다
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-900 font-semibold">
              Prompt Picker는 <span className="text-indigo-600">"선택형 구조"</span>로 이 과정을 단순화합니다
            </p>
          </div>
        </div>
      </section>

      {/* 5가지 전략 - 요약 카드 */}
      <section id="strategies" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              5가지 전략으로 생성합니다
            </h2>
            <p className="text-gray-600">
              상황에 맞는 프롬프트를 고를 수 있도록 서로 다른 접근을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-indigo-200 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">A</div>
                <h3 className="font-bold text-gray-900">안정형</h3>
              </div>
              <p className="text-sm text-gray-600">실수 없이 쓰기 좋은 보수적 구조</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-200 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">B</div>
                <h3 className="font-bold text-gray-900">성과형</h3>
              </div>
              <p className="text-sm text-gray-600">목표·결과를 또렷하게 만드는 구조</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-pink-200 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-pink-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">C</div>
                <h3 className="font-bold text-gray-900">구조형</h3>
              </div>
              <p className="text-sm text-gray-600">조건·형식·출력 규칙이 명확한 구조</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-amber-200 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">D</div>
                <h3 className="font-bold text-gray-900">확장형</h3>
              </div>
              <p className="text-sm text-gray-600">아이디어를 넓히는 탐색형 구조</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-green-200 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">E</div>
                <h3 className="font-bold text-gray-900">요약형</h3>
              </div>
              <p className="text-sm text-gray-600">짧고 빠르게 실행하는 간결 구조</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-5 text-white">
              <h3 className="font-bold mb-3">5개를 제공하는 이유</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>생각 정리에 쓰기 좋음</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>여러 버전 비교 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>하나 고르면 그대로 사용</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 결과 예시 - 1세트만, 간결하게 */}
      <section id="examples" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              결과 예시
            </h2>
            <p className="text-gray-600">
              아래는 실제 생성 형태 예시입니다. 마음에 드는 전략을 골라 복사해 사용합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* 입력 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-3">입력</div>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-800 leading-relaxed">
                블로그 글 작성<br />
                재테크 입문자용<br />
                쉬운 설명<br />
                실용 팁 포함
              </div>
            </div>

            {/* 출력 */}
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-1 rounded">A · 안정형</span>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors">복사</button>
                </div>
                <div className="text-sm text-gray-800 leading-relaxed">
                  재테크 입문자를 위한 블로그 글을 작성해줘. 친절하고 쉽게 설명하고, 실용적인 팁을 포함해줘.
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-pink-700 bg-pink-50 px-2 py-1 rounded">C · 구조형</span>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors">복사</button>
                </div>
                <div className="text-sm text-gray-800 leading-relaxed">
                  <strong>목적:</strong> 재테크 입문자용 블로그<br />
                  <strong>톤:</strong> 친절하고 쉬운 설명<br />
                  <strong>필수:</strong> 실용적인 팁 3가지 이상
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded">E · 요약형</span>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors">복사</button>
                </div>
                <div className="text-sm text-gray-800 leading-relaxed">
                  재테크 초보자가 이해하기 쉽게 블로그 글 작성. 쉬운 설명, 바로 쓸 수 있는 팁 포함.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/tool" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors inline-block no-underline">
              지금 바로 만들어보기
            </Link>
          </div>
        </div>
      </section>

      {/* 사용 방법 - 3단계만 간단히 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              사용 방법
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">입력한다</h3>
                <p className="text-sm text-gray-600">단어, 문장, 키워드로도 충분합니다</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">옵션을 고른다</h3>
                <p className="text-sm text-gray-600">목적·플랫폼·길이를 선택합니다</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">하나를 선택해 사용한다</h3>
                <p className="text-sm text-gray-600">A~E 중 마음에 드는 것을 복사합니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 사용자 - 3카드만 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              이런 분들이 사용합니다
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">콘텐츠 제작자</h3>
              <p className="text-sm text-gray-600">
                블로그, 유튜브, SNS 콘텐츠 제작 시 프롬프트 작성 시간을 절약합니다
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">기획자 · 마케터</h3>
              <p className="text-sm text-gray-600">
                문서, 기획안, 보고서 작성 시 정확한 프롬프트로 품질을 높입니다
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">강의 · 문서 작성자</h3>
              <p className="text-sm text-gray-600">
                교육 자료, 매뉴얼 제작 시 명확한 구조로 일관된 결과를 얻습니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - 아코디언 */}
      <section id="faq" className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: '이 프롬프트는 그대로 써도 되나요?',
                a: '네. ChatGPT, Claude, Gemini 등에 복사해서 바로 사용할 수 있습니다. 필요하면 "더 짧게" "더 구체적으로" 튜닝도 가능합니다.',
              },
              {
                q: 'ChatGPT 말고도 쓸 수 있나요?',
                a: '네. ChatGPT, Claude, Gemini 각각에 맞는 구조로 생성할 수 있습니다. AI 선택 옵션에서 원하는 플랫폼을 고르면 됩니다.',
              },
              {
                q: '왜 5개나 만들어 주나요?',
                a: '상황에 따라 적합한 프롬프트가 다르기 때문입니다. 안정형(A)은 실수를 줄일 때, 구조형(C)은 정확한 제어가 필요할 때, 요약형(E)은 빠른 결과가 필요할 때 선택합니다.',
              },
              {
                q: '무료 체험은 어떻게 제한되나요?',
                a: '하루 3회까지 프롬프트를 생성할 수 있습니다. 자정에 초기화됩니다.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-4 py-4 text-left hover:bg-gray-50 transition-all duration-200"
                >
                  <span className="font-semibold text-gray-900 text-base md:text-lg block">{item.q}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - 간단하게 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              현재는 무료 체험 제공 중
            </h2>
            <p className="text-gray-600">
              신용카드 등록 없이 바로 시작할 수 있습니다
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-md mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">무료 체험</h3>
              <div className="text-4xl font-bold text-gray-900">₩0</div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">하루 3회 생성</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">전략 5종</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">ChatGPT · Claude · Gemini 지원</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">기본 튜닝(더 짧게/더 구체적으로)</span>
              </div>
            </div>

            <Link href="/tool" className="btn-primary w-full text-center block py-3">
              무료로 시작하기
            </Link>

            <p className="text-xs text-gray-500 text-center mt-4">
              유료 플랜은 추후 공개 예정입니다
            </p>
          </div>
        </div>
      </section>

      {/* 마지막 CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            지금, 생각을 바로 쓰는<br />프롬프트로 바꿔보세요
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            조각 입력만으로 5가지 프롬프트가 만들어집니다
          </p>
            <Link href="/tool" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-xl no-underline">
            무료로 시작하기
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">PP</span>
              </div>
              <span className="text-white font-semibold text-sm">Prompt Picker</span>
            </div>
            <div className="text-sm">
              © 2026 Prompt Picker. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
