import logo from "../../assets/logo.svg";
import styles from "./AppBar.module.css";
import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "../../Hooks/useIsMobile.jsx";

export default function AppBar() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo} onClick={() => navigate("/")}>
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
                  icon={faXmark}
                  className={styles.toggle_icon}
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className={styles.toggle_icon}
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
              )}
            </>
          ) : (
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
          )}
        </nav>
        {mobileMenu && (
          <div className={styles.mobileMenu}>
            <nav>
              <ol>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isActive ? styles.active : styles.link
                    }
                    onClick={() => setMobileMenu(!mobileMenu)}
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
                    onClick={() => setMobileMenu(!mobileMenu)}
                  >
                    About
                  </NavLink>
                </li>
              </ol>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
