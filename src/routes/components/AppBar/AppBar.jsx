import logo from "../../../assets/logo.svg";
import styles from "./AppBar.module.css";
import { NavLink } from "react-router-dom";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <img className={styles.logo_svg} src={logo} alt="Logo" />
            <div className={styles.vertical_line}></div>
            <span className={styles.logo_text}>TRAINOMAT</span>
          </div>
          <span className={styles.slogan}>
            Ein Projekt des Kompetenzzentrum für digitale Barrierefreiheit
          </span>
        </div>
        <nav>
          <ol>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isActive ? styles.active : styles.link
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive, isPending }) =>
                  isActive ? styles.active : styles.link
                }
              >
                About
              </NavLink>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
}
