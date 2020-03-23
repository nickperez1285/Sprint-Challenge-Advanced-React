import React from 'react';
import logo from './logo.svg';
import './App.css';
import Players from "./components/Players.js"
import usePlayerCount from './hooks/usePlayerCount.js'


function App() {

   const storedValue = usePlayerCount('http://localhost:5000/api/players')
   console.log(storedValue)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span >
        there are 
        <p data-testid="pcount" >{storedValue}</p> players
        </span>
        <Players /> 
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
