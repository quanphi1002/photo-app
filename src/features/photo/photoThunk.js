import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchphoto = createAsyncThunk(
  'photo/fetchPhoto',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }
);
