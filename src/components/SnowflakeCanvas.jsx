import React, { useRef, useEffect } from 'react';

function SnowflakeCanvas(props) {
  const { snowflakes } = props;
  const canvasRef = useRef();

  function draw() {
    const canvas = canvasRef.current,
          ctx = canvas.getContext('2d'),
          width = canvas.width,
          height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#FFFFFF';

    ctx.save();
    snowflakes.forEach(snowflake => {
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
    })
  }

  useEffect(() => {
    draw();
  })

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  )
}

export default SnowflakeCanvas;