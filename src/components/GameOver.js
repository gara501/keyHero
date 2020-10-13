import React, { useContext } from 'react';
import { AliensContext } from '../context/context';

function GameOver() {

	const { 
		currentScene, 
		setCurrentScene,
		setIsRunning,
		setCurrentLife,
		setCurrentPoints
 	} = useContext(AliensContext);

	const startGame = (e) => {
		setIsRunning(true);
		setCurrentLife(6);
		setCurrentPoints(0);
		setCurrentScene('game');
	};

	const isActive = currentScene === 'gameover' ? 'active': '';

  return (
		<div className={isActive + ' scene gameover'}>
			<h2>Game Over</h2>
			<button className="button" onClick={startGame}>Reiniciar</button>
		</div>
  );
}

export default GameOver;
