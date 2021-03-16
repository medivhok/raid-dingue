export class ApiContext {
    constructor(apiURL) {
        this._apiURL = (typeof apiURL == "string") ? apiURL : "/api";
    }

    async getAll() {
        const data = await fetch(this._apiURL);
        return await data.json();
    }
}