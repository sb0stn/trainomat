export default function Rating({ item }) {
  let number;
  for (const tag of item.data.tags) {
    switch (tag.tag) {
      case "(Ra) ***":
        number = 3;
        break;
      case "(Ra) **":
        number = 2;
        break;
      case "(Ra) *":
        number = 1;
        break;
    }
  }

  if (!number) {
    return;
  }

  return (
    <span className={styles.rating}>
      <FontAwesomeIcon
      role="presentation"
        icon={faStar}
        className={styles.icon}
        style={{ color: "#FFC46C" }}
      />
      {number}
    </span>
  );
}
