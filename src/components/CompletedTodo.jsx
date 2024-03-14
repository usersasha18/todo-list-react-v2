function CompletedTodo({completedTodo, deleteTask, uncompleteTask}) {
  return (
    <div>
        <div>
            <ul>
                <li style={{color: 'green', textDecoration: "line-through"}}>{completedTodo.title}</li>
            </ul>
            <button onClick={() => deleteTask(completedTodo.id)}>delete task</button>
            <input type="checkbox" defaultChecked={completedTodo.completed} onChange={uncompleteTask} />
        </div>
    </div>
  )
}

export default CompletedTodo