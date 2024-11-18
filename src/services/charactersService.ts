import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const API = 'https://rickandmortyapi.com/api';

export const getAllCharactersAsync = createAsyncThunk(
    'movies/getMoviesAsync', async () => {
        const data = await axios.get(`${API}/character`);
        return data.data;
    }
);
