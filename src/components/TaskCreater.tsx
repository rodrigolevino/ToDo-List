import styles from "./TaskCreater.module.css"
import circlePlus from "../assets/circleplus.svg"
import { ChangeEvent, FormEvent, useState } from "react"

interface addTaskProps {
  addFunction: (text: string) => void;
}

export function TaskCreater({ addFunction }: addTaskProps) {
  const [textAreaValue, setTextAreaValue] = useState("")
  let taskTextEmpty = textAreaValue.length === 0

  function handleNewTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaValue(event.target.value)
  }

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault()

    addFunction(textAreaValue)
    setTextAreaValue("")
  }

  return (
      <form className={styles.taskform} onSubmit={handleTaskSubmit}>
        <textarea
          name="tasktext"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTextChange}
          value={textAreaValue}
          maxLength={200}
        ></textarea>
        <button disabled={taskTextEmpty}>
          Criar <img src={circlePlus} alt="Plus simble" />
        </button>
      </form>
  )
}
