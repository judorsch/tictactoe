import React, { useState } from 'react';
import { TicButton } from './components/TicButton';
import './App.css';
import {Turn} from './components/Turn';

function App():JSX.Element {
  const [turn, setTurn] = useState<string>("Player O Turn");
  return (
    <div className="App">
      <h1>Welcome to Tic-Tac-Toe!</h1>
      <p>Click on any square below to begin playing! "O"s will be going first!</p>
      <Turn text={turn}></Turn>
      <div className="tic-spaces">
        <TicButton change={setTurn} ></TicButton>
        <TicButton change={setTurn} ></TicButton>
        <TicButton change={setTurn} ></TicButton>
        <TicButton change={setTurn} ></TicButton>
        <TicButton change={setTurn} ></TicButton>
        <TicButton change={setTurn} ></TicButton>
        <TicButton change={setTurn} ></TicButton>
        <TicButton change={setTurn} ></TicButton>
        <TicButton change={setTurn} ></TicButton>
      </div>
      <p>test</p>
    </div>

  );
}

export default App;
