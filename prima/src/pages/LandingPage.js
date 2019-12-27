import React, { Component } from 'react'
import SignIn from '../components/SignIn';
import firebase from 'firebase'
import Home from '../components/Home';

export class LandingPage extends Component {
  state = {
    isSignedIn: firebase.auth().isSignedIn ? true : false
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!!user) {
        this.setState({
          isSignedIn: true
        })
      } else {
        this.setState({
          isSignedIn: false
        })
      }
      
    })
  }

  render() {
    return (
      <div> {this.state.isSignedIn ? <Home /> : <SignIn/>} </div>
    )
  }
}
