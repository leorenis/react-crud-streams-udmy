import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as StreamActions from '../../../actions/streams'
import StreamForm from '../StreamForm'

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    const { createStream } = this.props
    createStream(formValues)
  }

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmitStream={this.onSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(StreamActions, dispatch)
export default connect(
  null,
  mapDispatchToProps
)(StreamCreate)
