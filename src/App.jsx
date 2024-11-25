import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './redux/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import { getTodos } from './apis/todoAPIs';

function App() {
  const { todos, isLoading, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [todo, setTodo] = useState({});

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleChange = (e) => {
    setTodo({ id: uuidv4(), title: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(addTodo(todo));
    setTodo({});
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  if (isLoading) return <div>...loading</div>;

  if (error) return <div>error</div>;

  return (
    <>
      <input type="text" value={todo.title || ''} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Todo</button>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ display: 'flex', gap: '1rem', padding: '1rem' }}
        >
          <p>{todo.title}</p>
          <button onClick={() => handleRemove(todo.id)}>X</button>
        </div>
      ))}
    </>
  );
}

export default App;
