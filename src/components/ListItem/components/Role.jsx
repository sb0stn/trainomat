export default function Role({ item }) {
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
