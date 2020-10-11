import React, { useContext } from 'react';
import { KeyHeroContext } from '../context/context';
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

	const { currentScene, setCurrentScene } = useContext(KeyHeroContext);

	const isActive = currentScene === 'game' ? 'active': '';

  return (
		<div className={isActive + ' scene game'}>
			<div className="game-indicators">
				<Points />
				<Life />
			</div>
			<div className="game-container">
				<div className="side side1">
					<ActionKey id="s1" image={s1} />
				</div>
				<div className="side side2">
					<ActionKey id="s2" image={s2} />
				</div>
				<div className="side side3">
					<ActionKey id="s3" image={s3} />
				</div>
				<div className="side side4">
					<ActionKey id="s4" image={s4} />
				</div>
			</div>
		</div>
  );
}

export default Game;
