import { useLoaderData, Form, Outlet } from "react-router-dom";
import "./App.css";
import Select from "react-select";

function App() {
  const { items, libraryTags } = useLoaderData();

  if (!items) {
    return <p>loading</p>;
  }

  //TODO query tags
  const tags = libraryTags.map((tag) => {
    return { value: tag.tag, label: tag.tag };
  });

  return (
    <main>
      <div>
        <Form method="get" action="/">
          <input
            aria-label="search products"
            type="search"
            name="q"
            placeholder="Suchbegriff"
          />
          {/* TODO Headlines */}
          <Select
            name="tags"
            options={tags}
            isMulti
            placeholder="Tags"
            closeMenuOnSelect={false}
          />
          <button type="submit">Suche</button>
        </Form>
      </div>

      <Outlet />
    </main>
  );
}

export async function loader({ request }) {
  const ZOTERO_API_BASE_URL = "https://api.zotero.org";
  const ZOTERO_GROUP_ID = "2580211";

  console.log(request);
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("q");

  let searchTags = url.searchParams.getAll("tags");
  console.log(searchTags);

  let tagString = "";
  searchTags.map((tag) => (tagString += `&tag=${tag}`));
  console.log(tagString);

  const items = await (
    await fetch(
      //`${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?start=194&limit=100` //limit
      `${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?q=${searchTerm}${tagString}&limit=100` //search
      //`${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?tag=(P) Xcode` //tag
    )
  ).json();

  const libraryTags = await (
    await fetch(
      `${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/tags?limit=100`
    )
  ).json();

  return { items, libraryTags };
}

export default App;
