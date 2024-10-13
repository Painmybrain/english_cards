import styles from './ButtonForm.module.css'

function ButtonForm() {
  return (
    <div className={styles.buttons_container}>
      <button className={styles.save_button}>SAVE</button>
      <button className={styles.cancel_button}>CANCEL</button>
    </div>
  )
}

export default ButtonForm;