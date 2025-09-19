import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../api/config';

import type { User } from './types';

export const getUsers = createAsyncThunk<User[]>('users/getUsers', async () => {
  try {
    const response = await axios.get<User[]>(BASE_URL);
    return response.data;
  } catch {
    throw new Error('Failed to fetch users');
  }
});

interface IProps {
  users: User[];
}

const initialState: IProps = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      },
    );
  },
});

export default usersSlice.reducer;
