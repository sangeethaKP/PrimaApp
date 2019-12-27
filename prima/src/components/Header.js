import React, {Component} from 'react'
import {connect} from 'react-redux'
import firebase from 'firebase'
import { Button } from 'react-bootstrap'

class Header extends Component {
  render () {
    return (
      <div>
        PRIMA 
        <br />
        <Button variant='primary' text='SUBMIT' onClick={() => firebase.database().ref().child('todos').set(null)}>Clear All</Button>
        <br />
        <Button variant='primary' text='SUBMIT' onClick={() => firebase.auth().signOut()}>Log out</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mapStateToProps = ({data}) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
