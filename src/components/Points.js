import React, { useContext } from 'react';
import { AliensContext } from '../context/context';

function Points() {

	const { currentPoints } = useContext(AliensContext);

  return (
		<div className="points">
			<h2>Points: {currentPoints}</h2>
		</div>
  );
}

export default Points;
