import { Trash } from "@phosphor-icons/react"
import styles from "./NewTask.module.css"
import CheckVetor from "../assets/checkvetor.svg"
import { useState } from "react"

interface TaskProps {
  content: string
  id: string
  handleIncreaseCompleted: (amount: number) => void
  removeTask: (uniqueId: string) => void
}

export function NewTask({
  content,
  id,
  handleIncreaseCompleted,
  removeTask,
}: TaskProps) {
  const [isComplete, setIsComplete] = useState(false)

  function changeCompleteState() {
    setIsComplete(!isComplete)

    if (isComplete) {
      handleIncreaseCompleted(-1)
    } else {
      handleIncreaseCompleted(1)
    }
  }

  function handleRemove() {
    removeTask(id)

    if (isComplete) {
      handleIncreaseCompleted(-1)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.checkBox}>
          <button
            className={
              isComplete ? styles.completedTask : styles.notCompletedTask
            }
            onClick={changeCompleteState}
          >
            <img src={CheckVetor} />
          </button>
        </div>
        <p
          className={
            isComplete ? styles.completedText : styles.notCompletedText
          }
        >
          {content}
        </p>
      </div>
      <div className={styles.trashBox} onClick={handleRemove}>
        <Trash className={styles.trash} />
      </div>
    </div>
  )
}
