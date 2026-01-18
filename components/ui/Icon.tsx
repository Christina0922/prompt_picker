'use client';

import { ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
  size?: 16 | 20 | 24;
  className?: string;
}

/**
 * 아이콘 컴포넌트 - 크기를 16~24px로 강제 제한
 * 모든 아이콘은 이 컴포넌트를 통해서만 렌더링됩니다
 */
export default function Icon({ children, size = 20, className = '' }: IconProps) {
  // 크기를 16~24로 강제 clamp
  const clampedSize = Math.min(Math.max(size, 16), 24);
  
  const sizeClasses = {
    16: 'w-4 h-4',
    20: 'w-5 h-5',
    24: 'w-6 h-6',
  };

  return (
    <span className={`inline-flex items-center justify-center flex-shrink-0 ${sizeClasses[clampedSize as keyof typeof sizeClasses]} ${className}`}>
      {children}
    </span>
  );
}

