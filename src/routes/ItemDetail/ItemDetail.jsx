import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./ItemDetail.module.css";
import Tag from "./components/Tag";

function ItemDetail() {
  let { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);
  return (
    <main className={styles.main}>
      {/*       <nav>
        <Link
          onClick={() => {
            navigate(-1);
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          Zurück
        </Link>
      </nav> */}
      <h1>{state.data.title}</h1>
      <h2>Link</h2>
      <a href={state.data.url} target="_blank">
        {state.data.url}
      </a>
      <h2>Abstract</h2>
      <p>{state.data.abstractNote}</p>
      <h2>Tags</h2>
      {state.data.tags.map((tag, index) => {
        return <Tag key={index} tag={tag.tag} />;
      })}
    </main>
  );
}

export default ItemDetail;
