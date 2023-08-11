function ListItem({ item, index }) {
  return (
    <li style={{ listStyleType: "none" }}>
      <a href="www.test.de">{item.data.title}</a>
    </li>
  );
}

export default ListItem;
