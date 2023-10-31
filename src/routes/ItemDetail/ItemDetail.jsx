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
      <div>
        {state.data.tags.map((tag, index) => {
          return <Tag key={index} tag={tag.tag} />;
        })}
      </div>
      <div className={styles.tableNoteContainer}>
        <table className={styles.table}>
          <tr>
            <td>Typ</td>
            <td>{state.data.itemType}</td>
          </tr>
          <tr>
            <td>Sprache</td>
            <td>{state.data.language}</td>
          </tr>
          <tr>
            <td>Author</td>
            <td>{state.data.creators && state.data.creators[0]?.name}</td>
          </tr>
          <tr>
            <td>Datum</td>
            <td>{state.data.date}</td>
          </tr>
          <tr>
            <td>Ersteller</td>
            <td>{state.meta.createdByUser?.username}</td>
          </tr>
          <tr>
            <td>Erstellt am</td>
            <td>{state.data.dateAdded}</td>
          </tr>
          <tr>
            <td>Modifiziert</td>
            <td>{state.data.dateModified}</td>
          </tr>
          <tr>
            <td>Zotero Link</td>
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
        <Note note={state.data.abstractNote}></Note>
      </div>
    </main>
  );
}

export default ItemDetail;
