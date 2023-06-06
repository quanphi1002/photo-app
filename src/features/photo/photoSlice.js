import { createSlice } from "@reduxjs/toolkit";
import photos from "constants/mockData";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchphoto } from "./photoThunk";

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photos: []
  },
  reducers: {
    addPhoto(state, action) {
      state.push(action.payload);
    },
    removePhoto(state, action) {
      const removeId = action.payload;
      return (state = state.filter((photo) => photo.id !== removeId));
    },
    editPhoto(state, action) {
      const newPhoto = action.payload;
      const index = state.findIndex((photo) => photo.id === newPhoto.id);
      if (index >= 0) {
        state[index] = newPhoto;
      }
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchphoto.fulfilled, (state, action) => {
        console.log(111111111,action.payload);
        state.photos = action.payload
      })
  },
});
const { actions, reducer } = photoSlice;
export const { addPhoto, removePhoto, editPhoto } = actions;
export default reducer;
