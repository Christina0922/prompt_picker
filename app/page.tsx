'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Prompt Picker</span>
            </Link>

            <Link href="/tool" className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg no-underline">
              무료 체험
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full mb-8">
              <span className="text-sm font-semibold text-indigo-700">5가지 전략 · 10초 생성 · 무료 체험</span>
            </div>

            <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              조각만 넣으면<br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">프롬프트 5개</span>가 완성됩니다
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              단어 몇 개만 입력하면 A~E 전략의 완성된 프롬프트를 즉시 생성합니다
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tool" className="px-8 py-4 bg-indigo-600 text-white text-lg font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 no-underline">
                지금 바로 만들기
              </Link>
              <a href="#demo" className="px-8 py-4 bg-white text-gray-700 text-lg font-bold rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-gray-300 no-underline">
                데모 보기
              </a>
            </div>

            {/* 미니 데모 */}
            <div className="mt-16 bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-2xl mx-auto" id="demo">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-xs text-gray-500 mb-2 font-semibold">입력</div>
                <div className="text-sm text-gray-900">운동화 홍보, 2030 여성, 편안함</div>
              </div>

              <div className="text-center text-gray-400 text-sm font-semibold mb-4">↓ 10초</div>

              <div className="space-y-3">
                <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-600">
                  <div className="text-xs font-bold text-indigo-700 mb-2">A · 안정형</div>
                  <div className="text-sm text-gray-800">2030 여성을 위한 운동화를 홍보해주세요...</div>
                </div>
                <div className="text-center text-gray-400 text-sm">+ 4개 더</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 기능 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              3단계로 완성
            </h2>
            <p className="text-lg text-gray-600">
              복잡한 과정 없이 빠르게 프롬프트를 생성합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">조각 입력</h3>
              <p className="text-gray-600">단어 몇 개만 적어도 OK</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">옵션 선택</h3>
              <p className="text-gray-600">목적·AI·길이 클릭</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5개 중 선택</h3>
              <p className="text-gray-600">마음에 드는 걸 복사</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5가지 전략 */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              5가지 전략으로 생성
            </h2>
            <p className="text-lg text-gray-600">
              상황에 맞는 프롬프트를 고를 수 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { label: 'A · 안정형', desc: '실수 없이', color: 'indigo' },
              { label: 'B · 성과형', desc: '목표 중심', color: 'purple' },
              { label: 'C · 구조형', desc: '규칙 명확', color: 'pink' },
              { label: 'D · 확장형', desc: '아이디어 확장', color: 'amber' },
              { label: 'E · 요약형', desc: '짧고 빠르게', color: 'green' },
            ].map((strategy, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className={`text-lg font-bold text-${strategy.color}-600 mb-2`}>{strategy.label}</div>
                <div className="text-sm text-gray-600">{strategy.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            자주 묻는 질문
          </h2>

          <div className="space-y-4">
            {[
              { q: '이 프롬프트는 그대로 써도 되나요?', a: '네. ChatGPT, Claude, Gemini에 바로 붙여넣기하면 됩니다.' },
              { q: '왜 5개나 만들어 주나요?', a: '상황에 따라 적합한 전략이 다르기 때문입니다. 비교해서 선택하세요.' },
              { q: '무료 체험은 어떻게 제한되나요?', a: '하루 3회까지 생성할 수 있습니다. 자정에 초기화됩니다.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg">{item.q}</span>
                  <span className="text-2xl text-gray-400">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            신용카드 등록 없이 무료로 체험할 수 있습니다
          </p>
          <Link href="/tool" className="inline-block px-10 py-5 bg-white text-indigo-600 text-lg font-bold rounded-xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:-translate-y-1 no-underline">
            무료로 시작하기
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PP</span>
            </div>
            <span className="text-white font-bold text-lg">Prompt Picker</span>
          </div>
          <p className="text-sm">© 2026 Prompt Picker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
