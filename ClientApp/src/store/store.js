import { configureStore } from '@reduxjs/toolkit';
import apiContext from './apiContext';
import championsSlice from './championsSlice';
import factionsSlice from './factionsSlice';

export default function createStore(options = {}) {
    const {
        championsRepo = apiContext('/api/Champions'),
        rolesRepo = apiContext('/api/Roles'),
        factionsRepo = apiContext('/api/Factions'),
        affinitiesRepo = apiContext('/api/Affinities'),
        raritiesRepo = apiContext('/api/Rarities'),
    } = options;

    const { championsReducer, fetchChampions } = championsSlice(championsRepo);
    const { factionsReducer, fetchFactions } = factionsSlice(factionsRepo);

    const store = configureStore({ 
        reducer: {
            champions: championsReducer,
            factions: factionsReducer
        }
    });

    return {
        store,
        fetchChampions,
        fetchFactions
    };
};
