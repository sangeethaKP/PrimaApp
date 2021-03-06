import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

export default class SignIn extends Component {
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }

  render () {
    return (
        <div><StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} /></div>
    )
  }
}
