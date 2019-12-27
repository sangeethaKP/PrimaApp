import React, {Component} from 'react'
import {connect} from 'react-redux'
import List from './List'
import AddItem from './AddItem'
import Header from './Header'

class Home extends Component {
  componentWillMount () {
  }

  render () {
    return (
      <div>
        <Header />
        <AddItem />
        <List />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
