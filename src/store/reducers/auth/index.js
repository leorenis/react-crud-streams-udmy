import { SIGNIN_GOOGLE, SIGNOUT_GOOGLE } from '../../../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}

export const authenticatedGoogleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_GOOGLE:
      return { ...state, isSignedIn: true, userId: action.payload }
      case SIGNOUT_GOOGLE:
      return { ...state, isSignedIn: false, userId: null }
    default:
      return state
  }
}
