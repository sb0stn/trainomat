import styles from "./Tag.module.scss";
import { useNavigate } from "react-router-dom";

export default function Tag({ tag }) {
  const navigate = useNavigate();

  return (
    <span
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/?tags=${tag}`);
        }
      }}
      onClick={() => navigate(`/?tags=${tag}`)}
      className={styles.tag}
    >
      <span className="sr-only">Filtern nach <span lang="en">Tag</span>:</span>
      {tag}
    </span>
  );
}
