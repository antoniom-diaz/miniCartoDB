export class Utils {
	static cleanTilesUrl(url) {
		let startSubdomain = url.indexOf('{') + 1;
		let endSubdomain = url.indexOf('}');
		let subDomain = url.substring(startSubdomain, endSubdomain);

		var cleanUrl = url;

		if (subDomain.length == 1) {
			cleanUrl = cleanUrl.replace('{', '');
			cleanUrl = cleanUrl.replace('}', '');
		}

		return cleanUrl;
	}
}