import Repository from './Repository';

export default class ApiRepository extends Repository {
    #url = '/api';

    constructor(options) {
        super(options);
        this.#url = options;
    }

    async getById(itemId) {
        const data = await fetch(`${this.#url}/${itemId}`);
        return await data.json();
    }

    async list() {
        const data = await fetch(this.#url);
        return await data.json();
    }
}