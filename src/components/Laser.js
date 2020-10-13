import React, {useRef, useEffect, useContext} from 'react';
import { AliensContext } from '../context/context';
import laser from '../img/laser.png';

function Laser({id}) {

	const laserRef = useRef(null);
	const { shoot, setShoot } = useContext(AliensContext);

	useEffect(() => {
		if (shoot.hit && shoot.id === id) {
			let laserAnimation = laserRef.current.animate(
				[
					{ transform: 'translateY(-70vh)', opacity: '0' }
				],
				{
					duration: 200,
					iterations: 1,
					
				}
			);
			laserAnimation.play();
			laserAnimation.onfinish = () => {	
				setShoot({id: id, hit: false});
			}
		}
	})


	

	
  return (
		<div id={id} className="laser" ref={laserRef}>
			<img src={laser} alt='laser'/>
		</div>
  );
}

export default Laser;
