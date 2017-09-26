import {Map} from './map/Map';
import {Tiled} from './layer/Tiled';
import {CartoDB} from './layer/CartoDB';
import {Session} from './Session';

const carto = {
	createVis(config) {
		this.map = new Map({
			center: config.center,
			zoom: config.zoom,
		});

		this.session = new Session({
				user_name: config.maps_api_config.user_name,
				maps_api_template: config.maps_api_config.maps_api_template,
			});
		

		config.layers.forEach(layer => {
			switch(layer.type) {
				case 'tiled':
				this.map.addLayer(new Tiled({
					urlTemplate: layer.options.urlTemplate,
					attribution: layer.options.attribution,
				}));
				break;
				case 'CartoDB':
				layer.options.session = this.session;
				this.map.addLayer(new CartoDB({
					sql: layer.options.sql,
					cartocss: layer.options.cartocss,
					cartocss_version: layer.options.cartocss_version,
					session: this.session,
				}));
				break;
			}
		});
	},
	updateSQL(layerIndex, sqlString) {
		this.map.getLayers()[layerIndex].updateSQL(sqlString);
	},
	setVisible(layerIndex, visible) {
		this.map.getLayers()[layerIndex].setVisible(visible);
	}
}

export function createVis(config) {
	carto.createVis(config);
} 

export function updateSQL(layerIndex, sqlString) {
	carto.updateSQL(layerIndex, sqlString);
}

export function setVisible(layerIndex, visible) {
	carto.setVisible(layerIndex, visible);
}