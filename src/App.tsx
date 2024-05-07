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
      console.log(JSON.parse(data));
      console.log(data.integers);
      console.log(JSON.parse(data.integers));
      setIntegers(data.integers)
    }
    fetchAndSetIntegers();
}, []);
  return (
    <div className="App">
      {integers.map((integer: number) => {
        return <IntegerComponent num={integer} />
      })}
    </div>
  );
}

export default App;
