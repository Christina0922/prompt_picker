// lib/i18n/UiLangProvider.tsx
"use client";

/**
 * ✅ 단일 소스 유지용 중계 파일
 * - 프로젝트 어디에서든 lib/i18n 경로로 import 하더라도,
 *   실제 구현은 components/tool/UiLangProvider 한 군데만 사용하게 고정합니다.
 * - 이렇게 하면 중복 Context/중복 훅/throw 훅 문제로 빌드가 깨지는 것을 막습니다.
 */

export * from "@/components/tool/UiLangProvider";
