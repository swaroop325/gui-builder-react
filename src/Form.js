import React from 'react';
import './App.css';
import ParticlesBg from 'particles-bg'
import FormGenerated from './generatedForm';

function Form() {
  return (
    <div className="App">
      <FormGenerated key="form"/>
      <ParticlesBg type="fountain" bg={true} />
    </div>
  );
}

export default Form;
