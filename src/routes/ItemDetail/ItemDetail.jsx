import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./ItemDetail.module.css";
import Tag from "./components/Tag.jsx";
import Note from "./components/Note.jsx";

function ItemDetail() {
  let { state } = useLocation();

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
            <th>Zotero</th>
            <td>
              <a
                href={state.links.alternate.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span style={{ wordBreak: "break-all" }}>In Zotero öffnen</span>
                <span style={{ marginLeft: "5px" }}>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    aria-label="In Zotero öffnen"
                  />
                </span>
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
