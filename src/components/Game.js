import React, { useContext, useEffect } from 'react';
import { AliensContext } from '../context/context';
import Life from './Life';
import Points from './Points';
import ActionKey from './ActionKey';

function Game() {

	const {
		assets,
		currentScene,
		setCurrentScene,
		currentLife,
		setIsRunning,
		setEnemyActive,
		activePlayers
	} = useContext(AliensContext);
	
	const isActive = currentScene === 'game' ? 'active': '';

	useEffect(() => {
		if (isActive === 'active') {
			const interval = setInterval(() => {
				randomEnemy();
			}, 800);
			return () => clearInterval(interval);
		}
	});

	useEffect(() => {
		if (currentLife === 0) {
			setCurrentScene('gameover');
			setIsRunning(false);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentLife]);


	const randomEnemy = () => {
		const activeElements = activePlayers.filter(item => item.state);
		let randomId = 'enem1';
		console.log(activeElements, activeElements.length);
		if (activeElements.length > 0) {
			const randomEnemy = activeElements[Math.floor(Math.random() * activeElements.length)];
			randomId = randomEnemy.id.replace('s', 'enem');
		}
		setEnemyActive(randomId);
	}

  return (
		<div className={isActive + ' scene game'}>
			<div className="game-indicators">
				<Points />
				<Life />
			</div>
			<div className="game-container">
				<div className="side side1">
					<ActionKey 
						id="s1"
						laserId="l1"
						image={assets.s1} 
						enemyImage={assets.enem1}
						enemyId="enem1"
					/>
				</div>
				<div className="side side2">
					<ActionKey 
						id="s2"
						laserId="l2"
						image={assets.s2} 
						enemyImage={assets.enem2}
						enemyId="enem2"
					/>
				</div>
				<div className="side side3">
					<ActionKey 
						id="s3"
						laserId="l3"
						image={assets.s3} 
						enemyImage={assets.enem3}
						enemyId="enem3"
					/>
				</div>
				<div className="side side4">
					<ActionKey 
						id="s4"
						laserId="l4"
						image={assets.s4} 
						enemyImage={assets.enem4}
						enemyId="enem4"
					/>
				</div>
			</div>
		</div>
  );
}

export default Game;
