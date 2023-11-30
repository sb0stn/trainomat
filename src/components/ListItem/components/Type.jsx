import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFilm,
  faFile,
  faScaleBalanced,
  faCode,
  faDesktop,
  faClipboardList,
  faNewspaper,
  faScroll,
  faMicrophone,
  faPenAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../ListItem.module.css";
import useWindowWidth from "../../../Hooks/useWindowWidth";

export default function Type({ item }) {
  const windowWidth = useWindowWidth();

  const itemTypeMap = {
    webpage: { icon: faDesktop, label: "Webpage" },
    videoRecording: { icon: faFilm, label: "Video Recording" },
    statute: { icon: faScaleBalanced, label: "Statute" },
    note: { icon: faClipboardList, label: "Note" },
    journalArticle: { icon: faNewspaper, label: "Journal" },
    encyclopediaArticle: { icon: faScroll, label: "Encyclopedia" },
    document: { icon: faFile, label: "Document" },
    attachment: { icon: faFile, label: "Attachment" },
    book: { icon: faBook, label: "Book" },
    report: { icon: faNewspaper, label: "Report" },
    newspaperArticle: { icon: faNewspaper, label: "Newspaper Article" },
    interview: { icon: faMicrophone, label: "Interview" },
    computerProgram: { icon: faCode, label: "Computer Program" },
    conferencePaper: { icon: faScroll, label: "Conference Paper" },
    blogPost: { icon: faPenAlt, label: "Blog Post" },
  };

  //report,newspaperArticle, interview, computerProgram, conferencePaper, blogPost

  const itemType = itemTypeMap[item.data.itemType] || {
    icon: faFile,
    label: item.data.itemType,
  };

  return (
    <span className={styles.type}>
      <FontAwesomeIcon icon={itemType.icon} className={`${styles.icon}`} />
      {itemType.label && windowWidth > 978 ? itemType.label : null}
    </span>
  );
}
