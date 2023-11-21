import styles from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function Note({ extra }) {
  return (
    <section className={styles.note}>
      <div className={styles.triangle}></div>
      <div className={styles.corner}></div>
      <h2 style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faLightbulb}
          style={{ marginRight: "6px", width: "15px" }}
        />
        Anmerkung
      </h2>
      <hr />
      <span>{extra}</span>
    </section>
  );
}
