import React, { Component } from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyC2xQEtycC3dGsUuIz6gaTNW1j6hn335HA",
  authDomain: "prima-b940d.firebaseapp.com"
})

export class LandingPage extends Component {
  state = {
    isSignedIn: false,
    UID: undefined,
    username: ''
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!!user) {
        this.setState({
          isSignedIn: true,
          UID: firebase.auth().currentUser.uid,
          username: firebase.auth().currentUser.displayName
        })
      } else {
        this.setState({
          isSignedIn: false,
          UID: undefined,
          username: ''
        })
      }
      
    })
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {this.state.username}</h1>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}