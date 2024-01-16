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
    webpage: { icon: faDesktop, label: "Webpage", labelDe: "Webseite" },
    videoRecording: { icon: faFilm, label: "Video Recording", labelDe: "Video" },
    statute: { icon: faScaleBalanced, label: "Statute", labelDe: "Gesetz" },
    note: { icon: faClipboardList, label: "Note", labelDe: "Notiz" },
    journalArticle: { icon: faNewspaper, label: "Journal", labelDe: "Fachzeitschrift" },
    encyclopediaArticle: { icon: faScroll, label: "Encyclopedia", labelDe: "Enzyklopädie"  },
    document: { icon: faFile, label: "Document", labelDe: "Dokument" },
    attachment: { icon: faFile, label: "Attachment", labelDe: "Anhang" },
    book: { icon: faBook, label: "Book", labelDe: "Buch" },
    report: { icon: faNewspaper, label: "Report", labelDe: "Bericht" },
    newspaperArticle: { icon: faNewspaper, label: "Newspaper Article", labelDe: "Zeitungsartikel" },
    interview: { icon: faMicrophone, label: "Interview", labelDe: "Interview" },
    computerProgram: { icon: faCode, label: "Computer Program", labelDe: "Computerprogramm" },
    conferencePaper: { icon: faScroll, label: "Conference Paper", labelDe: "Konferenzpapier" },
    blogPost: { icon: faPenAlt, label: "Blog Post", labelDe: "Blogartikel" },
  };

  const itemType = itemTypeMap[item.data.itemType] || {
    icon: faFile,
    label: item.data.itemType,
  };

  return (
    <span className={styles.type}>
      <FontAwesomeIcon icon={itemType.icon} className={`${styles.icon}`} />
      {itemType.labelDe && windowWidth > 978 ? itemType.labelDe : null}
    </span>
  );
}
