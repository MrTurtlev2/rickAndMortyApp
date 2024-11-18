import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const API = 'https://rickandmortyapi.com/api';

export const getAllCharactersAsync = createAsyncThunk(
    'characters/getAllCharactersAsync', async ({page}: number) => {
        const data = await axios.get(`${API}/character?page=${page}`);
        return data.data;
    }
);
