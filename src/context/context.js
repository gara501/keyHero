import React, {createContext, useState} from 'react';
import s1 from '../img/s1.png';
import s2 from '../img/s2.png';
import s3 from '../img/s3.png';
import s4 from '../img/s4.png';
import enem1 from '../img/enem1.png';
import enem2 from '../img/enem2.png';
import enem3 from '../img/enem3.png';
import enem4 from '../img/enem4.png';
import logo from '../img/logo.png';

export const AliensContext = createContext();

const AliensProvider = (props) => {

	const [assets, setAssets] = useState({
		s1,
		s2,
		s3,
		s4,
		enem1,
		enem2,
		enem3,
		enem4,
		logo
	});
	
	const [isRunning, setIsRunning] = useState(false);
	const [currentScene, setCurrentScene] = useState('intro');
	const [currentLife, setCurrentLife] = useState(4);
	const [currentPoints, setCurrentPoints] = useState(0);
	const [shoot, setShoot] = useState({});
	const [enemyActive, setEnemyActive] = useState(null);
	const [currentSpeed, setCurrentSpeed] = useState(8000);
	const [activePlayers, setActivePlayers] = useState([
		{id: 's1', state: true}, 
		{id: 's2', state: true},
		{id: 's3', state: true},
		{id: 's4', state: true}]);

	return (
		<AliensContext.Provider
			value={{
				assets,
				setAssets,
				isRunning,
				setIsRunning,
				currentScene,
				setCurrentScene,
				currentLife,
				setCurrentLife,
				currentPoints,
				setCurrentPoints,
				shoot,
				setShoot,
				enemyActive,
				setEnemyActive,
				currentSpeed,
				setCurrentSpeed,
				activePlayers,
				setActivePlayers
			}}
		>
			{props.children}
		</AliensContext.Provider>
	)
}

export default AliensProvider;