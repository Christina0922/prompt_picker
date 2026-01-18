import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prompt Picker - 조각만 넣으면 완벽한 프롬프트',
  description: '조각만 입력하면 5개 후보 프롬프트가 나오고, 1개만 고르면 끝',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

