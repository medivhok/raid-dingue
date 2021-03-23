import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export default function championsSlice(repository) {

    const fetchChampions = createAsyncThunk(
        'champions/fetchChampions',
        async (_, __) => {
            const data = await repository.getAll();
            return await data;
        }
    );

    const championsSlice = createSlice({
        name: 'champions',

        initialState: {
            loading: 'idle',
            data: []
        },

        reducers: {},

        extraReducers: {
            [fetchChampions.pending]: (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            },

            [fetchChampions.fulfilled]: (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.data = action.payload;
                }
            },

            [fetchChampions.rejected]: (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                }
            }
        }
    });

    const { actions, reducer } = championsSlice;

    return {
        championsReducer: reducer,
        fetchChampions
    };
};

