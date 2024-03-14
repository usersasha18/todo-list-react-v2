import {useState} from 'react'
import TodoForm from "./TodoForm"
import Todo from './Todo'
import CompletedTodo from './CompletedTodo'

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

    const completedTask = (id) => {
        setTodos(prevItem => prevItem.map(
            todo => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            }))
        }
        const uncompleteTask = (id) => {
            setTodos(prevItem => prevItem.map(
                todo => todo.id === id ? {...todo, completed: false} : todo
            ))
        }

  return (
    <div>
        <TodoForm addTodo={addTodo} />
        <h2>Задачи:</h2>
        {todos.filter(todo => !todo.completed).map((todo) => (
            <Todo key={todo.id} 
                todo={todo}
                deleteTask={() => deleteTask(todo.id)}
                completedTask={() => completedTask(todo.id)}/>
        ))}
        <h2>Выполненные задачи:</h2>
        {todos.filter(todo => todo.completed).map((completedTodo) => (
                <CompletedTodo key={completedTodo.id} 
                    completedTodo={completedTodo}
                    deleteTask={() => deleteTask(completedTodo.id)}
                    uncompleteTask={() => uncompleteTask(completedTodo.id)}/>
            ))}
    </div>
  )
}
