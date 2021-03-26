import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Repository from './repositories/Repository';

export default function sliceBuilder(options = {}) {

    const {
        name = 'slice',
        repository = new Repository()
    } = options;

    const addItem = createAsyncThunk(
        `${name}/add`,
        async (item, _) => await repository.add(item)
    );

    const editItem = createAsyncThunk(
        `${name}/edit`,
        async (item, _) => await repository.edit(item)
    );

    const deleteItem = createAsyncThunk(
        `${name}/delete`,
        async (itemId, _) => await repository.add(itemId)
    );

    const fetchItems = createAsyncThunk(
        `${name}/fetch`,
        async (_, __) => await repository.list()
    );

    const storeSlice = createSlice({
        name,

        initialState: {
            loading: 'idle',
            data: []
        },

        reducers: {},

        extraReducers: {
            [fetchItems.pending]: (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            },

            [fetchItems.fulfilled]: (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.data = action.payload;
                }
            },

            [fetchItems.rejected]: (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    console.log('error!');
                }
            }
        }
    });

    const { actions, reducer } = storeSlice;
    
    return {
        reducer,
        actions: {
            addItem,
            editItem,
            deleteItem,
            fetchItems,
            ...actions
        }
    };
};

