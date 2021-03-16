export class RaidContext {
    async getChampions() {
        const data = await fetch('/api/Champions');
        return await data.json();
    }

    async getRarities() {
        const data = await fetch('/api/Rarities');
        return await data.json();
    }

    async getRoles() {
        const data = await fetch('/api/Roles');
        return await data.json();
    }

    async getAffinities() {
        const data = await fetch('/api/Affinities');
        return await data.json();
    }

    async getFactions() {
        const data = await fetch('/api/Factions');
        return await data.json();
    }

}
