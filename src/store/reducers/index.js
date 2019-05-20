import { combineReducers } from 'redux'
import * as Streams from './streams'

export default combineReducers({
    streams: Streams.createdStreamReducer
})
