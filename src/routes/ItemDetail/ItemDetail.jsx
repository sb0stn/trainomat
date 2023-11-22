import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faFile,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ItemDetail.module.css";
import Tag from "./components/Tag.jsx";
import Note from "./components/Note.jsx";

function ItemDetail() {
  let { state } = useLocation();
  let navigate = useNavigate();

  return (
    <main className={styles.main}>
      <nav aria-label="Zurück" onClick={() => navigate(-1)} tabIndex={0}>
        <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        <span>Zurück</span>
      </nav>
      <h1 style={{ lineHeight: "100%" }}>{state.data.title}</h1>

      <section aria-labelledby="ressourceHeading" className={styles.ressource}>
        <a
          href={state.data.url}
          target="_blank"
          style={{ wordBreak: "break-all" }}
        >
          <h2 id="ressourceHeading">Ressource öffnen</h2>
          {state.data.url}
          <FontAwesomeIcon
            className={styles.icon}
            icon={faExternalLinkAlt}
            aria-label="In Zotero öffnen"
          />
        </a>
      </section>

      <section aria-labelledby="description-headline">
        <h2 id="description-headline">Beschreibung</h2>
        <p>{state.data.abstractNote}</p>
      </section>

      <section aria-labelledby="tags-headline">
        <h2 id="tags-headline">Tags</h2>
        <ul className={styles.tagsList}>
          {state.data.tags.map((tag, index) => {
            return <Tag key={index} tag={tag.tag} />;
          })}
        </ul>
      </section>

      <section aria-labelledby="document-headline">
        <table className={styles.table}>
          <h2 id="document-headline">
            <FontAwesomeIcon
              icon={faFile}
              style={{ marginRight: "6px", width: "15px" }}
            />
            Dokument Informationen
          </h2>
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
      </section>

      {state.data.extra && <Note extra={state.data.extra}></Note>}
    </main>
  );
}

export default ItemDetail;
