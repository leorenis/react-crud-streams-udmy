import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthActions from '../../../actions/auth'

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1090905734118-eigdmnvhf5k2t6104g03mvpr974cdgfd.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButtonSigOut() {
    return (
      <button onClick={this.onSignOutClick} className={'ui red google button'}>
        <i className={'google icon'} />
        Sign out
      </button>
    )
  }

  renderAuthButtonSigIn() {
    return (
      <button onClick={this.onSignInClick} className={'ui red google button'}>
        <i className={'google icon'} />
        Sign In with Google
      </button>
    )
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return this.renderAuthButtonSigOut()
    } else {
      return this.renderAuthButtonSigIn()
    }
  }

  render() {
    return this.renderAuthButton()
  }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, bindActionCreators(AuthActions))(GoogleAuth)
