export const TOOL = {
  CLICK: 'click',
  HAND: 'hand',
  RECT: 'rect',
  DIA: 'dia',
  CIRCLE: 'circle',
  ARROW: 'arrow',
  LINE: 'line',
  PEN: 'pen',
  TEXT: 'text'
} as const;

export type ToolKeyType = keyof typeof TOOL;
export type ToolValueType = (typeof TOOL)[keyof typeof TOOL];
export type MenuProps = {
  name: ToolValueType;
  icon: JSX.Element;
  select: boolean;
};
