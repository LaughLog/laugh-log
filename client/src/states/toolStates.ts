import { TOOL, ToolValueType } from 'constant/toolbox';
import { atom } from 'jotai';

export const selectedTool = atom<ToolValueType>(TOOL.CLICK);
