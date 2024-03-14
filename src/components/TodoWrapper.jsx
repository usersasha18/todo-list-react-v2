import {useState} from 'react'
import TodoForm from "./TodoForm"

export default function TodoWrapper() {
    const [todos, setTodos] = useState([])
    const [id, setId] = useState(0)

    const addTodo = (todo) => {
        setTodos([...todos, {id: id + 1, title: todo, completed: false }])
        setId(id + 1)
    }

    const deleteTask = (id) => {
        setTodos(prevItem => prevItem.filter(todo => todo.id != id))
    }

  return (
    <div>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => (
            <div key={todo.id}>
                {todo.title}
                <button onClick={() => deleteTask(todo.id)}>delete task</button>
            </div>
        ))}
    </div>
  )
}
