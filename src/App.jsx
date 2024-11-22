import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider, useDispatch, useSelector,  } from 'react-redux'
import { store } from './redux/store'
import { addTodo } from './redux/todoSlice'

function App() {
  const todos = useSelector((state) => state.todos.todos)
  
  const dispatch = useDispatch()

  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(addTodo(todo))
    setTodo('')
  }

  return (
    <>
      {todos.map((todo) => (<p>{todo}</p>))}
      <input type="text" value={todo} onChange={handleChange}/>
      <button onClick={handleSubmit}>Add Todo</button>
    </>
  )
}

export default App
