import React, {Component} from 'react'
import {connect} from 'react-redux'
import firebase from 'firebase'

class Header extends Component {
  render () {
    return (
      <div>
        PRIMA
        <button onClick={() => firebase.database().ref().child('todos').set(null)}>Clear All Items </button>
        <button onClick={() => firebase.auth().signOut()} >Logout </button>
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
