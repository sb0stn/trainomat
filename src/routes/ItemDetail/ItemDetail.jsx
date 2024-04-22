import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from 'react';

import {
  faExternalLinkAlt,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ItemDetail.module.scss";
import Tag from "./components/Tag.jsx";
import Note from "./components/Note.jsx";
import DocumentInformation from "./components/DocumentInformation";
import Skeleton from "react-loading-skeleton";

function ItemDetail() {
  const { state } = useLocation();
  const [data, setData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const href = window.location.href;
      const regex = /\/items\/([A-Z0-9]+)$/;
      const id = (regex.exec(href))[1];

      
      const url = new URL(`https://api.zotero.org/groups/4624031/items/${id}`);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }

   if (state == null){
    fetchData();
   } else {
    setData(state);
   }


    // document.title = `${state.data.title} - TRAINomat`;
  }, []);

  return data == null ? <Skeleton count={10}/> : (
    <main className={styles.main}>
      <nav aria-label="Zurück">
        <a className={styles.link} href="/">
        <FontAwesomeIcon role="presentation" className={styles.icon} icon={faChevronLeft} />
        <span>Zurück</span>
        </a>
      </nav>
      <h1 lang={data.data.language} style={{ lineHeight: "1.2" }}>
        {data.data.title}
      </h1>

      <section aria-labelledby="ressourceHeading" className={styles.ressource}>
        <a
          href={data.data.url}
          target="_blank"
          className={styles.resouceHeading}
          style={{ wordBreak: "break-all" }}
        >
          <h2 id="ressourceHeading">Ressource <span className="sr-only">in Zotero</span> öffnen</h2>
          {data.data.url}
          <FontAwesomeIcon
            role="presentation"
            className={styles.icon}
            icon={faExternalLinkAlt}
          />
        </a>
      </section>

      <section aria-labelledby="description-headline">
        <h2 id="description-headline">Beschreibung</h2>
        <p lang={data.data.language}>{data.data.abstractNote}</p>
      </section>

      <section aria-labelledby="tags-headline">
        <h2 id="tags-headline">Tags</h2>
        <ul className={styles.tagsList}>
          {data.data.tags.map((tag, index) => {
            return (
              <li key={index}>
                <Tag tag={tag.tag} />
              </li>
            );
          })}
        </ul>
      </section>
      {data.data.extra && <Note extra={data.data.extra} />}

      <DocumentInformation state={data} />
    </main>
  );
}

export default ItemDetail;
