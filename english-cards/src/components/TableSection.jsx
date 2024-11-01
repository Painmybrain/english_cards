import TableRowConstruct from "./TableRowConstruct";
// import TableForm from "./TableForm";
import styles from "./TableSection.module.css";


const TableSection = () => {
  return (
    <table className={styles.table_container}>
      <thead className={styles.table_head}>
        <tr>
          <th>N</th>
          <th>P/S</th>
          <th>WORD</th>
          <th>TRANSCRIPTION</th>
          <th>TRANSLATION</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <TableRowConstruct />
    </table>
  )
}

export default TableSection;
