'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type User = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type UserState = {
  isLoadingGet: boolean
  isLoadingList: boolean
  isLoadingCreate: boolean
  isLoadingUpdate: boolean
  isSuccessGet: boolean
  isSuccessList: boolean
  isSuccessCreate: boolean
  isSuccessUpdate: boolean
  isErrorGet: boolean
  isErrorList: boolean
  isErrorCreate: boolean
  isErrorUpdate: boolean
  message: string
  detailUser: User | undefined
  datas: User[] | []
};

const initialState: UserState = {
  isLoadingGet: false,
  isLoadingList: false,
  isLoadingCreate: false,
  isLoadingUpdate: false,
  isSuccessGet: false,
  isSuccessList: false,
  isSuccessCreate: false,
  isSuccessUpdate: false,
  isErrorGet: false,
  isErrorList: false,
  isErrorCreate: false,
  isErrorUpdate: false,
  message: '',
  detailUser: undefined,
  datas: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    actionCreatePending: (state) => {
      state.isLoadingCreate = true
    },
    actionCreateSuccess: (state, action: PayloadAction<User>) => {
      state.isLoadingCreate = false
      state.isSuccessCreate = true
      state.detailUser = action.payload
    },
    actionCreateFailed: (state, action: PayloadAction<string>) => {
      state.isLoadingCreate = false
      state.isErrorCreate = true
      state.message = action.payload
    },
    actionListPending: (state) => {
      state.isLoadingList = true
    },
    actionListSuccess: (state, action: PayloadAction<User[]>) => {
      state.isLoadingList = false
      state.isSuccessList = true
      state.datas = action.payload
    },
    actionListFailed: (state, action: PayloadAction<string>) => {
      state.isLoadingList = false
      state.isErrorList = true
      state.message = action.payload
    },
    actionGetPending: (state) => {
      state.isLoadingGet = true
    },
    actionGetSuccess: (state, action: PayloadAction<User>) => {
      state.isLoadingGet = false
      state.isSuccessGet = true
      state.detailUser = action.payload
    },
    actionGetFailed: (state, action: PayloadAction<string>) => {
      state.isLoadingGet = false
      state.isErrorGet = true
      state.message = action.payload
    },
    actionUpdatePending: (state) => {
      state.isLoadingUpdate = true
    },
    actionUpdateSuccess: (state, action: PayloadAction<User>) => {
      state.isLoadingUpdate = false
      state.isSuccessUpdate = true
      state.detailUser = action.payload
    },
    actionUpdateFailed: (state, action: PayloadAction<string>) => {
      state.isLoadingUpdate = false
      state.isErrorUpdate = true
      state.message = action.payload
    }
  }
})

export default userSlice.reducer

// Action
export const {
  actionCreatePending,
  actionCreateSuccess,
  actionCreateFailed,
  actionListPending,
  actionListSuccess,
  actionListFailed,
  actionGetPending,
  actionGetSuccess,
  actionGetFailed,
  actionUpdatePending,
  actionUpdateSuccess,
  actionUpdateFailed
} = userSlice.actions