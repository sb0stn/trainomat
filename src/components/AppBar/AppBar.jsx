import logo from "../../assets/logo.svg";
import styles from "./AppBar.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHome,
  faInfoCircle,
  faSection,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "../../Hooks/useIsMobile.jsx";

export default function AppBar() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div
          role="button"
          aria-label="Trainomat: Zum Startbildschirm navigieren"
          className={styles.logo}
          onClick={() => navigate("/")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/");
            }
          }}
          tabIndex={0}
        >
          <img className={styles.logo_svg} src={logo} alt="Logo" />
          <div className={styles.vertical_line}></div>
          <span className={styles.logo_text}>TRAINOMAT</span>
        </div>
        <span className={styles.slogan}>
          Eine Sammlung an Ressourcen zu digitaler Barrierefreiheit
        </span>
        <nav>
          {isMobile ? (
            <>
              {mobileMenu ? (
                <FontAwesomeIcon
                  aria-label="Menü schließen"
                  icon={faXmark}
                  className={styles.toggle_icon}
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
              ) : (
                <FontAwesomeIcon
                  aria-label="Menu öffnen"
                  icon={faBars}
                  className={styles.toggle_icon}
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
              )}
            </>
          ) : (
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ marginRight: "8px" }}
                  />
                  Startseite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/info"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={{ marginRight: "8px" }}
                  />
                  Info
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"https://gpii.de/legal/de/impressum.html"}
                  target="_blank"
                  className={styles.link}
                >
                  <FontAwesomeIcon
                    icon={faSection}
                    style={{ marginRight: "8px" }}
                  />
                  Impressum
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"https://gpii.de/legal/de/datenschutz.html"}
                  target="_blank"
                  className={styles.link}
                >
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{ marginRight: "8px" }}
                  />
                  Datenschutz
                </NavLink>
              </li>
              
            </ul>
          )}
        </nav>
        {mobileMenu && (
          <nav className={styles.mobileMenu}>
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ marginRight: "8px" }}
                  />
                  Startseite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/info"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={{ marginRight: "8px" }}
                  />
                  Info
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"https://gpii.de/legal/de/impressum.html"}
                  target="_blank"
                  className={styles.link}
                >
                  <FontAwesomeIcon
                    icon={faSection}
                    style={{ marginRight: "8px" }}
                  />
                  Impressum
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"https://gpii.de/legal/de/datenschutz.html"}
                  target="_blank"
                  className={styles.link}
                >
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{ marginRight: "8px" }}
                  />
                  Datenschutz
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
