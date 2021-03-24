import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export default function factionsSlice(repository) {

    const fetchFactions = createAsyncThunk(
        'factions/fetchFactions',
        async (_, __) => {
            const data = await repository.getAll();
            return await data;
        }
    );

    const factionsSlice = createSlice({
        name: 'factions',

        initialState: {
            loading: 'idle',
            data: []
        },

        reducers: {},

        extraReducers: {
            [fetchFactions.pending]: (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            },

            [fetchFactions.fulfilled]: (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.data = action.payload;
                }
            },

            [fetchFactions.rejected]: (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                }
            }
        }
    });

    const { reducer } = factionsSlice;

    return {
        factionsReducer: reducer,
        fetchFactions
    };
};

