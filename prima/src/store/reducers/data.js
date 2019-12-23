import {FETCH_TODOS} from '../actions'

const initialState = {
  todos: {},
  userName: 'Unknown'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {...state, todos: action.payload}
    default:
      return state
  }
}
