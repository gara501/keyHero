import React, { useContext } from 'react';
import { KeyHeroContext } from '../context/context';

function Points() {

	const { currentPoints } = useContext(KeyHeroContext);

  return (
		<div className="points">
			<h2>Points: {currentPoints}</h2>
		</div>
  );
}

export default Points;
