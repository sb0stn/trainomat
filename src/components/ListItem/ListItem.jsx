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
      style={{ backgroundColor: index % 2 == 0 ? "#EEF4FA" : "#F8FAFC" }}
      className={styles.row}
    >
      <td className={styles.titleTableData}>
        <Link to={`items/${item.key}`} state={item} className={styles.link}>
          <span className={styles.title}>
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
      {/*       <td>
        <Rating item={item} />
      </td> */}
      <td>
        <Type item={item} />
      </td>
      {/*       <td>
        <Role item={item} />
      </td> */}
      {/*       <td>
        <SkillLevel item={item} />
      </td> */}
    </tr>
  );
}

export default ListItem;
