import React, {createContext, useState} from 'react';

export const KeyHeroContext = createContext();

const KeyHeroProvider = (props) => {

	const [isRunning, setIsRunning] = useState(false);
	const [currentScene, setCurrentScene] = useState('intro');
	const [currentLife, setCurrentLife] = useState(3);
	const [currentPoints, setCurrentPoints] = useState(0);

	return (
		<KeyHeroContext.Provider
			value={{
				isRunning,
				setIsRunning,
				currentScene,
				setCurrentScene,
				currentLife,
				setCurrentLife,
				currentPoints,
				setCurrentPoints
			}}
		>
			{props.children}
		</KeyHeroContext.Provider>
	)
}

export default KeyHeroProvider;