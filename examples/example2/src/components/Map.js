import React from 'react';

export class Map extends React.Component {
	render() {
		const style = {
			display: 'inline-block',
			float: 'right',
			width: '85%',
			height: '100%',
			padding: '0',
			margin: '0',
		}

		return <div style={style} id="map"></div>
	}
}