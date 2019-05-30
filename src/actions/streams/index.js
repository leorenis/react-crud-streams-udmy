import streamsApi from '../../apis/streams'
import history from '../../history'
import {
  STREAM_IN_EDITION,
  STREAMS_FETCHED,
  STREAM_FETCHED,
  DELETED_STREAM
} from './types'

export const saveStream = formvalues => async (dispatch, getState) => {
  const { userId } = getState().auth
  const streamToSave = { ...formvalues, userId }
  const response = !formvalues.id
    ? await streamsApi.post('/streams', streamToSave)
    : await streamsApi.put(`/streams/${formvalues.id}`, streamToSave)
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
