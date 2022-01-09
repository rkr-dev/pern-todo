import React, { Fragment, useEffect, useState } from 'react'
export const ListTodos = () => {
  const [todos, setTodos] = useState([])
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const todosFromDB = await response.json()
      setTodos(todosFromDB)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getTodos()
    return () => {}
  }, [])
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
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
