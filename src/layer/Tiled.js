import Tile from 'ol/layer/tile';
import TileImage from 'ol/source/tileimage';
import {Utils} from '../Utils';

export class Tiled {
	constructor(layerOptions) {
		let layerUrl = Utils.cleanTilesUrl(layerOptions.urlTemplate);

		this.layer = new Tile({
			source: new TileImage({
				url: layerUrl,
			}),
		});
	};

	getOlLayer() {
		return (this.layer);
	};
	
	setVisible(visible) {
		this.layer.setVisible(visible);
	};
}