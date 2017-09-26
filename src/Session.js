export class Session {
	constructor(sessionObj) {
		this.user = sessionObj.user_name;
		this.apiUrl = sessionObj.maps_api_template.replace('{user}', this.user);
	}
}