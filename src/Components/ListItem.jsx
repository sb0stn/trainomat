import { Link } from "react-router-dom";

function ListItem({ item, index }) {
  return (
    <tr style={{ backgroundColor: index % 2 == 0 ? "#EDEDED" : "#F5F5F5" }}>
      <td>
        <Link to={`items/${item.key}`} state={item}>
          {item.data.title
            ? item.data.title
            : item.data.nameOfAct
            ? item.data.nameOfAct
            : "Kein Titel verfügbar"}
        </Link>
      </td>
      <td>{item.data.itemType}</td>
      <td>{item.data.date}</td>
    </tr>
  );
}

export default ListItem;
