import React, {createContext, useState} from 'react';

export const AliensContext = createContext();

const AliensProvider = (props) => {

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