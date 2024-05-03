import { uid } from '@/lib/utils/textEditor';
import { format } from 'date-fns';

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

// Board types
export const NEW_BOARD_TYPE = [
  {
    id: uid(),
    tag: 'h1',
    content: ''
  }
];

export const MEETING_MINUTES_TYPE = [
  {
    id: uid(),
    tag: 'h1',
    content: '회의 안건'
  },
  {
    id: uid(),
    tag: 'h3',
    content: '회의 일시 : ' + format(new Date(), 'yyyy.MM.dd hh:mm')
  },
  {
    id: uid(),
    tag: 'h3',
    content: '회의 참여자 :'
  },
  {
    id: uid(),
    tag: 'h3',
    content: '작성자 :'
  },
  {
    id: uid(),
    tag: 'p',
    content: ''
  },
  {
    id: uid(),
    tag: 'p',
    content: '안건 1.'
  },
  {
    id: uid(),
    tag: 'p',
    content: '안건 2.'
  },
  {
    id: uid(),
    tag: 'p',
    content: ''
  },
  {
    id: uid(),
    tag: 'p',
    content: '결정 사항 1. '
  },
  {
    id: uid(),
    tag: 'p',
    content: '결정 사항 2. '
  }
];
