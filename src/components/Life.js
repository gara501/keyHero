import React, { useContext } from 'react';
import { KeyHeroContext } from '../context/context';

function Life() {

	const { currentLife } = useContext(KeyHeroContext);

	const bars = [1,2,3,4,5,6];
	const barsDom = bars.map((item, index) => 
		index < currentLife ? 
			<div className="block full" key={index}></div>:
				<div className="block" key={index}></div>
	);

  return (
		<div className="life">
			{barsDom}
		</div>
  );
}

export default Life;
