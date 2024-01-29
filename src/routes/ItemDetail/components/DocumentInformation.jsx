import styles from "../ItemDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faFile } from "@fortawesome/free-solid-svg-icons";

export default function DocumentInformation({ state }) {
  return (
    <section className={styles.table} aria-labelledby="document-headline">
      <h2 id="document-headline">
        {" "}
        <FontAwesomeIcon
        role="presentation"
          icon={faFile}
          style={{ marginRight: "6px", width: "15px" }}
        />{" "}
        Dokument Informationen
      </h2>
      <table>
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
          <td>
            {state.data.creators &&
              state.data.creators.map((creator, index) => (
                <span key={index}>
                  {creator.creatorType === "author" && creator.name}
                  {index < state.data.creators.length - 1 && ", "}
                </span>
              ))}
          </td>
        </tr>
        <tr>
          <th>Datum</th>
          <td>{state.data.date}</td>
        </tr>
        <tr>
          <th>Zotero</th>
          <td>
            <a
              className={styles.link}
              href={state.links.alternate.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span style={{ wordBreak: "break-all" }}>In Zotero öffnen</span>
              <span style={{ marginLeft: "5px" }}>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  role="presentation"
                />
              </span>
            </a>
          </td>
        </tr>
      </table>
    </section>
  );
}
