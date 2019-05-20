export const STREAM_IN_EDITION = '@actionStreams/STREAM_IN_EDITION'

export const createStream = stream => {
  return { type: STREAM_IN_EDITION, payload: stream }
}
