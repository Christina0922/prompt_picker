// app/page.tsx

export default function Page() {
  return (
    <div className="container-saas">
      {/* HERO */}
      <section className="section-major">
        <div className="card-saas" style={{ padding: "2.25rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <div className="text-sm font-medium text-gray-700">
                업무 목적 기반 · 프레임 선택 · 즉시 산출
              </div>

              <h1 className="mt-4 text-4xl font-bold text-gray-900" style={{ lineHeight: 1.15 }}>
                업무 목적을 입력하면, 실행 가능한 프롬프트 5종이 즉시 생성됩니다
              </h1>

              <p className="mt-4 text-base text-gray-600">
                기획·마케팅·세일즈·운영·HR에서 바로 쓰는 구조(목표/대상/제약/산출물 형식)로 정리합니다.
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="#start" className="btn-primary">
                업무용 프롬프트 생성하기
              </a>
              <a href="#samples" className="btn-secondary">
                샘플 산출물 보기
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* 3 Cards */}
            <div className="grid gap-3 md:grid-cols-3">
              <div className="card-saas">
                <div className="text-sm font-semibold text-gray-900">전략 보고서</div>
                <div className="mt-2 text-sm text-gray-600">
                  의사결정용 질문 세트 / 가설 / 검증 계획
                </div>
              </div>

              <div className="card-saas">
                <div className="text-sm font-semibold text-gray-900">시장·경쟁 분석</div>
                <div className="mt-2 text-sm text-gray-600">
                  세그먼트 / 포지셔닝 / 차별점 도출 프레임
                </div>
              </div>

              <div className="card-saas">
                <div className="text-sm font-semibold text-gray-900">실행 계획</div>
                <div className="mt-2 text-sm text-gray-600">
                  주간 실행안 / 리스크 / 체크리스트 자동 구성
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="section-minor">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900">3단계로 완성</h2>
          <p className="mt-2 text-sm text-gray-600">복잡한 과정 없이 빠르게 프롬프트를 생성합니다.</p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="card-saas">
            <div className="text-xs font-semibold text-gray-500">STEP 1</div>
            <div className="mt-2 text-sm font-semibold text-gray-900">조각 입력</div>
            <div className="mt-2 text-sm text-gray-600">단어 몇 개만 적어도 충분합니다.</div>
          </div>

          <div className="card-saas">
            <div className="text-xs font-semibold text-gray-500">STEP 2</div>
            <div className="mt-2 text-sm font-semibold text-gray-900">옵션 선택</div>
            <div className="mt-2 text-sm text-gray-600">목적·AI·길이를 선택합니다.</div>
          </div>

          <div className="card-saas">
            <div className="text-xs font-semibold text-gray-500">STEP 3</div>
            <div className="mt-2 text-sm font-semibold text-gray-900">5종 중 선택</div>
            <div className="mt-2 text-sm text-gray-600">마음에 드는 결과를 복사합니다.</div>
          </div>
        </div>
      </section>

      {/* 5 FRAMES */}
      <section className="section-minor">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900">5가지 전략 프레임</h2>
          <p className="mt-2 text-sm text-gray-600">
            상황에 맞는 구조를 선택해, 같은 입력에서도 다른 산출물을 얻습니다.
          </p>
        </div>

        <div className="card-saas" style={{ padding: 0, overflow: "hidden" }}>
          <div className="grid grid-cols-12 bg-gray-50 px-6 py-3 text-xs font-semibold text-gray-700">
            <div className="col-span-4">프레임</div>
            <div className="col-span-8">설명</div>
          </div>

          <FrameRow code="A" title="리스크 최소화형" desc="정합성 우선(안정적, 실수 방지)" />
          <FrameRow code="B" title="성과 설계형" desc="지표 / 전환 중심(목표 달성)" />
          <FrameRow code="C" title="구조화형" desc="목차 / 단계(문서화, 실행 가능)" />
          <FrameRow code="D" title="확장 탐색형" desc="대안 / 아이디어(확장 사고)" />
          <FrameRow code="E" title="핵심 요약형" desc="임원 보고(짧고 핵심만)" />
        </div>
      </section>

      {/* SAMPLES */}
      <section id="samples" className="section-minor">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900">샘플 산출물</h2>
          <p className="mt-2 text-sm text-gray-600">
            입력 → 결과가 어떤 형태로 나오는지, 박스 안에서 확실히 구분합니다.
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          <div className="card-saas">
            <div className="text-sm font-semibold text-gray-900">입력 예시</div>
            <div className="mt-3 rounded-md border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
              운동화 광고, 2030 여성 타깃, 편안함 강조, SNS용
            </div>
            <div className="mt-3 text-sm text-gray-600">⚡ 10초 안에 생성</div>
          </div>

          <div className="card-saas">
            <div className="text-sm font-semibold text-gray-900">결과 예시</div>
            <div className="mt-3 rounded-md border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
              “2030 여성을 위한 운동화를 SNS에 홍보해 주세요. 편안함을 주요 장점으로 강조하고, 친근하고
              공감 가는 톤으로 작성해 주세요.”
            </div>
            <div className="mt-3 text-sm text-gray-600">+ 나머지 4개 전략 보기(B, C, D, E)</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-minor">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900">자주 묻는 질문</h2>
        </div>

        <div className="card-saas" style={{ padding: 0, overflow: "hidden" }}>
          <FaqItem
            q="팀에서 재사용해도 일관성이 유지되나요?"
            a="프레임(목표/대상/제약/산출물 형식)에 맞춰 출력 구조가 유지되기 때문에, 팀에서 반복 사용해도 톤과 구성의 일관성을 확보할 수 있습니다."
          />
          <FaqItem
            q="사내 문서 톤/포맷에 맞게 커스터마이즈 되나요?"
            a="산출물 형식(목차/표/체크리스트/보고서 톤)을 지정하도록 설계해, 사내 템플릿에 맞춰 바로 붙여 넣을 수 있습니다."
          />
          <FaqItem
            q="민감 정보 없이도 사용할 수 있나요?"
            a="목적/상황/제약/대상만으로도 충분히 유효한 결과를 얻을 수 있습니다. 개인정보·기밀 정보는 입력하지 않는 방식을 권장합니다."
            last
          />
        </div>
      </section>

      {/* START */}
      <section id="start" className="section-major">
        <div className="card-saas" style={{ padding: "2.25rem" }}>
          <h2 className="text-2xl font-bold text-gray-900">지금 바로 시작하세요</h2>
          <p className="mt-3 text-sm text-gray-600">신용카드 등록 없이 무료로 체험할 수 있습니다.</p>

          <div className="mt-6" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="#start" className="btn-primary">
              업무용 프롬프트 생성하기
            </a>
            <a href="#samples" className="btn-secondary">
              샘플 산출물 보기
            </a>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-600">
            개인정보/기밀 정보 입력을 권장하지 않습니다. 입력/저장 정책을 명확히 안내합니다.
          </div>
        </div>
      </section>
    </div>
  );
}

function FrameRow({ code, title, desc }: { code: string; title: string; desc: string }) {
  return (
    <div className="grid grid-cols-12 items-start border-t border-gray-200 px-6 py-4">
      <div className="col-span-4 flex items-center gap-3">
        <span className="rounded-md border border-gray-300 px-2 py-1 text-xs font-semibold text-gray-700">
          {code}
        </span>
        <span className="text-sm font-semibold text-gray-900">{title}</span>
      </div>
      <div className="col-span-8 text-sm text-gray-600">{desc}</div>
    </div>
  );
}

function FaqItem({
  q,
  a,
  last,
}: {
  q: string;
  a: string;
  last?: boolean;
}) {
  return (
    <details className={last ? "px-6 py-4" : "border-b border-gray-200 px-6 py-4"}>
      <summary className="cursor-pointer text-sm font-semibold text-gray-900">{q}</summary>
      <div className="mt-3 text-sm text-gray-600">{a}</div>
    </details>
  );
}
