import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchStream, editStream } from '../../../actions/streams'
import StreamForm from '../StreamForm'

class StreamEdit extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      fetchStream
    } = this.props
    fetchStream(id)
  }

  onSubmit = formValues => {
    const { editStream, match } = this.props
    editStream(match.params.id, formValues)
  }

  render() {
    const { stream } = this.props
    return stream ? (
      <div>
        <h3>
          Edit a Stream
          <StreamForm
            initialValues={_.pick(stream, 'title', 'description')}
            onSubmitStream={this.onSubmit}
          />
        </h3>
      </div>
    ) : null
  }
}

const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id]
})

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit)
