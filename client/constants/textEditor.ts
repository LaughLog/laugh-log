// enum vs. const enum (https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-enum-%EC%A0%95%EB%A6%AC)
export const enum SET_TIME {
  DEBOUNCE = 200,
  FOCUS_CURRENT_EL = 50,
  FOCUS_PREVIOUS_EL = 350,
  FOCUS_NEXT_EL = 50
}

export const enum CMD_KEY {
  SLASH = '/',
  ENTER = 'Enter',
  BACKSPACE = 'Backspace',
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  TAB = 'Tab'
}

export const enum MENU {
  HEIGHT = 150
}

export const MENU_ITEMS = [
  {
    id: 'page-title',
    tag: 'h1',
    label: '제목 1'
  },
  {
    id: 'heading',
    tag: 'h2',
    label: '제목 2'
  },
  {
    id: 'subheading',
    tag: 'h3',
    label: '제목 3'
  },
  {
    id: 'paragraph',
    tag: 'p',
    label: '텍스트'
  }
];
