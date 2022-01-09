import { Fragment } from 'react'
import { InputTodo } from './components/InputTodo/InputTodo'
import './App.css'
import { ListTodos } from './components/ListTodos/ListTodos'

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  )
}

export default App
