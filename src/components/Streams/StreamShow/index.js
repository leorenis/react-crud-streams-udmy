import React from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'

import { fetchStream } from '../../../actions/streams'

class StreamShow extends React.Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  componentDidMount() {
    const { fetchStream, match } = this.props
    fetchStream(match.params.id)
    this.buildPlayer()
  }

  componentDidUpdate() {
    this.buildPlayer()
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return
    }

    const { id } = this.props.match.params
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  render() {
    const { stream } = this.props
    return stream ? (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    ) : null
  }
}
const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id]
})
export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow)
