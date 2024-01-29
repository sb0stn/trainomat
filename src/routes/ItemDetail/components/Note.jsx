import styles from "./Note.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function Note({ extra }) {
  return (
    <section aria-labelledby="noteHeading" className={styles.note}>
      <div className={styles.triangle}></div>
      <div className={styles.corner}></div>
      <h2 id="noteHeading" style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
        role="presentation"
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
