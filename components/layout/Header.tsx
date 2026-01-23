import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-bold text-neutral-900">
            PP
          </div>
          <div className="text-lg font-bold text-neutral-900">Prompt Picker</div>
        </Link>

        {/* ✅ 여기에는 언어 토글을 두지 않습니다.
            언어 토글은 "페이지 타이틀(프롬프트 생성기)" 줄에만 둡니다. */}
        <a
          href="mailto:connect.geniusbrain@gmail.com"
          className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors px-4 py-2 rounded-lg hover:bg-neutral-50"
          title="문의하기"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
