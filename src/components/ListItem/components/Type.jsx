import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faBook,
  faGamepad,
  faFilm,
  faWrench,
  faFile,
  faGraduationCap,
  faHeadset,
  faScaleBalanced,
  faStar,
  faCode,
  faPalette,
  faChartLine,
  faPen,
  faPersonChalkboard,
  faVial,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../ListItem.module.css";

export default function Type({ item }) {
  const itemTypeMap = {
    webpage: { icon: faLaptop, label: "Webpage" },
    attachment: { icon: faFile, label: "Attachment" },
    videoRecording: { icon: faFilm, label: "Video Recording" },
    document: { icon: faFile, label: "Document" },
    encyclopediaArticle: { icon: faLaptop, label: "Encyclopedia" },
    note: { icon: faLaptop, label: "Note" },
    journalArticle: { icon: faLaptop, label: "Journal" },
    statute: { icon: faScaleBalanced, label: "Statute" },
    book: { icon: faBook, label: "Book" },
  };

  const itemType = itemTypeMap[item.data.itemType] || {
    icon: faFile,
    label: item.data.itemType,
  };

  return (
    <span className={styles.type}>
      <FontAwesomeIcon icon={itemType.icon} className={`${styles.icon}`} />
      {itemType.label}
    </span>
  );
}
