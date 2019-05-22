import {
  SIGNIN_GOOGLE,
  SIGNOUT_GOOGLE,
  CHANGE_AUTH,
  START_GOOGLE_AUTH
} from '../types'

export const startGoogleAuth = authChangeCallback => dispatch => {
  window.gapi.load('client:auth2', () => {
    window.gapi.client
      .init({
        clientId:
          '1090905734118-eigdmnvhf5k2t6104g03mvpr974cdgfd.apps.googleusercontent.com',
        scope: 'email'
      })
      .then(() => {
        const auth = window.gapi.auth2.getAuthInstance()
        dispatch({ type: START_GOOGLE_AUTH, payload: auth })
        authChangeCallback(auth.isSignedIn.get())
        auth.isSignedIn.listen(authChangeCallback)
      })
  })
}

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
