import ButtonForm from './ButtonForm';
import styles from './TableForm.module.css'

function TableForm() {
  return (
    <tbody >
      <tr className={styles.form_container}>
        <td><input type='text' placeholder='N'></input></td>
        <td><input type='text' placeholder='part of speech'></input></td>
        <td><input type='text' placeholder='english word'></input></td>
        <td><input type='text' placeholder='transcription'></input></td>
        <td><input type='text' placeholder='translation'></input></td>
        <td><ButtonForm /></td>
      </tr>
    </tbody>
  )
}

export default TableForm;