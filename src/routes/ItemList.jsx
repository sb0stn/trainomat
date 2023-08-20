import ListItem from "../components/ListItem";
import styles from "./ItemList.module.css";
import { useQuery } from "@tanstack/react-query";

export default function SearchResults() {
  const { data: items } = useQuery(itemsQuery());

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

const itemsQuery = () => ({
  queryKey: ["items"],
  queryFn: async () => {
    const response = await fetch(
      `https://api.zotero.org/groups/2580211/items?limit=100`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const query = itemsQuery();

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
