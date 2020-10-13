import React, {createContext, useState} from 'react';

export const AliensContext = createContext();

const AliensProvider = (props) => {

	const [isRunning, setIsRunning] = useState(false);
	const [currentScene, setCurrentScene] = useState('intro');
	const [currentLife, setCurrentLife] = useState(6);
	const [currentPoints, setCurrentPoints] = useState(0);
	const [shoot, setShoot] = useState({});
	const [enemyActive, setEnemyActive] = useState(null);
	const [currentSpeed, setCurrentSpeed] = useState(1000);
	const [player, setPlayer] = useState({});	

	return (
		<AliensContext.Provider
			value={{
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
				player,
				setPlayer
			}}
		>
			{props.children}
		</AliensContext.Provider>
	)
}

export default AliensProvider;