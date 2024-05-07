import React, { useState } from 'react';

function App() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage('Veuillez entrer un nombre valide.');
    } else if (userGuess === randomNumber) {
      setMessage('Bravo ! Vous avez deviné le nombre.');
    } else if (userGuess < randomNumber) {
      setMessage('Le nombre à deviner est plus grand.');
    } else {
      setMessage('Le nombre à deviner est plus petit.');
    }
    setGuess('');
  };

  return (
      <div>
        <h1>Jeu de devinette</h1>
        <p>{message}</p>
        <form onSubmit={handleSubmit}>
          <input
              type="number"
              value={guess}
              onChange={handleChange}
              min="1"
              max="100"
              required
          />
          <button type="submit">Devinez</button>
        </form>
      </div>
  );
}

export default App;
