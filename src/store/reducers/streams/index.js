import { STREAM_IN_EDITION } from '../../../actions/streams'

const INITIAL_STATE = {
  streamInEdition: null
}
export const createdStreamReducer = (stream = INITIAL_STATE, action) => {
  switch (action.type) {
    case STREAM_IN_EDITION:
      return {
        ...stream,
        streamInEdition: action.payload
      }
    default:
      return stream
  }
}
