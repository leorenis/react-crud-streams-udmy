import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as Streams from './streams'
import * as Auth from './auth'

export default combineReducers({
    streams: Streams.createdStreamReducer,
    auth: Auth.authenticatedGoogleReducer,
    form: formReducer
})
