import styles from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

export default function Note({ extra }) {
  return (
    <div className={styles.note}>
      <div className={styles.triangle}></div>
      <div className={styles.corner}></div>
      <h2 style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={faClipboard} style={{ marginRight: "6px" }} />
        Notiz
      </h2>
      <hr />
      <span>{extra}</span>
    </div>
  );
}
