import React from 'react';
import './App.css';
import GUIBuilder from './formBuilder';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      <GUIBuilder />
      <ParticlesBg type="fountain" bg={true} />
    </div>
  );
}

export default App;
