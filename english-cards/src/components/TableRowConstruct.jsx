import data from "../components/data";
import TableRow from "./TableRow";

function TableRowConstruct() {
  return (
    <tbody>
      {data.map((cards) => {
        return (
          <TableRow key={cards.id} {...cards} />)
      })}
    </tbody>

  )
}

export default TableRowConstruct

