import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddItem from './AddItem'
import Header from './Header'
import Matrix from './Matrix'

class Home extends Component {
  componentWillMount () {
  }

  render () {
    return (
      <div>
        <Header />
        <AddItem />
        <Matrix />
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
