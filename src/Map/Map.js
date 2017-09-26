import olMap from 'ol/map';
import View from 'ol/view';

export class Map {
	constructor(mapObject) {
		// Trasladar a funcion auxiliar lo del parse
		this.layersArray = [];
		this.map = new olMap({
			target: 'map',
			view: new View({
				center: JSON.parse(mapObject.center),
				zoom: mapObject.zoom,
			})
		});
	};

	addLayer(layer) {
		this.layersArray.push(layer);
		this.map.addLayer(layer.layer);
	};

	getLayers() {
		return this.layersArray;
	};

	removeLayer(layer) {
		let layerIndex = this.layersArray.indexOf(layer);
		this.layersArray.slice(layerIndex, 1);
	};
}