import React, { Fragment } from 'react'
import { EditTodo } from '../EditTodo/EditTodo'

export const ListTodos = ({ todos, getTodos }) => {
  const deleteTodo = async (id) => {
    try {
      const delTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      })
      getTodos()
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Fragment>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} getTodos={getTodos} />
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
