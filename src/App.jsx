import { Form, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import "./App.css";
import Select from "react-select";

function App() {
  //const { items, libraryTags } = useLoaderData();

  const { data: items } = useQuery(itemsQuery());

  console.log(items);

  if (items) {
    return <p>loading</p>;
  }

  const tags = libraryTags.map((tag) => {
    return { value: tag.tag, label: tag.tag };
  });

  return (
    <main>
      <div>
        <Form method="get" action="/">
          <input
            type="search"
            aria-label="search products"
            name="q"
            placeholder="Suchbegriff eingeben"
            className="search"
          />
          {/* TODO Headlines */}
          <Select
            name="tags"
            options={tags}
            isMulti
            placeholder="Tags auswählen"
            closeMenuOnSelect={false}
            styles={{
              option: (baseStyles, state) => ({
                ...baseStyles,
                color: "black",
                backgroundColor: state.isFocused ? "#d4d4d4" : "#E6E6E6",
                borderRadius: "2px",
                padding: "2px 8px",
                width: "fit-content",
                display: "inline-block",
                margin: "2px",
              }),
              menuList: (baseStyles, state) => ({
                ...baseStyles,
                padding: "4px 8px",
              }),
            }}
          />
          <button type="submit">Suche</button>
        </Form>
      </div>

      <Outlet />
    </main>
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

/* 
export async function loader({ request }) {
  const ZOTERO_API_BASE_URL = "https://api.zotero.org";
  const ZOTERO_GROUP_ID = "2580211";

  let url = new URL(request.url);

  //If no search tearm is provided (first visit) set the term to an empty string
  let searchTerm = url.searchParams.get("q") ?? "";
  let searchTags = url.searchParams.getAll("tags");

  let tagString = "";
  searchTags.map((tag) => (tagString += `&tag=${tag}`));

  // TODO use react query
  const items = await (
    await fetch(
      `${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?q=${searchTerm}${tagString}&limit=100` //search
    )
  ).json();

  console.log(items);

  const libraryTags = await (
    await fetch(
      `${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/tags?limit=100`
    )
  ).json();

  return { items, libraryTags };
} */

export default App;
