import streamsApi from '../../apis/streams'
import {
  STREAM_IN_EDITION,
  STREAMS_FETCHED,
  STREAM_FETCHED,
  DELETED_STREAM
} from './types'

export const saveStream = formvalues => async dispatch => {
  const response = !formvalues.id
    ? await streamsApi.post('/streams', formvalues)
    : await streamsApi.put(`/streams/${formvalues.id}`, formvalues)
  dispatch({ type: STREAM_IN_EDITION, payload: response.data })
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
