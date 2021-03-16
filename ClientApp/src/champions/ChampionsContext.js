import { ApiContext } from '../core/ApiContext';

export class ChampionsContext extends ApiContext {
    constructor(apiURL = "/api/Champions") {
        super(apiURL);
    }

    async getAll() {
        return await super.getAll();
    }

}