import React, { useContext } from 'react';
import { AliensContext } from '../context/context';

function Intro() {

	const { assets, currentScene, setCurrentScene } = useContext(AliensContext);

	const startGame = (e) => {
		setCurrentScene('game');
	};

	const isActive = currentScene === 'intro' ? 'active': '';

  return (
		<div className={isActive + ' scene intro'}>
			<img className="logo" src={assets.logo} alt="keyhero" />
			<div className="instructions">
			<p>Como jugar:</p>
			<p>Da click o Tap sobre el cañon para detener el ovni.</p>
			</div>
			<button className="button" onClick={startGame}>Iniciar</button>
		</div>
  );
}

export default Intro;
