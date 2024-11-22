import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector,  } from 'react-redux'
import { addTodo, removeTodo } from './redux/todoSlice'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const todos = useSelector((state) => state.todos.todos)
  
  const dispatch = useDispatch()

  const [todo, setTodo] = useState({})

  const handleChange = (e) => {
    setTodo({id: uuidv4(), task: e.target.value})
  }

  const handleSubmit = () => {
    dispatch(addTodo(todo))
    setTodo({})
  }

  const handleRemove = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <>
      {todos.map((todo) => (<div key={todo.id} style={{display: 'flex', gap: '1rem', padding: '1rem'}}><p>{todo.task}</p><button onClick={() => handleRemove(todo.id)}>X</button></div>))}
      <input type="text" value={todo.task || ''} onChange={handleChange}/>
      <button onClick={handleSubmit}>Add Todo</button>
    </>
  )
}

export default App
