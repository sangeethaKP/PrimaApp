import React, {Component} from 'react'
import _ from 'lodash'
import ListItem from './ListItem'

class List extends Component {
  renderToDo () {
    const {data} = this.props
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />
    })
    if (!_.isEmpty(toDos)) {
      return toDos
    }
    return (
      <div><h4>You have nothing to do in this category! 🎉</h4></div>
    )
  }
  render () {
    return (
      <div>
        <div>
          {this.renderToDo()}
        </div>
      </div>
    )
  }
}

export default List
