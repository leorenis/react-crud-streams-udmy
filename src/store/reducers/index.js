import { combineReducers } from 'redux'
import * as Streams from './streams'
import * as Auth from './auth'

export default combineReducers({
    streams: Streams.createdStreamReducer,
    auth: Auth.authenticatedGoogleReducer
})
