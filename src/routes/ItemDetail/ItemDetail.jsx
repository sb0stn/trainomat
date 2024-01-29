import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

import {
  faExternalLinkAlt,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ItemDetail.module.scss";
import Tag from "./components/Tag.jsx";
import Note from "./components/Note.jsx";
import DocumentInformation from "./components/DocumentInformation";

function ItemDetail() {
  let { state } = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    document.title = `${state.data.title} - TRAINomat`;
  }, []);

  return (
    <main className={styles.main}>
      <nav aria-label="Zurück">
        <a className={styles.link} href="/">
        <FontAwesomeIcon role="presentation" className={styles.icon} icon={faChevronLeft} />
        <span>Zurück</span>
        </a>
      </nav>
      <h1 lang={state.data.language} style={{ lineHeight: "1.2" }}>
        {state.data.title}
      </h1>

      <section aria-labelledby="ressourceHeading" className={styles.ressource}>
        <a
          href={state.data.url}
          target="_blank"
          className={styles.resouceHeading}
          style={{ wordBreak: "break-all" }}
        >
          <h2 id="ressourceHeading">Ressource <span className="sr-only">in Zotero</span> öffnen</h2>
          {state.data.url}
          <FontAwesomeIcon
            role="presentation"
            className={styles.icon}
            icon={faExternalLinkAlt}
          />
        </a>
      </section>

      <section aria-labelledby="description-headline">
        <h2 id="description-headline">Beschreibung</h2>
        <p lang={state.data.language}>{state.data.abstractNote}</p>
      </section>

      <section aria-labelledby="tags-headline">
        <h2 id="tags-headline">Tags</h2>
        <ul className={styles.tagsList}>
          {state.data.tags.map((tag, index) => {
            return (
              <li>
                <Tag key={index} tag={tag.tag} />
              </li>
            );
          })}
        </ul>
      </section>
      {state.data.extra && <Note extra={state.data.extra} />}

      <DocumentInformation state={state} />
    </main>
  );
}

export default ItemDetail;
