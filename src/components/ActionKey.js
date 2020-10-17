import React, {useRef, useState, useEffect, useContext, Fragment} from 'react';
import anime from 'animejs/lib/anime.es.js';
import { AliensContext } from '../context/context';
import Laser from './Laser';

function ActionKey({id, laserId, image, enemyId, enemyImage}) {

	const elementRef = useRef(null);
	const enemyRef = useRef(null);
	const { 
		shoot,
		setShoot, 	
		enemyActive,
		activePlayers,
		setActivePlayers,
		currentSpeed,
		setCurrentSpeed,
		setCurrentLife,
		currentPoints,
		setCurrentPoints,
		setEnemyActive
	} = useContext(AliensContext);
	const [animation, setAnimation] = useState(null);
	
	const shootEnemy = (e) => {	
		
		if (animation) {
			if (animation.direction === 'normal') {
				animation.reverse();
				setCurrentPoints(currentPoints+1);
				setShoot({id: laserId, hit: true});
	
				// Increase difficulty each 5 points
				if (currentPoints % 5 === 0) {
					setCurrentSpeed(currentSpeed-500);
				}
			}
		}
	}

	/**
	 * Sets array with active players only
	 * @param {object} player 
	 */
	const setShootInContext = (player) => {
		activePlayers.forEach((item) => {
			if (item.id === player) {
				item.state = false;
			}
		});

		setActivePlayers(activePlayers);
	}

	const updateLife = (lifes) => {
		setCurrentLife(lifes);
	}

	const animatePlayer = () => {
		anime({
			targets: elementRef.current,
			translateY: [0, 100], // from 100 to 250
			delay: 100,
			direction: 'forward',
		});
	}

	const setEnemyAnimation = () => {
		let anim = anime({
			targets: enemyRef.current,
			translateY: window.innerHeight - 280,
			duration: currentSpeed,
			update: function(anim) {
				const enemyPosition = enemyRef.current.getBoundingClientRect().top + 
					enemyRef.current.getBoundingClientRect().height;
				const playerPosition = elementRef.current.getBoundingClientRect().top;
				if (enemyPosition > playerPosition) {
					setShootInContext(elementRef.current.id);

					anim.pause();
					animatePlayer();
				}
			}
		});

		setAnimation(anim);
	}

	useEffect(() => {
		const totalActive = activePlayers.filter((item) => item.state);
		updateLife(totalActive.length);
	});

	useEffect(() => {
		if (enemyActive === enemyId) {
			setEnemyAnimation();
			setEnemyActive(null);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [enemyActive]);
	
  return (
		<Fragment>
			<div id={enemyId} ref={enemyRef} className="enemy">
				<img src={enemyImage} alt='enemy'/>
			</div>
			<div id={id} ref={elementRef} className="action-key" 
				onTouchEnd={shootEnemy} onClick={shootEnemy}>
				<img src={image} alt='key'/>
				<Laser id={laserId} />
			</div>
		</Fragment>
  );
}

export default ActionKey;
