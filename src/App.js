import React from 'react';
import Particles from 'react-particles-js';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'
import "./App.css"

const particlesOptions ={
  particles :{
    number:{
      value: 80,
      density:{
        enable:true,
        value_area: 800
      }
    }
  }
}
function App() {
  return (
    <div>
       <Particles className="particles" params={particlesOptions} />
      <Header />
     
      <MemeGenerator />
    </div>
  );
}

export default App;
