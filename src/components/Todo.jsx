function Todo({todo, deleteTask, completedTask}) {
  return (
    <div>
        <div>
            <ul>
                <li>{todo.title}</li>
            </ul>
            <button onClick={() => deleteTask(todo.id)}>delete task</button>
            <input type="checkbox" checked={todo.completed} onChange={completedTask} />
        </div>
    </div>
  )
}

export default Todo