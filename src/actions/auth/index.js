import { SIGNIN_GOOGLE, SIGNOUT_GOOGLE, CHANGE_AUTH } from '../types'

export const signIn = userId => ({
  type: SIGNIN_GOOGLE,
  payload: userId
})

export const signOut = () => ({
  type: SIGNOUT_GOOGLE
})

export const changeAuth = () => ({
  type: CHANGE_AUTH
})
