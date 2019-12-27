import {todosRef} from '../../firebase/firebase'
export const FETCH_TODOS = 'FETCH_TODOS'

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo)
}

export const completeToDo = completeToDo => async dispatch => {
  todosRef.child(completeToDo).remove()
}

export const editItem = (todoItem, todoId) => async dispatch => {
  todosRef.child(todoId).set(todoItem)
}

export const fetchToDos = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    })
  })
}
