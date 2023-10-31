import styles from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

export default function Note({ note }) {
  return (
    <div className={styles.note}>
      <div className={styles.triangle}></div>
      <div className={styles.corner}></div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={faClipboard} style={{ marginRight: "6px" }} />
        <h2>Notiz</h2>
      </div>
      <hr />
      <span>{note}</span>
    </div>
  );
}
