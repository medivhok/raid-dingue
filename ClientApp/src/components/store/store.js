import { configureStore } from '@reduxjs/toolkit';
import { championsReducer } from './champions/champions';

const store = configureStore({ 
    reducer: {
        champions: championsReducer
    }
});

export default store;

export {
    addChampion,
    editChampion,
    deleteChampion,
    fetchChampions,
    useChampionsStore
} from './champions/champions';

export { ApiRepository } from './repositories/repositories';

