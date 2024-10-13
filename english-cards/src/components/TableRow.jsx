import ButtonTable from './ButtonTable';
import styles from './TableRow.module.css'

const TableRow = ({ id, english, transcription, russian, tags }) => {
  return (
    <tr className={styles.table_row}>
      <td >{id}</td>
      <td>{tags}</td>
      <td>{english}</td>
      <td>{transcription}</td>
      <td>{russian}</td>
      <td>
        <ButtonTable />
      </td>
    </tr>
  )
}

export default TableRow;