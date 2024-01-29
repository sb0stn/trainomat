import { useState, useEffect } from "react";
import ItemList from "./components/ItemList/ItemList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

export default function Home() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.title = `TRAINomat`;
  }, []);

  return (
    <>
      <main>
      <SearchBar status={status} />
      <ItemList setStatus={setStatus} />
      </main>
    </>
  );
}
