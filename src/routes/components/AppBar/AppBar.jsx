import logo from "../../../assets/logo.svg";
import styles from "./AppBar.module.css";
import { NavLink } from "react-router-dom";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <img className={styles.logo_svg} src={logo} alt="Logo" />
          <div className={styles.logo}>
            <span className={styles.logo_text}>TRAINOMAT</span>
            <p className={styles.slogan}>
              Ein Projekt des Kompetenzzentrum für digitale Barrierefreiheit
            </p>
          </div>
        </div>
        <nav>
          <ol>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? styles.active : styles.link
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? styles.active : styles.link
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
