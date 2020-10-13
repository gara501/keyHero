import React, { useContext, useEffect } from 'react';
import { AliensContext } from '../context/context';
import s1 from '../img/s1.png';
import s2 from '../img/s2.png';
import s3 from '../img/s3.png';
import s4 from '../img/s4.png';
import enem1 from '../img/enem1.png';
import enem2 from '../img/enem2.png';
import enem3 from '../img/enem3.png';
import enem4 from '../img/enem4.png';
import Life from './Life';
import Points from './Points';
import ActionKey from './ActionKey';

function Game() {

	const { 
		currentScene,
		setCurrentScene,
		currentLife,
		setIsRunning,
		setEnemyActive
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
		const enemy = Math.floor(Math.random() * 4) + 1;
		setEnemyActive(`enem${enemy}`);
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
						image={s1} 
						enemyImage={enem1}
						enemyId="enem1"
					/>
				</div>
				<div className="side side2">
					<ActionKey 
						id="s2"
						laserId="l2"
						image={s2} 
						enemyImage={enem2}
						enemyId="enem2"
					/>
				</div>
				<div className="side side3">
					<ActionKey 
						id="s3"
						laserId="l3"
						image={s3} 
						enemyImage={enem3}
						enemyId="enem3"
					/>
				</div>
				<div className="side side4">
					<ActionKey 
						id="s4"
						laserId="l4"
						image={s4} 
						enemyImage={enem4}
						enemyId="enem4"
					/>
				</div>
			</div>
		</div>
  );
}

export default Game;
