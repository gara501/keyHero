import React from 'react';
import AliensProvider from './context/context';
import Game from './components/Game';
import Intro from './components/Intro';
import GameOver from './components/GameOver';

function App() {
  
  return (
    <AliensProvider>
      <div className="container">
        <Intro />
        <Game />
        <GameOver />
      </div>
    </AliensProvider>
  );
}

export default App;
