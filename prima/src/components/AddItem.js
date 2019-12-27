import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addToDo} from '../store/actions'
import { Button } from 'react-bootstrap';
import './style.css'

class AddItem extends Component {

  state = {
    title: "",
    importance: false,
    urgency: false
  };

  formSubmit = event => {
    const {title, urgency, importance} = this.state;
    const {addItem} = this.props;
    event.preventDefault();
    addItem({title: title, urgent: urgency ? 1 : 0, important: importance ? 1 : 0});
    this.setState({title: "", urgency: 0, importance: 0});
  };

  titleChange = event => {
    this.setState({...this.state, title: event.target.value});
  }

  urgencyChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({...this.state, urgency: value});
  }

  importanceChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({...this.state, importance: value});
  }

  renderForm = () => {
    const {title, urgency, importance} = this.state;
      return (
        <div>
          <form >
            <div className='AddItemForm'>
              <input value={title} onChange={this.titleChange} className='TitleInput' type="text"/>
              <input name="Urgency" type="checkbox" checked={this.state.urgency} onChange={this.urgencyChange} className='UrgentInput'/> Urgent
              <input name="Importance" type="checkbox" checked={this.state.importance} onChange={this.importanceChange} className='ImportantInput'/> Important
              <Button variant="primary" text = "SUBMIT" onClick={this.formSubmit} className='SubmitButton'>SUBMIT</Button>
            </div>
          </form>
        </div>
      );
  };

  render () {
    return (
      <div>{this.renderForm()}</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (todo) => {
      dispatch(addToDo(todo))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddItem)
