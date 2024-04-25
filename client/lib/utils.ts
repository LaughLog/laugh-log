import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// text editor block의 고유 id 생성 함수
export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};

// 사용자 커서 위치 좌표 생성 함수
export const getCaretCoordinates = () => {
  let x, y;
  const isSupported = typeof window.getSelection !== 'undefined';

  if (isSupported) {
    const selection = window.getSelection(); // 현재 선택 영역

    if (selection?.rangeCount !== 0) {
      const range = selection?.getRangeAt(0).cloneRange(); // 현재 선택 영역의 범위 복제
      range?.collapse(false); // 범위를 한 좌표로 축소

      const rect = range?.getClientRects()[0]; // 위치 정보 가져오기
      x = rect?.left;
      y = rect?.top;
    }
  }

  return { x, y };
};

// 사용자 커서 컨텐츠의 끝으로 이동
export const setCaretToEnd = (element: HTMLDivElement | null) => {
  const range = document.createRange();
  const selection = window.getSelection();

  selection?.removeAllRanges();

  range.selectNodeContents(element!);
  range.collapse(false);

  selection?.addRange(range);
  element?.focus();
};
