import logo from "../../../assets/logo.svg";
import styles from "./AppBar.module.css";
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <img className={styles.logo_svg} src={logo} alt="Logo" />
        <span className={styles.logo_text}>TRAINOMAT</span>
      </div>
      <nav>
        <ol>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}
