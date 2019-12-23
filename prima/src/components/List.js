import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchToDos, addToDo} from '../store/actions';
import ListItem from './ListItem';

class List extends Component {
  state = {
    formValue: ""
  };

  inputChange = event => {
    this.setState({formValue: event.target.value});
  };

  formSubmit = event => {
    const {formValue} = this.state;
    const {addItem} = this.props;
    event.preventDefault();
    addItem({title: formValue});
    this.setState({formValue: ""});
  };

  renderForm = () => {
    const {formValue} = this.state;
      return (
        <div>
          <form onSubmit={this.formSubmit}>
            <div>
              <input 
                value={formValue}
                onChange={this.inputChange}
                type="text"
              />
              <label> What Next?</label>
            </div>
          </form>
        </div>
      );
  };
  renderToDo() {
    const {data} = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div><h4>You have no more things ToDo!</h4></div>
    );
  }
  componentWillMount() {
    this.props.listItems();
  }
  render() {
    return (
      <div>
        <div>
          {this.renderForm()}
          {this.renderToDo()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem : (todo) => {
      dispatch(addToDo(todo))
    },
    listItems : () => {
      dispatch(fetchToDos())
    }
  }
}

const mapStateToProps = ({data}) => {
  return {
    data: data.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);