function ListItem({ item, index }) {
  return <p key={index}>{item.data.title}</p>;
}

export default ListItem;
