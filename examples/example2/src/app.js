import React from 'react';
import ReactDOM from 'react-dom';

import {Map} from './components/Map';
import {LayersMenu} from './components/LayersMenu';

class App extends React.Component {
	render() {
		const style = {
			display: 'inline-block',
			width: '100vw',
			height: '100vh',
		}

		return (<div style={style}>
					<LayersMenu />
					<Map />
				</div>);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));