export default function SkillLevel({ item }) {
  for (const tag of item.data.tags) {
    switch (tag.tag) {
      case "(SL) Advanced":
        return (
          <span className={styles.advanced}>
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingRight: "8px" }}
            >
              <rect y="12" width="14" height="4" fill="#CE2E4A" />
              <rect y="6" width="14" height="4" fill="#CE2E4A" />
              <rect width="14" height="4" fill="#CE2E4A" />
            </svg>
            Advanced
          </span>
        );
      case "(SL) Intermediate":
        return (
          <span className={styles.intermediate}>
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingRight: "8px" }}
            >
              <rect y="6" width="14" height="4" fill="#F8E117" />
              <rect width="14" height="4" fill="#F8E117" />
            </svg>
            {window.innerWidth > 1000 ? "Intermediate" : ""}
          </span>
        );
      case "(SL) Novice":
        return (
          <span className={styles.novice}>
            <svg
              width="14"
              height="4"
              viewBox="0 0 14 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingRight: "8px" }}
            >
              <rect width="14" height="4" fill="#3AB82F" />
            </svg>
            Novice
          </span>
        );
    }
  }
}
