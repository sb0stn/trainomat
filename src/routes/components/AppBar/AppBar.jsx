import SearchBar from "../SearchBar/SearchBar";
import logo from "../../../assets/logo.svg";
import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <img className={styles.logo_svg} src={logo} alt="Logo" />
        <span className={styles.logo_text}>TRAINOMAT</span>
      </div>
      <SearchBar className={styles.searchBar} />
    </header>
  );
}
