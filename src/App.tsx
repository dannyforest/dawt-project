import React, { useState } from 'react';
import './App.css';
interface LeaderboardEntry {
  number: number;
  attempts: number;
}

function App() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage('Veuillez entrer un nombre valide.');
    } else if (userGuess === randomNumber) {
      setMessage(`Bravo ! Vous avez deviné le nombre en ${attempts + 1} essais.`);
      setRandomNumber(generateRandomNumber());
      setAttempts(0);
      setLeaderboard([...leaderboard, { number: userGuess, attempts: attempts + 1 }]);
    } else if (userGuess < randomNumber) {
      setMessage('Le nombre à deviner est plus grand.');
      setAttempts(attempts + 1);
    } else {
      setMessage('Le nombre à deviner est plus petit.');
      setAttempts(attempts + 1);
    }
    setGuess('');
  };

  // Trie le leaderboard par ordre croissant du nombre d'essais
  leaderboard.sort((a, b) => a.attempts - b.attempts);

  return (
      <div>
        <h1>Jeu de devinette</h1>
        <p>{message}</p>
        <p>Nombre d'essais : {attempts}</p>
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
        <h2>Leaderboard</h2>
        <ol>
          {leaderboard.map((entry, index) => (
              <li key={index}>{`Nombre: ${entry.number}, Essais: ${entry.attempts}`}</li>
          ))}
        </ol>
      </div>
  );
}

export default App;
