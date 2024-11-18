import {createSlice} from '@reduxjs/toolkit';
import {getAllCharactersAsync} from '../../services/charactersService';
import {RootState} from '../../configs/store';
import {CharactersListInterface} from '../../interfaces/characterInterface';

const initialState: CharactersListInterface = {
    characters: [],
    info: null,
    fetchCharactersStatus: 'pending',
};

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCharactersAsync.pending, (state) => {
                state.fetchMovieStatus = 'pending';
            })
            .addCase(getAllCharactersAsync.fulfilled, (state, action) => {
                state.characters = [...state.characters, ...action.payload.results];
                state.info = action.payload.info;
                state.fetchMovieStatus = 'fulfilled';
            })
            .addCase(getAllCharactersAsync.rejected, (state) => {
                state.fetchMovieStatus = 'rejected';
            });
    },
});

export const selectCharacters = (state: RootState) => state.characters.characters;

export default charactersSlice.reducer;
