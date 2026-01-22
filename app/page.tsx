import TopTitleBar from '../components/TopTitleBar';

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <TopTitleBar />

      {/* 이하 기존 UI */}
      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-neutral-900">생성 설정</h2>
          <p className="mt-1 text-sm text-neutral-600">
            입력 → 옵션 → 생성 → 결과 복사 실무 흐름에 맞춘 구성입니다.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-neutral-900">전략 프레임 표</h2>
          <p className="mt-1 text-sm text-neutral-600">
            같은 입력이라도 프레임에 따라 ‘목적/구조/톤’이 달라집니다.
          </p>
        </div>
      </section>
    </main>
  );
}
