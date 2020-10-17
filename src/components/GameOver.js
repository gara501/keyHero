import React, { useContext, useRef } from 'react';
import { AliensContext } from '../context/context';
import anime from 'animejs/lib/anime.es.js';

function GameOver() {

	const ovniRef = useRef(null);

	const { 
		currentScene, assets
 	} = useContext(AliensContext);

	const startGame = (e) => {
		window.location.reload();
		return false;
	}

	anime({
		targets: ovniRef.current,
		rotate: {
			value: '+=2turn',
			duration: 1800,
			easing: 'easeInOutSine'
		},
		autoplay: true,
		loop: true
	});

	const isActive = currentScene === 'gameover' ? 'active': '';

  return (
		<div className={isActive + ' scene gameover'}>
			<h2>Game Over</h2>
			<img ref={ovniRef} src={assets.enem2} alt="aliens" />
			<button className="button" onClick={startGame}>Reiniciar</button>
		</div>
  );
}

export default GameOver;
