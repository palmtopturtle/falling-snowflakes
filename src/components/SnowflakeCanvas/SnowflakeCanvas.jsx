import React, { useRef } from 'react';
import snowflake1 from './images/snowflake1.svg';
import snowflake2 from './images/snowflake2.svg';
import snowflake3 from './images/snowflake3.svg';

function SnowflakeCanvas(props) {
  const canvasRef = useRef();

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  )
}

export default SnowflakeCanvas;