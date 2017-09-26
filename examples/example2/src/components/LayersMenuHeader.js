import React from 'react';

export class LayersMenuHeader extends React.Component {
	render() {
		const style = {
			height: '5%',
			width: '100%',
			backgroundColor: '#3F51B5',
			color: 'white',
			fontWeight: 'bold',
		}

		return (<div style={style}>
					Layers Menu
				</div>);
	}
}