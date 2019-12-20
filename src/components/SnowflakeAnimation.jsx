import React, { useEffect, useState } from 'react';
import SnowflakeCanvas from './SnowflakeCanvas.jsx';
import { getRandomInt } from '../util.js';

function SnowflakeAnimation(props) {
  const { numSnowflakes, speedFactor, swayFactor, scaleFactor } = props;
  const [snowflakes, setSnowflakes] = useState([]);

  function generateSnowflakes(num) {
    return [...Array(num)].map(i => {
      const seed = Math.random() * (1 - 0.5) + 0.5;
      return {
        x: getRandomInt(0, window.innerWidth),
        y: getRandomInt(0, window.innerHeight),
        seed,
        radius: 0
      }
    })
  }

  function updateParams() {
    setSnowflakes(prevState => {
      return prevState.map(snowflake => {
        const fallSpeed = (snowflake.seed) * speedFactor,
              sway = snowflake.seed * swayFactor * fallSpeed,
              radius = Math.ceil(snowflake.seed * scaleFactor);
        let x = snowflake.x,
            y = snowflake.y;
            
        if(sway) x += Math.sin(y / sway);
        y += fallSpeed;

        if(y - radius > window.innerHeight) {
          y = -radius * 2;
          x = getRandomInt(0, window.innerWidth);
        }

        snowflake.x = x;
        snowflake.y = y;
        snowflake.radius = radius;
        return snowflake;
      });
    });
  }

  function animate() {
    updateParams();
  }

  useEffect(() => {
    function updateNumSnowflakes() {
      setSnowflakes(prevState => {
        const prevNum = prevState.length;
  
        if(numSnowflakes > prevNum) {
          const newSnowflakes = generateSnowflakes(numSnowflakes - prevNum);
          return [...prevState, ...newSnowflakes];
        } else if(numSnowflakes < prevNum) {
          return prevState.slice(0, numSnowflakes);
        } else {
          return prevState;
        }
      });
    }

    updateNumSnowflakes();
  }, [numSnowflakes]);

  useEffect(() => {
    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  });

  return (
    <SnowflakeCanvas snowflakes={snowflakes} />
  )

}

export default SnowflakeAnimation;