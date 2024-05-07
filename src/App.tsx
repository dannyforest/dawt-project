import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [integers, setIntegers] = useState([]);
  useEffect(() => {
    const fetchAndSetIntegers = async () => {
      const response = await fetch('https://zvix7nopmcsvlbommwnl3zx74y0wzsxg.lambda-url.us-east-1.on.aws/');
      const data = await response.json();
      console.log(data);
      setIntegers(data.integers)
    }
    fetchAndSetIntegers();
}, []);
  return (
    <div className="App">
      {integers}
    </div>
  );
}

export default App;
