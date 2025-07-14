import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(async res => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(err => console.error("Failed to fetch todos:", err));
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div className="app-container">
      <h1>📝 Todo App</h1>
      <CreateTodo onAdd={fetchTodos} />
      <Todos todos={todos} onUpdate={fetchTodos} />
    </div>
  )
}

export default App
