export default function apiContext(url) {
    return {
        async get(id) {
            const data = await fetch(`${url}/${id}`);
            return await data.json();
        },

        async getAll() {
            const response = await fetch(url);
            return await response.json();
        }
    };
};