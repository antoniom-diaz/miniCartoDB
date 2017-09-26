import {Tiled} from './Tiled';
import $ from 'jQuery';

export class CartoDB extends Tiled {
	constructor(layerOptions) {
		layerOptions.urlTemplate = '';
		let tiledLayer = super(layerOptions);
		this.layer = tiledLayer.getOlLayer();
		this.updateOptions(layerOptions);
	};

	updateOptions(options) {
		let ctrl = this;

		this.session = options.session;
		this.layerData = {
			layers: [{
				type: 'mapnik',
				options: {
					sql: options.sql,
					cartocss: options.cartocss,
					cartocss_version: options.cartocss_version,
					interactivity: 'cartodb_id',
				},
			}]
		};

		$.ajax({
			type: 'POST',
			url: this.session.apiUrl + '/api/v1/map',
			data: JSON.stringify(this.layerData),
			contentType: 'application/json',
			success: response => {
				let hostLayer = response.cdn_url.http;
				let user = ctrl.session.user;
				let api = 'api/v1/map';
				let layerGroupId = response.layergroupid;
				let layerSelector = '0';
				let tileSelector = '{z}/{x}/{y}.png';

				let layerUrl = 'http://' + hostLayer + '/' + user + '/' + api + '/' + layerGroupId + '/' + layerSelector + '/' + tileSelector;

				let layerSource = ctrl.layer.getSource();
				layerSource.setUrl(layerUrl);
			}
		})
	};

	updateSQL(sqlString) {
		let newOptions = this.layerData.layers[0].options;
		newOptions.sql = sqlString;
		newOptions.session = this.session;

		this.updateOptions(newOptions);
	};
}