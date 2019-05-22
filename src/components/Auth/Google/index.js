import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthActions from '../../../actions/auth'

class GoogleAuth extends React.Component {
  componentDidMount() {
    const { startGoogleAuth } = this.props
    startGoogleAuth(this.onAuthChange)
  }

  onAuthChange = isSignedIn => {
    const { signIn, signOut, googleAuth } = this.props
    isSignedIn ? signIn(googleAuth.currentUser.get().getId()) : signOut()
  }

  onSignInClick = () => {
    const { googleAuth } = this.props
    googleAuth.signIn()
  }

  onSignOutClick = () => {
    const { googleAuth } = this.props
    googleAuth.signOut()
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
    const { isSignedIn } = this.props
    if (isSignedIn === null) {
      return null
    } else if (isSignedIn) {
      return this.renderAuthButtonSigOut()
    } else {
      return this.renderAuthButtonSigIn()
    }
  }

  render() {
    return this.renderAuthButton()
  }
}
const mapStateToProps = ({ auth: { isSignedIn, googleAuth } }) => ({
  isSignedIn,
  googleAuth
})
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth)
