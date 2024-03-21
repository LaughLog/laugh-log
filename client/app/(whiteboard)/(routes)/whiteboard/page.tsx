'use client';

import { TOOL, ToolValueType } from '@/constants/toolbar';
import Toolbar from '../../_component/toolbar';
import { useEffect, useState } from 'react';
import { fabric } from 'fabric';

const Whiteboard = () => {
  const [selectedTool, setSeletedTool] = useState<ToolValueType>(TOOL.CLICK);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();

  useEffect(() => {
    const canvas = new fabric.Canvas('canvasEl', {
      height: 3000,
      width: 3000,
      backgroundColor: '#ebebeb'
    });

    // settings for all canvas in the app
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = '#777777';
    fabric.Object.prototype.cornerStyle = 'rect';
    fabric.Object.prototype.cornerStrokeColor = '#777777';
    fabric.Object.prototype.cornerSize = 6;

    setCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  const addRect = (canvas: fabric.Canvas) => {
    const rect = new fabric.Rect({
      height: 200,
      width: 200,
      stroke: '#b9b9b9'
    });
    canvas.add(rect);
    canvas.requestRenderAll();
  };

  return (
    <div className="h-screen w-screen">
      <button onClick={() => addRect(canvas!)}>사각형</button>
      <canvas id="canvasEl" />
      <Toolbar
        onSelect={setSeletedTool}
        onAddRect={addRect}
        canvas={canvas}
      ></Toolbar>
    </div>
  );
};

export default Whiteboard;
