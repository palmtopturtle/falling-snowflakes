import React, { useEffect } from 'react';
import { SnowflakeCanvas } from 'SnowflakeAnimation';

function SnowflakeAnimation(props) {
  // const { gravity } = this.props;
  const gravity = 1;

  useEffect(() => {
    
  })

  return (
    <SnowflakeCanvas gravity={gravity} />
  )

}

export default SnowflakeAnimation;