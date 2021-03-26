import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const addChampion = createAsyncThunk(
   'champions/addChampion',
    async (champion, _) => await repository.add(champion));

const editChampion = createAsyncThunk(
    'champions/editChampion',
    async ({
        champion,
        repository = new Repository()
    }, _) => await repository.edit(champion));

const deleteChampion = createAsyncThunk(
    'champions/deleteChampion',
    async ({
        championId,
        repository = new Repository()
    }, _) => await repository.delete(championId));

const fetchChampions = createAsyncThunk(
    'champions/fetchChampions',
    async (_, __) => await fetch('/api/Champions').then(data => data.json()));

const championsSlice = createSlice({
    name: 'champions',

    initialState: {
        loading: false,
        data: []
    },

    reducers: {},

    extraReducers: {
        [fetchChampions.pending]: (state, action) => {
            if (!state.loading) {
                state.loading = true;
            }
        },

        [fetchChampions.fulfilled]: (state, action) => {
            if (state.loading) {
                state.loading = false;
                state.data = action.payload;
            }
        },

        [fetchChampions.rejected]: (state, action) => {
            if (state.loading) {
                state.loading = false;
            }
        }
    }
});

const { reducer } = championsSlice;

export { 
    reducer as championsReducer,
    addChampion,
    editChampion,
    deleteChampion,
    fetchChampions
};
