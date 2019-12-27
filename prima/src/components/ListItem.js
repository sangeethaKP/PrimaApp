import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeToDo, editItem} from '../store/actions';
import { Modal, Button } from 'react-bootstrap'

class ListItem extends Component {
  state = { 
    show: false,
    title: '',
    urgent: false,
    important: false
  };

  showModal = () => {
    this.setState({...this.state, show: true})
  };

  hideModal = () => {
    const {todo} = this.props;
    this.setState({...this.state, title: todo.title, urgent: todo.urgent, important: todo.important, show: false})
  };

  completeClick = () => {
    const {completeToDo, todoId} = this.props;
    completeToDo(todoId);
  };

  editItem = () => {
    const {editItem, todoId} = this.props;
    editItem({title:this.state.title, urgent:this.state.urgent ? 1 : 0, important: this.state.important ? 1 : 0}, todoId);
    this.setState({...this.state, show: false})
  }

  titleChange = event => {
    this.setState({...this.state, title: event.target.value});
  }

  urgencyChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({...this.state, urgent: value});
  }

  importanceChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({...this.state, important: value});
  }

  componentWillMount() {
    const{todo} = this.props;
    this.setState({...this.state, title: todo.title, urgent: todo.urgent, important: todo.important})
  }

  render() {
    console.log(`re-rendering ${this.state.title}, ${this.state.urgent}, ${this.state.important}`)
    const{todo} = this.props;
    return (
    todo ? 
      <div>
        <h4> {todo.title} <span onClick={() => this.completeClick()}><u>Done</u></span> <span onClick={() => this.setState({...this.state, show:true})}><u>Edit</u></span></h4>
        <Modal show={this.state.show} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div>
              <input value={this.state.title} onChange={this.titleChange} type="text"/>
              <input name="Urgency" type="checkbox" checked={this.state.urgent} onChange={this.urgencyChange} /> Urgent
              <input name="Importance" type="checkbox" checked={this.state.important} onChange={this.importanceChange} /> Important
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.editItem}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      : 
      <div>Empty now</div>
    )
  }
}

export default connect(null, {completeToDo, editItem})(ListItem);
