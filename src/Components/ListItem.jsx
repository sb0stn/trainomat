function ListItem({ item, index }) {
  return (
    <tr style={{ backgroundColor: index % 2 == 0 ? "#EDEDED" : "#F5F5F5" }}>
      <td>
        <a href="www.test.de">{item.data.title}</a>
      </td>
      <td>{item.data.itemType}</td>
      <td>{item.data.date}</td>
    </tr>
  );
}

export default ListItem;
