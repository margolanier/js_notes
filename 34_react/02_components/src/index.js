import React from 'react';
import { render } from 'react-dom';
import { ConcertCount } from './components/ConcertCount';

window.React = React;

render(
	<ConcertCount
		total={50}
		heatwave={20}
		rainy={10}
		goal={100}
	/>,
	document.querySelector('#react-container')
);