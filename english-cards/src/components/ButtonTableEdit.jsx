import styles from './ButtonTable.module.css'

function ButtonTableEdit() {
  return (
    <div className={styles.buttons_container}>
      <button className={styles.edit_button}>EDIT</button>
    </div>
  )
}

export default ButtonTableEdit;