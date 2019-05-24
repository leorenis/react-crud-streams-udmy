import {
  STREAM_IN_EDITION,
  STREAMS_FETCHED,
  STREAM_FETCHED,
  DELETED_STREAM
} from '../../../actions/streams/types'

const INITIAL_STATE = {
  streamInEdition: null,
  all: [],
  stream: null,
  deletedStream: null
}
export const streamReducer = (stream = INITIAL_STATE, action) => {
  switch (action.type) {
    case STREAM_IN_EDITION:
      return {
        ...stream,
        streamInEdition: action.payload
      }

    case STREAMS_FETCHED:
      return {
        ...stream,
        all: action.payload
      }

    case STREAM_FETCHED:
      return {
        ...stream,
        stream: action.payload
      }

    case DELETED_STREAM:
      return {
        ...stream,
        deletedStream: action.payload
      }

    default:
      return stream
  }
}
