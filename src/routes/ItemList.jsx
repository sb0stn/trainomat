import { useLoaderData } from "react-router-dom";
import ListItem from "../components/ListItem";
import styles from "./ItemList.module.css";
import { useQuery } from "@tanstack/react-query";

export default function SearchResults() {
  const { q, tags } = useLoaderData();
  const { data: items } = useQuery(itemsQuery(q, tags));

  if (!items) {
    return <p>loading</p>;
  }

  console.log(items);

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

const itemsQuery = (q, tags) => ({
  queryKey: ["items", q, tags],
  queryFn: async () => {
    const url = new URL("https://api.zotero.org/groups/2580211/items");

    q && url.searchParams.append("q", q);

    tags.forEach((tag) => {
      url.searchParams.append("tag", tag);
    });

    url.searchParams.append("limit", 100);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  },
});

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const tags = url.searchParams.getAll("tags");

    console.log(q);
    console.log(tags);
    const query = itemsQuery(q, tags);

    queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query));

    return { q, tags };
  };
