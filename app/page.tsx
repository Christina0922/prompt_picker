'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isDemoHighlighted, setIsDemoHighlighted] = useState(false);
  const [showMoreStrategies, setShowMoreStrategies] = useState(false);

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      // Smooth scroll to demo
      demoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Highlight effect
      setIsDemoHighlighted(true);
      setTimeout(() => {
        setIsDemoHighlighted(false);
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - 간격 개선 */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container-saas">
          <div className="flex items-center justify-between h-16 gap-12">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="text-xl font-bold text-gray-900 no-underline">Prompt Picker</span>
            </Link>

            <Link href="/tool" className="btn-primary flex-shrink-0">
              무료 체험
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
              <a 
                href="#demo" 
                onClick={handleDemoClick}
                className="btn-secondary text-lg"
              >
                데모 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Card - 개선 */}
      <section className="py-12" id="demo">
        <div className="container-saas">
          <div className="max-w-3xl mx-auto">
            <div className={`card-saas border-2 transition-all duration-300 ${
              isDemoHighlighted 
                ? 'border-indigo-500 bg-indigo-50/30 shadow-lg' 
                : 'border-gray-200 bg-white'
            }`}>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 text-sm font-semibold text-gray-500">데모 미리보기</span>
              </div>

              <div className="space-y-4">
                {/* 입력 예시 */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 mb-2">입력 예시</div>
                  <div className="text-sm text-gray-900 font-mono">운동화 광고, 2030 여성 타겟, 편안함 강조, SNS용</div>
                </div>

                {/* 생성 시간 */}
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 font-semibold text-sm rounded-lg border border-indigo-200">
                    ⚡ 10초 만에 생성
                  </span>
                </div>

                {/* 전략 A 결과 */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-l-4 border-indigo-600">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-600 text-white font-bold text-sm rounded-lg">A</span>
                    <span className="font-bold text-gray-900">안정형 전략</span>
                  </div>
                  <div className="text-base text-gray-800 leading-relaxed">
                    "2030 여성을 위한 운동화를 SNS에 홍보해주세요. 편안함을 주요 장점으로 강조하고, 친근하고 공감 가는 톤으로 작성해주세요."
                  </div>
                </div>

                {/* 나머지 전략들 (아코디언) */}
                <div>
                  <button
                    onClick={() => setShowMoreStrategies(!showMoreStrategies)}
                    className="w-full text-center py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
                  >
                    <span className="text-sm font-semibold text-gray-700">
                      {showMoreStrategies ? '접기' : '+ 나머지 4개 전략 보기 (B, C, D, E)'}
                    </span>
                  </button>
                  
                  {showMoreStrategies && (
                    <div className="mt-4 space-y-3 animate-fadeIn">
                      {[
                        { id: 'B', label: '성과형', desc: '목표 중심으로 결과를 강조하는 프롬프트' },
                        { id: 'C', label: '구조형', desc: '규칙이 명확하고 단계가 체계적인 프롬프트' },
                        { id: 'D', label: '확장형', desc: '아이디어를 확장하고 창의성을 끌어내는 프롬프트' },
                        { id: 'E', label: '요약형', desc: '짧고 빠르게, 핵심만 담은 프롬프트' },
                      ].map((strategy) => (
                        <div key={strategy.id} className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="inline-flex items-center justify-center w-7 h-7 bg-gray-600 text-white font-bold text-sm rounded-lg">
                              {strategy.id}
                            </span>
                            <span className="font-semibold text-gray-900">{strategy.label}</span>
                          </div>
                          <div className="text-sm text-gray-600 ml-9">{strategy.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="text-center pt-2">
                  <Link 
                    href="/tool" 
                    className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold text-sm rounded-lg hover:bg-indigo-700 transition-colors no-underline"
                  >
                    직접 만들어보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps - TABLE (고급스럽게) */}
      <section className="py-16 bg-gray-50">
        <div className="container-saas">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">3단계로 완성</h2>
            <p className="text-lg text-gray-600">복잡한 과정 없이 빠르게 프롬프트를 생성합니다</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-800 to-gray-700">
                      <th className="px-8 py-5 text-left font-bold text-white text-lg border-r border-gray-600">단계</th>
                      <th className="px-8 py-5 text-left font-bold text-white text-lg border-r border-gray-600">제목</th>
                      <th className="px-8 py-5 text-left font-bold text-white text-lg">설명</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { step: '1', title: '조각 입력', desc: '단어 몇 개만 적어도 OK' },
                      { step: '2', title: '옵션 선택', desc: '목적·AI·길이 클릭' },
                      { step: '3', title: '5개 중 선택', desc: '마음에 드는 걸 복사' },
                    ].map((item, idx, arr) => (
                      <tr key={item.step} className={`${idx !== arr.length - 1 ? 'border-b-2 border-gray-200' : ''} hover:bg-indigo-50 transition-colors`}>
                        <td className="px-8 py-6 border-r-2 border-gray-200">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white font-black text-2xl rounded-xl shadow-lg">
                            {item.step}
                          </div>
                        </td>
                        <td className="px-8 py-6 font-bold text-gray-900 text-xl border-r-2 border-gray-200">{item.title}</td>
                        <td className="px-8 py-6 text-gray-600 text-lg leading-relaxed">{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Strategies - TABLE (고급스럽게) */}
      <section className="py-16 bg-white">
        <div className="container-saas">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">5가지 전략으로 생성</h2>
            <p className="text-lg text-gray-600">상황에 맞는 프롬프트를 고를 수 있습니다</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-800 to-gray-700">
                      <th className="px-8 py-5 text-center font-bold text-white text-lg border-r border-gray-600">코드</th>
                      <th className="px-8 py-5 text-left font-bold text-white text-lg border-r border-gray-600">전략명</th>
                      <th className="px-8 py-5 text-left font-bold text-white text-lg">한줄 설명</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 'A', label: '안정형', desc: '실수 없이 쓰기 좋은 보수적 프롬프트' },
                      { id: 'B', label: '성과형', desc: '목표 중심으로 결과를 강조하는 프롬프트' },
                      { id: 'C', label: '구조형', desc: '규칙이 명확하고 단계가 체계적인 프롬프트' },
                      { id: 'D', label: '확장형', desc: '아이디어를 확장하고 창의성을 끌어내는 프롬프트' },
                      { id: 'E', label: '요약형', desc: '짧고 빠르게, 핵심만 담은 프롬프트' },
                    ].map((strategy, idx, arr) => (
                      <tr key={strategy.id} className={`${idx !== arr.length - 1 ? 'border-b-2 border-gray-200' : ''} hover:bg-indigo-50 transition-colors`}>
                        <td className="px-8 py-6 text-center border-r-2 border-gray-200">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white font-black text-2xl rounded-xl shadow-lg">
                            {strategy.id}
                          </div>
                        </td>
                        <td className="px-8 py-6 font-bold text-gray-900 text-xl border-r-2 border-gray-200">{strategy.label}</td>
                        <td className="px-8 py-6 text-gray-600 text-lg leading-relaxed">{strategy.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - 고급스럽게 */}
      <section className="py-16 bg-gray-50">
        <div className="container-saas">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">자주 묻는 질문</h2>

            <div className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-xl">
              {[
                { q: '이 프롬프트는 그대로 써도 되나요?', a: '네. ChatGPT, Claude, Gemini에 바로 붙여넣기하면 됩니다.' },
                { q: '왜 5개나 만들어 주나요?', a: '상황에 따라 적합한 전략이 다르기 때문입니다. 비교해서 선택하세요.' },
                { q: '무료 체험은 어떻게 제한되나요?', a: '하루 3회까지 생성할 수 있습니다. 자정에 초기화됩니다.' },
              ].map((item, idx, arr) => (
                <div key={idx} className={idx !== arr.length - 1 ? 'border-b-2 border-gray-200' : ''}>
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-indigo-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-xl pr-6">{item.q}</span>
                    <svg 
                      className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200" 
                      style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === idx && (
                    <div className="px-8 pb-6 pt-2 text-gray-600 text-lg leading-relaxed bg-gray-50">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card - 전문가 수준 */}
      <section className="py-16 bg-gray-50">
        <div className="container-saas">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-10 shadow-sm text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                지금 바로 시작하세요
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                신용카드 등록 없이 무료로 체험할 수 있습니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/tool" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl no-underline"
                >
                  무료로 시작하기
                </Link>
                <a 
                  href="#demo" 
                  onClick={handleDemoClick}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all no-underline"
                >
                  데모 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - 단정하게 */}
      <footer className="bg-gray-900 py-8">
        <div className="container-saas text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-7 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">PP</span>
            </div>
            <span className="text-white font-bold text-base">Prompt Picker</span>
          </div>
          <p className="text-sm text-gray-400">© 2026 Prompt Picker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
