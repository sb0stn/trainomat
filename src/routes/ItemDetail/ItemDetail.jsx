import { useLocation } from "react-router-dom";

function ItemDetail() {
  let { state } = useLocation();

  console.log(state);
  return (
    <main>
      <h1>{state.data.title}</h1>
      <h2>Link</h2>
      <a href={state.data.url} target="_blank">
        {state.data.url}
      </a>
      <h2>Abstract</h2>
      <p>{state.data.abstractNote}</p>
      <h2>Tags</h2>
      {state.data.tags.map((tag, index) => {
        return <span key={index}>{tag.tag}</span>;
      })}
    </main>
  );
}

export default ItemDetail;
