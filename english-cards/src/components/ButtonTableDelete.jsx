import styles from './ButtonTable.module.css'

function ButtonTableDelete() {
  return (
    <div className={styles.buttons_container}>
      <button className={styles.delete_button}>DELETE</button>
    </div>
  )
}

export default ButtonTableDelete;