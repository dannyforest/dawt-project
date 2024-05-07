import React, {useState} from 'react';
import logo from './peanut-butter-chocolate-swirl-cookies-2.jpg';
import './App.css';
import anotherImage from './logo512.png';

function App() {
  const [currentImage, setCurrentImage] = useState(logo);
  const handleClick = () => {
    setCurrentImage(currentImage === logo ? anotherImage : logo);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img onClick={handleClick} src={currentImage} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://google.ca"
          target="_parent"
          rel="noopener noreferrer"
        >
          Go to google
        </a>
      </header>
    </div>
  );
}

export default App;
