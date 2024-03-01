import { TOOL, ToolValueType } from '@/constants/toolbar';
import Toolbar from '../_component/toolbar/toolbar';
import { useState } from 'react';

const Whiteboard = () => {
  const [selectedTool, setSeletedTool] = useState<ToolValueType>(TOOL.CLICK);

  return (
    <div className="h-full w-full">
      <Toolbar onSelect={setSeletedTool}></Toolbar>
      <canvas className="h-full w-full bg-gray200" />
    </div>
  );
};

export default Whiteboard;
