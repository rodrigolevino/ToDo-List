import styles from './header.module.css'
import toDoListLogo from '../assets/logotodo.svg'

export function Header() {
  return (
    <div className={styles.box}>
      <img className={styles.logo} src={toDoListLogo} alt="Logo do ToDoList, foguete" />
    </div>
  )
}