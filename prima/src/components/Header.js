import React, {Component} from 'react'
import {connect} from 'react-redux'
import firebase from 'firebase'
import './style.css'
import { Button } from 'react-bootstrap'

class Header extends Component {
  render () {
    return (
      <div className='HeaderCotainer'>
        <h2>PriMa</h2>
        <Button className='ClearAllItemsButton' variant='outline-primary' text='SUBMIT' onClick={() => firebase.database().ref().child('todos').set(null)}>Clear All</Button>
        <Button className='LogOutButton' variant='outline-primary' text='SUBMIT' onClick={() => firebase.auth().signOut()}>Log out</Button>
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
