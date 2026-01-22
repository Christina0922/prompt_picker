// components/layout/AppShell.tsx
"use client";

import * as React from "react";

type UiLang = "kr" | "en";

function getInitialLang(): UiLang {
  if (typeof window === "undefined") return "kr";

  const saved = window.localStorage.getItem("pp_ui_lang");
  if (saved === "kr" || saved === "en") return saved;

  const nav = window.navigator.language?.toLowerCase() || "";
  return nav.startsWith("ko") ? "kr" : "en";
}

function langLabel(lang: UiLang) {
  return lang === "kr" ? "KR" : "EN";
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<UiLang>("kr");

  React.useEffect(() => {
    setLang(getInitialLang());
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("pp_ui_lang", lang);
  }, [lang]);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="container-saas">
          {/* ✅ 좌/우 정렬 고정 + 헤더 크기 키움 */}
          <div className="flex min-h-[92px] items-center justify-between gap-6 py-4">
            {/* LEFT: Brand (✅ 한 줄: PP (Prompt Picker)) */}
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-xl font-extrabold tracking-wide text-gray-900 shadow-sm">
                PP
              </span>

              <div className="text-4xl font-extrabold text-gray-900 leading-tight">
                <span>PP</span>
                <span className="text-gray-400 mx-3">(</span>
                <span>Prompt Picker</span>
                <span className="text-gray-400">)</span>
              </div>
            </div>

            {/* RIGHT: Lang + CTA (✅ 오른쪽 정렬) */}
            <div className="ml-auto flex items-center justify-end gap-3">
              <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 p-1 shadow-sm">
                {(["kr", "en"] as UiLang[]).map((v) => {
                  const active = lang === v;
                  return (
                    <button
                      key={v}
                      type="button"
                      className={[
                        "min-h-[48px] px-4 text-base font-bold rounded-md",
                        active
                          ? "bg-gray-900 text-white shadow-sm"
                          : "text-gray-700 hover:bg-white hover:text-gray-900",
                      ].join(" ")}
                      aria-pressed={active}
                      onClick={() => setLang(v)}
                    >
                      {langLabel(v)}
                    </button>
                  );
                })}
              </div>

              <a
                href="#start"
                className="btn-primary"
                style={{ padding: "0.9rem 1.4rem" }}
              >
                시작하기
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="container-saas section-minor leading-[1.7] text-gray-800">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container-saas py-10 text-sm text-gray-600">
          <div className="mb-2 font-semibold text-gray-900">Prompt Picker</div>
          <div className="mb-6">
            개인정보/기밀 정보 입력을 권장하지 않습니다. 입력/저장 정책을 명확히 안내합니다.
          </div>
          <div className="text-gray-500">© 2026 Prompt Picker. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
