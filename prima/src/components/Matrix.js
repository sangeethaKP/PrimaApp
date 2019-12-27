import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {fetchToDos} from '../store/actions'
import List from './List'

class Matrix extends Component {
  componentWillMount () {
    this.props.listItems()
  }

  renderMatrix () {
    const {data} = this.props
    var one = {}
    var two = {}
    var three = {}
    var four = {}

    _.map(data, (value, key) => {
      if (value.urgent === 1 && value.important === 1) {
        one[key] = value
      } else if (value.urgent === 0 && value.important === 1) {
        two[key] = value
      } else if (value.urgent === 1 && value.important === 0) {
        three[key] = value
      } else {
        four[key] = value
      }
    })
    return (
      <div>
        <br />
        <div><b><u>Important and Urgent List</u></b> <List data={one} /></div>
        <br />
        <div><b><u>Important not Urgent List</u></b> <List data={two} /></div>
        <br />
        <div><b><u>Urgent and not important List</u></b> <List data={three} /></div>
        <br />
        <div><b><u>Not Important and Not Urgent List</u></b> <List data={four} /></div>
      </div>
    )
  }

  render () {
    return (
      <div>
        <div>
          {this.renderMatrix()}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listItems: () => {
      dispatch(fetchToDos())
    }
  }
}

const mapStateToProps = ({data}) => {
  return {
    data: data.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matrix)
