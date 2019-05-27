import _ from 'lodash'
import {
  STREAM_IN_EDITION,
  STREAMS_FETCHED,
  STREAM_FETCHED,
  DELETED_STREAM
} from '../../../actions/streams/types'

const INITIAL_STATE = {}
export const streamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STREAMS_FETCHED:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      }

    case STREAM_IN_EDITION:
      return {
        ...state,
        [action.payload.id]: action.payload
      }

    case STREAM_FETCHED:
      return {
        ...state,
        [action.payload.id]: action.payload
      }

    case DELETED_STREAM:
      return _.omit(state, action.payload)

    default:
      return state
  }
}
