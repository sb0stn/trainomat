import { useState, useEffect } from "react";
import "./App.css";
import ListItem from "./Components/ListItem";

function App() {
  const [data, setData] = useState();

  const ZOTERO_API_BASE_URL = "https://api.zotero.org";
  const ZOTERO_GROUP_ID = "2580211";

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          //`${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?start=194&limit=100` //limit
          //`${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?q=ios` //search
          `${ZOTERO_API_BASE_URL}/groups/${ZOTERO_GROUP_ID}/items?tag=(P) Xcode` //tag
        )
      ).json();

      console.log(data);

      setData(data);
    };

    dataFetch();
  }, []);

  if (!data) {
    return <p>loading</p>;
  }

  return (
    <>
      {data.map((item, index) => {
        return <ListItem item={item} index={index} />;
      })}
    </>
  );
}

export default App;
