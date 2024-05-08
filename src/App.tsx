import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import newLogo from './newLogo.svg'

function App() {
  const [currentLogo, setCurrentLogo] = useState(logo );
  const handleClick=()=>{
    setCurrentLogo(currentLogo === logo ? newLogo : logo);}
  return (
    <div className="App">
      <header className="App-header">
        <img  src={currentLogo} className="App-logo" alt="logo"  onClick={handleClick}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://google.ca"
          target="_parent"
          rel="noopener noreferrer"
        >
          To google search
        </a>
      </header>
    </div>
  );
}

export default App;
