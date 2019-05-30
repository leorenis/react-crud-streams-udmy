import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../../actions/streams'

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

  render() {
    console.log(this.props)
    return <div> StreamEdit </div>
  }
}

const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id]
})

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit)
