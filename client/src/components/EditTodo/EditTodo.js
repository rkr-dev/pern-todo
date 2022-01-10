import React, { Fragment, useState } from 'react'

export const EditTodo = ({ todo, getTodos }) => {
  const [description, setDescription] = useState(todo.description)
  const updateTodo = async (id) => {
    try {
      const body = { description }
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      getTodos()
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-secondary'
        data-bs-toggle='modal'
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className='modal fade'
        id={`id${todo.todo_id}`}
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Edit Todo
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>
            <div className='modal-body'>
              <input
                type='text'
                name=''
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger'
                data-bs-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={(id) => updateTodo(todo.todo_id)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
