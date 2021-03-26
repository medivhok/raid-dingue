import { createAsyncThunk } from '@reduxjs/toolkit';
import Repository from '../repositories/Repository';
    
const addChampion = createAsyncThunk(
   'champions/addChampion',
    async ({
        champion, 
        repository = new Repository()
    }, _) => await repository.add(champion));

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
    async ({ repository = new Repository() }, _) => await repository.list());

export {
    addChampion,
    editChampion,
    deleteChampion,
    fetchChampions
};