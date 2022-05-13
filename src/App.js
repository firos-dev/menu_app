import React from 'react';
import './App.css';
import TemplateManager from './components/Templates/TemplateManager';
import logo from "./assets/Restaurant-Logo-PNG-Photo.png"

function App() {
  const backgroundImage = "https://img.freepik.com/free-photo/silk-fabric-organza-is-light-beige_133187-33.jpg?w=2000"
  return (
    <div className="App">
      <TemplateManager backgroudColor='#ff00ff' backgroundImage={backgroundImage} logo={logo} />
    </div>
  );
}

export default App;
