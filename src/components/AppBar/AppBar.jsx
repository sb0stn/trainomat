import logo from "../../assets/logo.svg";
import styles from "./AppBar.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
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
                  to={"/info"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Info
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/impressum"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }

                >
                  Impressum
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/datenschutz"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Datenschutz
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/barrierefreiheit"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Barrierefreiheit
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
                  to={"/info"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  Info
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"https://gpii.de/legal/de/impressum.html"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  Impressum
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"https://gpii.de/legal/de/datenschutz.html"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  Datenschutz
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/barrierefreiheit"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  Barrierefreiheit
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
