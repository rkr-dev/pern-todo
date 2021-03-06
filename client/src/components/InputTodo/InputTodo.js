import React, { Fragment, useState } from 'react'

export const InputTodo = ({ getTodos }) => {
  const [description, setDescription] = useState('')
  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      getTodos()
      setDescription('')
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <Fragment>
      <h1 className='text-center mt-5 mb-3'>PERNTODO App</h1>
      <form className='d-flex' onSubmit={onFormSubmit}>
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </Fragment>
  )
}
