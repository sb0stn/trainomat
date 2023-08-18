import { useRouteLoaderData } from "react-router-dom";
import ListItem from "./ListItem";
import styles from "./SearchResults.module.css";

export default function SearchResults() {
  const { items } = useRouteLoaderData("root");

  if (!items) {
    return <p>loading</p>;
  }

  return (
    <table className={styles.table}>
      <thead style={{ textAlign: "left" }}>
        <tr className={styles.row}>
          <th>Titel</th>
          <th>Datum</th>
          {/* <th>Rating</th> */}
          <th>Typ</th>
          {/* <th>Rolle</th> */}
          {/* <th>Skill Level</th> */}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return <ListItem item={item} index={index} key={index} />;
        })}
      </tbody>
    </table>
  );
}
