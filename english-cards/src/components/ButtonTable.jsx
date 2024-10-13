import styles from './ButtonTable.module.css'

function ButtonTable() {
  return (
    <div className={styles.buttons_container}>
      <button className={styles.delete_button}>DELETE</button>
      <button className={styles.edit_button}>EDIT</button>
    </div>
  )
}

export default ButtonTable;