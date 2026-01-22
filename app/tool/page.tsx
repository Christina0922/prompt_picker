import { redirect } from 'next/navigation';

export default function Page() {
  // ✅ 정석: /tool은 예전 경로/보조 경로이므로 루트(/)로 보냅니다.
  redirect('/');
}
