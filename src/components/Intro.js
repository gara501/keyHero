import React, { useContext } from 'react';
import { AliensContext } from '../context/context';
import logo from '../img/logo.png';

function Intro() {

	const { currentScene, setCurrentScene } = useContext(AliensContext);

	const startGame = (e) => {
		setCurrentScene('game');
	};

	const isActive = currentScene === 'intro' ? 'active': '';

  return (
		<div className={isActive + ' scene intro'}>
			<img className="logo" src={logo} alt="keyhero" />
			<button className="button" onClick={startGame}>Iniciar</button>
		</div>
  );
}

export default Intro;
