import React from 'react';

import {LayersMenuHeader} from './LayersMenuHeader';

export class LayersMenu extends React.Component {
	render() {
		const style = {
			display: 'inline-block',
			width: '15%',
			height: '100%',
		}

		return (<div style={style}>
			<LayersMenuHeader />
			Hola
		</div>);
	}
}