import React from 'react';
import SnowflakeAnimation from './components/SnowflakeAnimation.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <SnowflakeAnimation numSnowflakes={100} speedFactor={2} swayFactor={100} scaleFactor={3} />
    </div>
  );
}

export default App;
