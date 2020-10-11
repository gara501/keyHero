import React from 'react';

function ActionKey({id, image}) {
  return (
		<div id={id} className="action-key">
			<img src={image} alt='key'/>
		</div>
  );
}

export default ActionKey;
