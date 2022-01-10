import { Fragment, useEffect, useState } from 'react'
import { InputTodo } from './components/InputTodo/InputTodo'
import './App.css'
import { ListTodos } from './components/ListTodos/ListTodos'

function App() {
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
      <div className='container'>
        <InputTodo getTodos={getTodos} />
        <ListTodos getTodos={getTodos} todos={todos} />
      </div>
    </Fragment>
  )
}

export default App
