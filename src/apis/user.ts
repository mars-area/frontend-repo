import {
  actionCreatePending,
  actionCreateSuccess,
  actionCreateFailed,
  actionListPending,
  actionListSuccess,
  actionListFailed,
  type User
} from '@/lib/features/userSlice'
import { api } from '@/apis/userApi'

export const createUser = (data: User, onSuccess?: () => void) => async (dispatch: any) => {
  dispatch(actionCreatePending())
  try {
    const result = await api.post('/users', data)
    dispatch(actionCreateSuccess(result.data.data))
    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(actionCreateFailed(error.message))
    } else {
      dispatch(actionCreateFailed('An unknown error occurred'))
    }
  }
}

export const getListUser = () => async (dispatch: any) => {
  dispatch(actionListPending())
  try {
    const result = await api.get('/users')
    console.log('result', result.data.data)
    dispatch(actionListSuccess(result.data.data))
  } catch (error) {
    if (error instanceof Error) {
      dispatch(actionListFailed(error.message))
    } else {
      dispatch(actionListFailed('An unknown error occurred'))
    }
  }
}