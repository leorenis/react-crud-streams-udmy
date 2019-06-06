import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStream, deleteStream } from '../../../actions/streams'
import Modal from '../../Modal'
import history from '../../../history'

class StreamDelete extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props
    fetchStream(match.params.id)
  }

  renderActions() {
    const { deleteStream, match: { params: { id } } } = this.props
    return (
      <>
        <button
          onClick={() => deleteStream(id)}
          className={'ui button negative'}
        >
          Delete
        </button>
        <Link to={'/'} className={'ui button'}>
          Cancel
        </Link>
      </>
    )
  }

  renderContent() {
    const { stream } = this.props
    const defaultMsg = 'Are you sure you want to delete '
    return stream
      ? `${defaultMsg} the stream: ${stream.title}?`
      : `${defaultMsg} this stream?`
  }

  render() {
    return (
      <Modal
        title={'Delete Stream'}
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}
const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id]
})
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete)
