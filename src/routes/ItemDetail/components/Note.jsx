import styles from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";

export default function Note({ note }) {
  return (
    <div className={styles.note}>
      <div className={styles.triangle}></div>
      <div className={styles.corner}></div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={faNoteSticky} />
        <h2>Notiz</h2>
      </div>
      <span>{note}</span>
    </div>
  );
}
