import React, { useEffect, useState } from 'react';
import './App.css';
import { IntegerComponent } from './components/integer';

function App() {
  const [integers, setIntegers] = useState([]);
  useEffect(() => {
    const fetchAndSetIntegers = async () => {
      const response = await fetch('https://zvix7nopmcsvlbommwnl3zx74y0wzsxg.lambda-url.us-east-1.on.aws/');
      const data = await response.json();
      console.log(data);
      setIntegers(data)
    }
    fetchAndSetIntegers();
}, []);
  return (
    <div className="App">
      <h1 style={{color: "white", fontFamily: "monospace", padding:"15px"}}>Random Integers</h1>
      {integers.map((integer: number, index: number) => {
        return <IntegerComponent key={index} number={integer} />
      })}
    </div>
  );
}

export default App;
