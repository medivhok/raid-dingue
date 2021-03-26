export default class Repository {
    async getById(id) {
        return Promise.reject(new Error('repository not initialized'));
    }

    async list(_) {
        return Promise.reject(new Error('repository not initialized'));
    }

    async add(_) {
        return Promise.reject(new Error('repository not initialized'));
    }

    async edit(_) {
        return Promise.reject(new Error('repository not initialized'));
    }

    async delete(_) {
        return Promise.reject(new Error('repository not initialized'));
    }
}