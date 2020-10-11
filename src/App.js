import React from 'react';
import KeyHeroProvider from './context/context';
import Game from './components/Game';
import Intro from './components/Intro';

function App() {
  return (
    <KeyHeroProvider>
    <div className="container">
      <Intro />
      <Game />
    </div>
    </KeyHeroProvider>
  );
}

export default App;
