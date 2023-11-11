import styles from "./Tag.module.css";
import { useNavigate } from "react-router-dom";

export default function Tag({ tag }) {
  const navigate = useNavigate();

  return (
    <li
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/?tags=${tag}`);
        }
      }}
      onClick={() => navigate(`/?tags=${tag}`)}
      className={styles.tag}
    >
      {tag}
    </li>
  );
}
