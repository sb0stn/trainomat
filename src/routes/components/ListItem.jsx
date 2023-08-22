import { Link } from "react-router-dom";
import styles from "./ListItem.module.css";
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

function Type({ item }) {
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

function Rating({ item }) {
  let number;
  for (const tag of item.data.tags) {
    switch (tag.tag) {
      case "(Ra) ***":
        number = 3;
        break;
      case "(Ra) **":
        number = 2;
        break;
      case "(Ra) *":
        number = 1;
        break;
    }
  }

  if (!number) {
    return;
  }

  return (
    <span className={styles.rating}>
      <FontAwesomeIcon
        icon={faStar}
        className={styles.icon}
        style={{ color: "#FFC46C" }}
      />
      {number}
    </span>
  );
}

function Role({ item }) {
  let role;
  for (const tag of item.data.tags) {
    switch (tag.tag) {
      case "(R) Developer":
        role = { text: "Developer", icon: faCode, style: styles.developer };
        break;
      case "(R) Designer":
        role = { text: "Designer", icon: faPalette, style: styles.designer };
        break;
      case "(R) Document Author":
        role = {
          text: "Document Author",
          icon: faPen,
          style: styles.document_author,
        };
        break;
      case "(R) Manager":
        role = { text: "Manager", icon: faChartLine, style: styles.manager };
        break;
      case "(R) Speaker":
        role = {
          text: "Speaker",
          icon: faPersonChalkboard,
          style: styles.speaker,
        };
        break;
      case "(R) Tester":
        role = { text: "Tester", icon: faVial, style: styles.tester };
        break;
      case "(R) Video Editor":
        role = {
          text: "Video Editor",
          icon: faVideo,
          style: styles.video_editor,
        };
        break;
    }
  }

  if (!role) return;

  return (
    <span className={`${role.style}`}>
      <FontAwesomeIcon icon={role.icon} className={`${styles.icon}`} />
      {role.text}
    </span>
  );
}

function SkillLevel({ item }) {
  for (const tag of item.data.tags) {
    switch (tag.tag) {
      case "(SL) Advanced":
        return (
          <span className={styles.advanced}>
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingRight: "8px" }}
            >
              <rect y="12" width="14" height="4" fill="#CE2E4A" />
              <rect y="6" width="14" height="4" fill="#CE2E4A" />
              <rect width="14" height="4" fill="#CE2E4A" />
            </svg>
            Advanced
          </span>
        );
      case "(SL) Intermediate":
        return (
          <span className={styles.intermediate}>
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingRight: "8px" }}
            >
              <rect y="6" width="14" height="4" fill="#F8E117" />
              <rect width="14" height="4" fill="#F8E117" />
            </svg>
            {window.innerWidth > 1000 ? "Intermediate" : ""}
          </span>
        );
      case "(SL) Novice":
        return (
          <span className={styles.novice}>
            <svg
              width="14"
              height="4"
              viewBox="0 0 14 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingRight: "8px" }}
            >
              <rect width="14" height="4" fill="#3AB82F" />
            </svg>
            Novice
          </span>
        );
    }
  }
}

function ListItem({ item, index }) {
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
        <span>{item.data.date}</span>
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
