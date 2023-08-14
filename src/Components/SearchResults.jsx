import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import ListItem from "./ListItem";

export default function SearchResults() {
  const { items } = useRouteLoaderData("root");

  console.log(items);

  if (!items) {
    return <p>loading</p>;
  }

  return (
    <table>
      <thead style={{ textAlign: "left" }}>
        <tr>
          <th>Titel</th>
          <th>Typ</th>
          <th>Datum</th>
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
