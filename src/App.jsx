import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://api.zotero.org/groups/2580211/items?start=194&limit=100"
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
        return <p key={index}>{item.data.title}</p>;
      })}
    </>
  );
}

export default App;
