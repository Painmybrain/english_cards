import TableRowConstruct from "./TableRowConstruct";
import TableForm from "./TableForm";
import styles from "./TableSection.module.css";

const TableFormCondition = 0;
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
      {TableFormCondition === 0
        ? <TableRowConstruct />
        : <TableForm />
      }
    </table>
  )
}

export default TableSection;