import styles from "./Tasks.module.css"
import clipboard from "../assets/clipboard.svg"
import { NewTask } from "./NewTask"
import { TaskProps } from "../App"
import { useState } from "react"

interface tasksToAddProps {
  allTasks: TaskProps[]
  removeTask: (uniqueId: string) => void
}

export function Tasks({ allTasks, removeTask }: tasksToAddProps) {
  let haveTask = allTasks.length !== 0
  const [completedTasksNumber, setCompletedTasksNumber] = useState(0)

  function increaseCompleted(amount: number) {
    setCompletedTasksNumber(completedTasksNumber + amount)
  }

  return (
    <div className={styles.container}>
      <div className={styles.tasksBox}>
        <div className={styles.info}>
          <div className={styles.createdTasks}>
            <p>Tarefas Criadas</p> <span>{allTasks.length}</span>
          </div>
          <div className={styles.completedTasks}>
            <p>Concluídas</p>{" "}
            <span>
              {haveTask ? completedTasksNumber + " de " + allTasks.length : "0"}
            </span>
          </div>
        </div>
        <div className={haveTask ? styles.haveTaskList : styles.taskList}>
          <img src={clipboard} alt="Clipboard" />
          <div className={styles.emptyText}>
            <p className={styles.boldEmptyText}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.notBoldEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
        <div className={haveTask ? styles.tasksLocal : styles.emptyTasksLocal}>
          {allTasks.map((singleTask) => {
            return (
              <NewTask
                key={singleTask.id}
                id={singleTask.id}
                content={singleTask.content}
                handleIncreaseCompleted={increaseCompleted}
                removeTask={removeTask}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
