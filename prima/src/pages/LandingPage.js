import React, { Component } from 'react'
import SignIn from '../components/SignIn';
import firebase from 'firebase'
import List from '../components/List';

export class LandingPage extends Component {
  state = {
    isSignedIn: false
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
      <div> {this.state.isSignedIn ? <List /> : <SignIn/>} </div>
    )
  }
}