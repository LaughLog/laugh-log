'use client';

import { TOOL, ToolValueType } from '@/constants/toolbar';
import Toolbar from '../../_component/toolbar';
import { useState } from 'react';

const Whiteboard = () => {
  const [selectedTool, setSeletedTool] = useState<ToolValueType>(TOOL.CLICK);

  return (
    <div className="h-screen w-screen">
      <Toolbar onSelect={setSeletedTool}></Toolbar>
      <canvas className="h-full w-full bg-gray200" />
    </div>
  );
};

export default Whiteboard;
