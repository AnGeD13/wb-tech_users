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

export const getUserByID = createAsyncThunk(
  'users/getUsersByID',
  async (id: string) => {
    try {
      const response = await axios.get<User>(`${BASE_URL}/${id}`);
      return response.data;
    } catch {
      throw new Error('Failed to fetch user by id');
    }
  },
);

export const deleteUserByID = createAsyncThunk(
  'users/deleteUserByID',
  async (id: string) => {
    try {
      await axios.delete<User>(`${BASE_URL}/${id}`);
      return id;
    } catch {
      throw new Error('Failed to delete user');
    }
  },
);

interface IProps {
  users: User[];
  currentUser: User | undefined;
}

const initialState: IProps = {
  users: [],
  currentUser: undefined,
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
        state.currentUser = undefined;
      },
    );
    builder.addCase(
      getUserByID.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.currentUser = action.payload;
      },
    );
    builder.addCase(
      deleteUserByID.fulfilled,
      (state, action: PayloadAction<string>) => {
        const currentID = action.payload;
        state.users = state.users.filter(user => user.id != currentID);
        state.currentUser = undefined;
      },
    );
  },
});

export default usersSlice.reducer;
