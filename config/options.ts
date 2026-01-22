// 옵션 정의 상수

export type Purpose = "content" | "analysis" | "code" | "translate" | "doc";
export type Platform = "auto" | "chatgpt" | "claude" | "gemini";
export type LengthOpt = "short" | "normal" | "detailed" | "custom";
export type Tone = "neutral" | "formal" | "friendly";
export type Format = "plain" | "bullets" | "table";

export const PURPOSE_OPTIONS: Purpose[] = ["content", "analysis", "code", "translate", "doc"];
export const PLATFORM_OPTIONS: Platform[] = ["auto", "chatgpt", "claude", "gemini"];
export const LENGTH_OPTIONS: LengthOpt[] = ["short", "normal", "detailed", "custom"];
export const TONE_OPTIONS: Tone[] = ["neutral", "formal", "friendly"];
export const FORMAT_OPTIONS: Format[] = ["plain", "bullets", "table"];

