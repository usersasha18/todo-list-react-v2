import TaskItem from "../TaskItem"
import initialTasks from '../../data/data.js'

export default function TaskList() {
    return (
      <>
        {initialTasks.map(item => (
            <TaskItem key={item.id} title={item.title} />
        ))}
      </>
    )
  }
  