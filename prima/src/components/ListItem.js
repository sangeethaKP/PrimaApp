import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeToDo} from '../store/actions';

class ListItem extends Component {
  completeClick = () => {
    const {completeToDo, todoId} = this.props;
    completeToDo(todoId);
  };
  render() {
    const{todo} = this.props;
    return (
    todo ? 
      <div>
        <h4> {todo.title} {todo.urgent} {todo.important} <span onClick={() => this.completeClick()}><u>Done</u></span></h4>
      </div>
      : 
      <div>Empty now</div>
    )
  }
}
export default connect(null, {completeToDo})(ListItem);
