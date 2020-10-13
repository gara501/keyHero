import React, {useRef, useState, useEffect, useContext, Fragment} from 'react';
import { AliensContext } from '../context/context';
import Laser from './Laser';

function ActionKey({id, laserId, image, enemyId, enemyImage}) {

	const elementRef = useRef(null);
	const enemyRef = useRef(null);
	const { 
		setShoot, 	
		enemyActive, 
		currentSpeed, 
		currentLife, 
		setCurrentLife,
		currentPoints,
		setCurrentPoints
	} = useContext(AliensContext);
	const [animation, setAnimation] = useState(null);
	
	const shootEnemy = (e) => {	
		setShoot({id: laserId, hit: true});
		
		if (animation) {
			animation.cancel();
		}
	}

	const setEnemyAnimation = () => {
		let enemyMovementAnimation = enemyRef.current.animate(
			[
				{ transform: 'translateY(60vh)', opacity: '0.5' }
			],
			{
				duration: currentSpeed,
				iterations: 1,
				easing: 'ease-in-out'
			}
		);

		enemyMovementAnimation.play();
		setAnimation(enemyMovementAnimation);

		
		enemyMovementAnimation.onfinish = (e) => {
			setCurrentLife(currentLife-1);
		}
		

		enemyMovementAnimation.oncancel = () => {	
			setCurrentPoints(currentPoints+1);
		}	
	}

	useEffect(() => {
		if (enemyActive === enemyId) {
			setEnemyAnimation();
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
