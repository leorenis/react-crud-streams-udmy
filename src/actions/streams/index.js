import streamsApi from '../../apis/streams'
import history from '../../history'
import {
  STREAM_IN_EDITION,
  STREAMS_FETCHED,
  STREAM_FETCHED,
  DELETED_STREAM
} from './types'

export const createStream = formvalues => async (dispatch, getState) => {
  const { userId } = getState().auth
  const streamToSave = { ...formvalues, userId }
  const response = await streamsApi.post('/streams', streamToSave)
  dispatch({ type: STREAM_IN_EDITION, payload: response.data })
  history.push('/')
}

export const editStream = (id, formvalues) => async dispatch => {
  // Obs: Remember -> PUT always update all properties of a record. Now change to PATCH -> Update SOME properties of a record.
  const response = await streamsApi.patch(`/streams/${id}`, { ...formvalues })
  dispatch({ type: STREAM_IN_EDITION, payload: response.data })
  history.push('/')
}

export const fetchStreams = () => async dispatch => {
  const response = await streamsApi.get('streams')
  dispatch({ type: STREAMS_FETCHED, payload: response.data })
}

export const fetchStream = id => async dispatch => {
  const response = await streamsApi.get(`streams/${id}`)
  dispatch({ type: STREAM_FETCHED, payload: response.data })
}

export const deleteStream = id => async dispatch => {
  await streamsApi.delete(`streams/${id}`)
  dispatch({ type: DELETED_STREAM, payload: id })
}
