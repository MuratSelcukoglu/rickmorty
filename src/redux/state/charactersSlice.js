import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async id => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`,
    );
    const characters = await Promise.all(
      response.data.characters.map(url => axios.get(url).then(res => res.data)),
    );
    return characters;
  },
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;
