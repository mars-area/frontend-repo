'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type UserState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  }
})

export const { setFirstName, setLastName, setEmail, setPassword } = userSlice.actions
export default userSlice.reducer