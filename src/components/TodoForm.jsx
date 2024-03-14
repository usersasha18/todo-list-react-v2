import React, {useState} from 'react'


export default function TodoForm({addTodo}) {

    const [task, setTask] = useState('')

    const handleSbmit = (e) => {
        e.preventDefault()
        addTodo(task)
    }

  return (
        <form className="todo-form" onSubmit={handleSbmit}>
            <input type="text" onChange={(e) => setTask(e.target.value)} placeholder="Write a task" />
            <button type="submit">Add Task</button>
        </form>
  )
}
