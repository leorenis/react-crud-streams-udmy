import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../../actions/streams'

class StreamList extends React.Component {
  componentDidMount() {
    const { fetchStreams } = this.props
    fetchStreams()
  }

  renderAdminButtons(stream) {
    const { currentUserId } = this.props
    if (stream.userId === currentUserId) {
      return (
        <div className={'right floated content'}>
          <button className="ui button primary">Edit</button>
          <button className={'ui button negative'}>Delete</button>
        </div>
      )
    }
  }

  renderList() {
    const { streams } = this.props
    return streams.map(stream => (
      <div className={'item'} key={stream.id}>
        {this.renderAdminButtons(stream)}
        <i className={'large middle aligned icon camera'} />
        <div className={'content'}>
          {stream.title}
          <div className={'description'}>{stream.description}</div>
        </div>
      </div>
    ))
  }

  renderCreateButton() {
    const { isSignedIn } = this.props
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to={'/streams/new'} className={'ui button primary'}>
            Create Stream
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className={'ui celled list'}>{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    )
  }
}
const mapStateToProps = ({ streams, auth }) => ({
  streams: Object.values(streams),
  currentUserId: auth.userId,
  isSignedIn: auth.isSignedIn
})
export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList)
