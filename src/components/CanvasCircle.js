import React, { useRef, useEffect } from "react";

const CanvasCircle = ({ x, y, radius, fillColor, strokeColor }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 3;
    ctx.stroke();
  }, [x, y, radius, fillColor, strokeColor]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
    />
  );
};

CanvasCircle.defaultProps = {
  x: 200,
  y: 200,
  radius: 100,
  fillColor: "lightblue",
  strokeColor: "blue",
};

export default CanvasCircle;
