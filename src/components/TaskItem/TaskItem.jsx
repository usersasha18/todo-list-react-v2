import initialTasks from '../../data/data.js'

console.log(initialTasks)

export default function TaskItem() {
  return (
    <div>
      <ul>
        {initialTasks.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
