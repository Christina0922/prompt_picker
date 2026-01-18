'use client';

interface ProGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  remaining: number;
  resetsAt: Date;
}

export default function ProGateModal({
  isOpen,
  onClose,
  remaining,
  resetsAt,
}: ProGateModalProps) {
  if (!isOpen) return null;

  const formatResetTime = (date: Date) => {
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `약 ${hours}시간 ${minutes}분`;
    }
    return `약 ${minutes}분`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            무료 사용 한도 도달
          </h2>
          <p className="text-gray-600 mb-6">
            오늘의 무료 생성 횟수({remaining}/3)를 모두 사용했습니다.
            <br />
            <span className="text-sm text-gray-500">
              {formatResetTime(resetsAt)} 후 초기화됩니다.
            </span>
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              ✨ PRO로 업그레이드
            </h3>
            <ul className="text-left text-sm text-gray-700 space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>무제한 프롬프트 생성</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>글자수 정밀 지정 기능</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>고급 튜닝 옵션</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>히스토리 저장 (곧 출시)</span>
              </li>
            </ul>
            <div className="text-2xl font-bold text-blue-600 mb-2">
              준비 중
            </div>
            <p className="text-xs text-gray-500">
              PRO 버전 결제는 곧 시작됩니다
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full btn-secondary"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

