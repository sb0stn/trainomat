import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import styles from "./LoadNewPageIndicator.module.css";

export default function LoadNewPageIndicator({ isFetchingNextPage, pages }) {
  let resultsLoaded = pages[pages.length - 1].nextId;
  const totalResults = pages[0]?.totalResults;
  return (
    <div
      style={{ display: isFetchingNextPage ? "flex" : "none" }}
      className={styles.container}
      aria-live="polite"
    >
      <FontAwesomeIcon
        icon={faCircleNotch}
        className={`${styles.spinner} ${styles.icon}`}
      />
      <div>
        <p style={{ fontWeight: "700", color: "#04182F" }}>
          {resultsLoaded ?? totalResults} von {totalResults} Dokumente ende.
        </p>
        <p style={{ color: "#04182F95" }}>Lade mehr Dokumente</p>
      </div>
    </div>
  );
}

/* ${
        isFetchingNextPage ? "block" : "hidden"
      } */
