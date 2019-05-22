import {
  SIGNIN_GOOGLE,
  SIGNOUT_GOOGLE,
  START_GOOGLE_AUTH
} from '../../../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  googleAuth: null,
  userId: null
}

export const authenticatedGoogleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_GOOGLE:
      return { ...state, isSignedIn: true, userId: action.payload }
    case SIGNOUT_GOOGLE:
      return { ...state, isSignedIn: false, userId: null }
    case START_GOOGLE_AUTH:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        googleAuth: action.payload
      }
    default:
      return state
  }
}
