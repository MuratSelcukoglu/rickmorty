import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getEpisode = createAsyncThunk('episode/getEpisode', async (page) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const episodeResponse = await response.json();
    return episodeResponse;
  } catch (error) {
    console.log('episode ' + error);
  }
});

const episodeSlice = createSlice({
  name: 'allepisode',
  initialState: {
    episode: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEpisode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEpisode.fulfilled, (state, action) => {
        state.episode = action.payload;
        state.isLoading = false;
      })
      .addCase(getEpisode.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default episodeSlice.reducer;