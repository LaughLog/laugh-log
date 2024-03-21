import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// text editor block의 고유 id 생성 함수
export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};
