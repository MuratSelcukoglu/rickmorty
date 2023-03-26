import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getCharacterdetail = createAsyncThunk(
  'characterDetail/getCharacterdetail',
  async id => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      );
      const detailResponse = await response.json();
      return detailResponse;
    } catch (error) {
      console.log('detailResponse ' + error);
    }
  },
);

const characterDetailSlice = createSlice({
  name: 'detail',
  initialState: {
    characterDetail: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCharacterdetail.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCharacterdetail.fulfilled, (state, action) => {
        state.characterDetail = action.payload;
        state.isLoading = false;
      })
      .addCase(getCharacterdetail.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default characterDetailSlice.reducer;
