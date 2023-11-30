import { Link } from "react-router-dom";
import styles from "./ListItem.module.css";
import React, { useEffect, useState } from "react";
import Type from "./components/Type.jsx";
import useIsMobile from "../../Hooks/useIsMobile";
import Rating from "./components/Rating.jsx";
import Role from "./components/Role.jsx";
import SkillLevel from "./components/SkillLevel.jsx";

function ListItem({ item, index }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = useIsMobile();

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <tr
      style={{ backgroundColor: (index % 2) - 1 == 0 ? "#ffffff" : "#F3F8FE" }}
      className={styles.row}
    >
      <td className={styles.tableData}>
        <Link to={`items/${item.key}`} state={item} className={styles.link}>
          <span className={styles.title} lang={item.data.language}>
            {item.data.title
              ? item.data.title
              : item.data.nameOfAct
              ? item.data.nameOfAct
              : "Kein Titel verfügbar"}
          </span>
        </Link>
      </td>
      <td className={styles.date}>
        <span>
          {item.data.date && isMobile
            ? item.data.date?.slice(0, 4)
            : item.data.date}
        </span>
      </td>
      <td className={styles.tableData}>
        {item.data.creators && item.data.creators.length > 0
          ? item.data.creators.map((creator, index) => (
              <span key={creator.id}>
                {creator.name
                  ? creator.name
                  : creator.firstName && creator.lastName
                  ? `${creator.firstName} ${creator.lastName}`
                  : null}
                {index < item.data.creators.length - 1 && ", "}
              </span>
            ))
          : null}
      </td>

      <td>
        <Type item={item} />
      </td>
    </tr>
  );
}

export default ListItem;
