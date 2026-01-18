'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container-saas">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Prompt Picker</span>
            </Link>

            <Link href="/tool" className="btn-primary">
              무료 체험
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="section-major bg-gradient-to-b from-gray-50 to-white">
        <div className="container-saas">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-200 rounded-full mb-8 text-sm font-semibold text-indigo-700">
              5가지 전략 · 10초 생성 · 무료 체험
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              조각만 넣으면<br />
              <span className="text-gradient">프롬프트 5개</span> 완성
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              단어 몇 개만 입력하면 A~E 전략의 완성된 프롬프트를 즉시 생성합니다
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tool" className="btn-primary text-lg">
                지금 바로 만들기
              </Link>
              <a href="#demo" className="btn-secondary text-lg">
                데모 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Card */}
      <section className="section-minor" id="demo">
        <div className="container-saas">
          <div className="max-w-3xl mx-auto">
            <div className="card-saas border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 text-sm font-semibold text-gray-500">Preview</span>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 mb-2">입력</div>
                  <div className="text-sm text-gray-900 font-mono">운동화 홍보, 2030 여성, 편안함</div>
                </div>

                <div className="text-center text-gray-400 text-sm font-semibold">↓ 10초</div>

                <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-600">
                  <div className="text-xs font-bold text-indigo-700 mb-2">A · 안정형</div>
                  <div className="text-sm text-gray-800">2030 여성을 위한 운동화를 홍보해주세요. 편안함을 강조해주세요.</div>
                </div>

                <div className="text-center text-sm text-gray-500">+ 4개 더 (B, C, D, E)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="section-major bg-gray-50">
        <div className="container-saas">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">3단계로 완성</h2>
            <p className="text-lg text-gray-600">복잡한 과정 없이 빠르게 프롬프트를 생성합니다</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">조각 입력</h3>
              <p className="text-gray-600">단어 몇 개만 적어도 OK</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">옵션 선택</h3>
              <p className="text-gray-600">목적·AI·길이 클릭</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5개 중 선택</h3>
              <p className="text-gray-600">마음에 드는 걸 복사</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Strategies */}
      <section className="section-major">
        <div className="container-saas">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">5가지 전략으로 생성</h2>
            <p className="text-lg text-gray-600">상황에 맞는 프롬프트를 고를 수 있습니다</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <table className="w-full bg-white rounded-2xl border-2 border-gray-300 overflow-hidden">
              <tbody>
                {[
                  { id: 'A', label: '안정형', desc: '실수 없이 쓰기 좋은 보수적 프롬프트' },
                  { id: 'B', label: '성과형', desc: '목표 중심으로 결과를 강조하는 프롬프트' },
                  { id: 'C', label: '구조형', desc: '규칙이 명확하고 단계가 체계적인 프롬프트' },
                  { id: 'D', label: '확장형', desc: '아이디어를 확장하고 창의성을 끌어내는 프롬프트' },
                  { id: 'E', label: '요약형', desc: '짧고 빠르게, 핵심만 담은 프롬프트' },
                ].map((strategy, idx, arr) => (
                  <tr key={strategy.id} className={`${idx !== arr.length - 1 ? 'border-b-2 border-gray-300' : ''} hover:bg-gray-50 transition-colors`}>
                    <td className="px-8 py-6 w-16">
                      <div className="text-3xl font-bold text-gray-900">{strategy.id}</div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-lg font-semibold text-gray-900 mb-1">{strategy.label}</div>
                      <div className="text-sm text-gray-600">{strategy.desc}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-major bg-gray-50">
        <div className="container-saas">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">자주 묻는 질문</h2>

            <div className="space-y-3">
              {[
                { q: '이 프롬프트는 그대로 써도 되나요?', a: '네. ChatGPT, Claude, Gemini에 바로 붙여넣기하면 됩니다.' },
                { q: '왜 5개나 만들어 주나요?', a: '상황에 따라 적합한 전략이 다르기 때문입니다. 비교해서 선택하세요.' },
                { q: '무료 체험은 어떻게 제한되나요?', a: '하루 3회까지 생성할 수 있습니다. 자정에 초기화됩니다.' },
              ].map((item, idx) => (
                <div key={idx} className="card-saas border-2 border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-gray-900 text-lg pr-4">{item.q}</span>
                    <span className="text-2xl text-gray-400 flex-shrink-0">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="mt-4 pt-4 border-t border-gray-200 text-gray-600 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-major bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-saas text-center">
          <h2 className="text-5xl font-bold text-white mb-6">지금 바로 시작하세요</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            신용카드 등록 없이 무료로 체험할 수 있습니다
          </p>
          <Link href="/tool" className="inline-block px-10 py-4 bg-white text-indigo-600 text-lg font-bold rounded-lg hover:bg-gray-50 transition-all shadow-2xl no-underline">
            무료로 시작하기
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container-saas text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PP</span>
            </div>
            <span className="text-white font-bold text-lg">Prompt Picker</span>
          </div>
          <p className="text-sm text-gray-400">© 2026 Prompt Picker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
