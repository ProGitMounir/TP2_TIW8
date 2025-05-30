/* import React, { useRef, useEffect, useState } from 'react';
import { SimpleRecognizer } from '../utils/SimpleRecognizer';

const GestureCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [recognizer] = useState(() => new SimpleRecognizer());
  const [message, setMessage] = useState('');
  const isDrawing = useRef(false);
  const points = useRef<[number, number][]>([]);

  useEffect(() => {
    // Gestes de base
    recognizer.addGesture('ligne', [[0, 0.5], [1, 0.5]]);
    recognizer.addGesture('V', [[0, 0], [0.5, 1], [1, 0]]);
    recognizer.addGesture('cercle', [
      [0.5, 0], [0.85, 0.15], [1, 0.5], [0.85, 0.85],
      [0.5, 1], [0.15, 0.85], [0, 0.5], [0.15, 0.15], [0.5, 0]
    ]);
  }, [recognizer]);

  const getRelativeCoords = (event: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return [
      (event.clientX - rect.left) / rect.width,
      (event.clientY - rect.top) / rect.height
    ] as [number, number];
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDrawing.current = true;
    points.current = [getRelativeCoords(e)];
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing.current) return;
    points.current.push(getRelativeCoords(e));
    draw();
  };

  const handlePointerUp = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    const result = recognizer.recognize(points.current);
    setMessage(result ? `Geste reconnu : ${result}` : 'Geste non reconnu');
    points.current = [];
    clearCanvas();
  };

  const draw = () => {
    const ctx = canvasRef.current!.getContext('2d')!;
    const width = canvasRef.current!.width;
    const height = canvasRef.current!.height;
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    for (let i = 0; i < points.current.length; i++) {
      const [x, y] = points.current[i];
      if (i === 0) {
        ctx.moveTo(x * width, y * height);
      } else {
        ctx.lineTo(x * width, y * height);
      }
    }
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
  };

  return (
    <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Reconnaissance de Gestes</h2>
        <canvas
            ref={canvasRef}
            width={500}
            height={500}
            className="border border-black mx-auto"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        />
        <p className="mt-4 text-lg">{message}</p>
    </div>
  );
};

export default GestureCanvas;
 */
import React, { useRef, useEffect, useState } from 'react';
import { SimpleRecognizer } from '../utils/SimpleRecognizer';

const GestureCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [recognizer] = useState(() => new SimpleRecognizer());
  const [message, setMessage] = useState('');
  const isDrawing = useRef(false);
  const points = useRef<[number, number][]>([]);

  useEffect(() => {
    // Gestes de base
    recognizer.addGesture('ligne', [[0, 0.5], [1, 0.5]]);
    recognizer.addGesture('V', [[0, 0], [0.5, 1], [1, 0]]);
    recognizer.addGesture('cercle', [
      [0.5, 0], [0.85, 0.15], [1, 0.5], [0.85, 0.85],
      [0.5, 1], [0.15, 0.85], [0, 0.5], [0.15, 0.15], [0.5, 0]
    ]);

    // geste : Check mark
    recognizer.addGesture('check', [
      [0.1, 0.6], [0.3, 0.8], [0.7, 0.2]
    ]);
  }, [recognizer]);

  const getRelativeCoords = (event: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return [
      (event.clientX - rect.left) / rect.width,
      (event.clientY - rect.top) / rect.height
    ] as [number, number];
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDrawing.current = true;
    points.current = [getRelativeCoords(e)];
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing.current) return;
    points.current.push(getRelativeCoords(e));
    draw();
  };

  const handlePointerUp = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    const result = recognizer.recognize(points.current);
    setMessage(result ? `Geste reconnu : ${result}` : 'Geste non reconnu');
    points.current = [];
    clearCanvas();
  };

  const draw = () => {
    const ctx = canvasRef.current!.getContext('2d')!;
    const width = canvasRef.current!.width;
    const height = canvasRef.current!.height;
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    for (let i = 0; i < points.current.length; i++) {
      const [x, y] = points.current[i];
      if (i === 0) {
        ctx.moveTo(x * width, y * height);
      } else {
        ctx.lineTo(x * width, y * height);
      }
    }
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
  };

  return (
    <div className="text-center">
      <h3 className="text-lg font-medium mb-3">Fait un geste : ligne | check marck | cercle </h3>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="border border-black mx-auto"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
      <p className="mt-4 text-lg text-gray-700 font-semibold">{message}</p>
    </div>
  );
};

export default GestureCanvas;
