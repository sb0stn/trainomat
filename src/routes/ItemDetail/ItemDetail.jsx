import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ItemDetail.module.css";
import Tag from "./components/Tag.jsx";
import Note from "./components/Note.jsx";
import DocumentInformation from "./components/DocumentInformation";

function ItemDetail() {
  let { state } = useLocation();
  let navigate = useNavigate();

  return (
    <main className={styles.main}>
      <nav aria-label="Zurück" onClick={() => navigate(-1)} tabIndex={0}>
        <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        <span>Zurück</span>
      </nav>
      <h1 aria-label={state.data.title} style={{ lineHeight: "100%" }}>
        {state.data.title}
      </h1>

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

      <DocumentInformation state={state} />

      {state.data.extra && <Note extra={state.data.extra} />}
    </main>
  );
}

export default ItemDetail;
