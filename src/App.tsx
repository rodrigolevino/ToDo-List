import { useState } from "react"
import { Header } from "./components/Header"
import { TaskCreater } from "./components/TaskCreater"
import { Tasks } from "./components/Tasks"
import "./global.css"
import { v4 as uuidv4 } from "uuid"

export interface TaskProps {
  content: string
  id: string
}

export function App() {
  const [tasksToAdd, setTasksToAdd] = useState<TaskProps[]>([])

  function handleAddTasks(text: string) {
    setTasksToAdd([...tasksToAdd, { content: text, id: uuidv4() }])
  }

  function removeTask(uniqueId: string) {
    const tasksWithoutDeletedOne = tasksToAdd.filter(
      (singleTask) => singleTask.id !== uniqueId
    )

    setTasksToAdd(tasksWithoutDeletedOne)
  }

  return (
    <div>
      <Header />
      <TaskCreater addFunction={handleAddTasks} />
      <Tasks allTasks={tasksToAdd} removeTask={removeTask}/>
    </div>
  )
}
