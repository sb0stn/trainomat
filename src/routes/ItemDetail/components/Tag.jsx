import styles from "./Tag.module.css";

export default function Tag({ tag }) {
  return <span className={styles.tag}>{tag}</span>;
}
