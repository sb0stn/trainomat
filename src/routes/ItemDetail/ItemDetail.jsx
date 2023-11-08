import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./ItemDetail.module.css";
import Tag from "./components/Tag.jsx";
import Note from "./components/Note.jsx";

function ItemDetail() {
  let { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);
  return (
    <main className={styles.main}>
      <h1 style={{ lineHeight: "100%" }}>{state.data.title}</h1>
      <div>
        <a
          href={state.data.url}
          target="_blank"
          style={{ wordBreak: "break-all" }}
        >
          {state.data.url}
        </a>
      </div>
      <p>{state.data.abstractNote}</p>
      <ul className={styles.tagsList}>
        {state.data.tags.map((tag, index) => {
          return <Tag key={index} tag={tag.tag} />;
        })}
      </ul>
      <div className={styles.tableNoteContainer}>
        <table className={styles.table}>
          <tr>
            <th>Typ</th>
            <td>{state.data.itemType}</td>
          </tr>
          <tr>
            <th>Sprache</th>
            <td>{state.data.language}</td>
          </tr>
          <tr>
            <th>Autor</th>
            <td>{state.data.creators && state.data.creators[0]?.name}</td>
          </tr>
          <tr>
            <th>Datum</th>
            <td>{state.data.date}</td>
          </tr>
          <tr>
            <th>Zotero Link</th>
            <td>
              <a
                href={state.links.alternate.href}
                target="_blank"
                style={{ wordBreak: "break-all" }}
              >
                {state.links.alternate.href}
              </a>
            </td>
          </tr>
        </table>
        {state.data.extra && <Note extra={state.data.extra}></Note>}
      </div>
    </main>
  );
}

export default ItemDetail;
