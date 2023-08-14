import { useLoaderData, Form } from "react-router-dom";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const { items } = useLoaderData();

  if (!items) {
    return <p>loading</p>;
  }

  return (
    <main>
      <div>
        <Form method="get" action="/">
          <input aria-label="search products" type="text" name="q" />
          <button type="submit">Search</button>
        </Form>
      </div>

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
      <aside>More information</aside>
    </main>
  );
}

export async function loader({ request }) {
  const ZOTERO_API_BASE_URL = "https://api.zotero.org";
  const ZOTERO_GROUP_ID = "2580211";

  console.log(request);
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("q");

  const items = await (
    await fetch(
      //`${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?start=194&limit=100` //limit
      `${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?q=${searchTerm}&tag=(P) Xcode` //search
      //`${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?tag=(P) Xcode` //tag
    )
  ).json();

  return { items };
}

export default App;
