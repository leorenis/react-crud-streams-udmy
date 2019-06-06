import React from 'react'
import { connect } from 'react-redux'

import { fetchStream } from '../../../actions/streams'

class StreamShow extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props
    fetchStream(match.params.id)
  }

  render() {
    const { stream } = this.props
    return stream ? (
      <div>
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
