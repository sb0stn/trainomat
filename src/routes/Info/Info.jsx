import styles from "./Info.module.css";
import Tag from "../ItemDetail/components/Tag.jsx";
import { useEffect } from "react";

export default function Info() {
  useEffect(() => {
    document.title = `TRAINomat Info`;
  }, []);
  const tagsData = [
    { category: "A", description: "Anwendungen", id: "anwendung" },
    { category: "B", description: "Betriebssystem", id: "betriebssystem" },
    { category: "E", description: "Empfehlung", id: "empfehlung" },
    { category: "F", description: "Format", id: "format" },
    { category: "I", description: "Inhalt", id: "inhalt" },
    { category: "K", description: "Kosten", id: "kosten" },
    { category: "L", description: "Lizenz", id: "lizent" },
    { category: "M", description: "Mini-Workshop", id: "workshop" },
    {
      category: "N",
      description: "Nicht zugänglich für",
      id: "nicht-zugänglich",
    },
    {
      category: "Q",
      description: "Qualifikationsgrad",
      id: "qualifikationsgrad",
    },
    { category: "R", description: "Rolle", id: "rolle" },
    { category: "S", description: "Sprache", id: "sprache" },
    { category: "T", description: "Technologie", id: "technologie" },
    {
      category: "V",
      description: "Vielfalt der Benutzergruppen",
      id: "vielfalt-der-benutzergruppen",
    },
    {
      category: "W1",
      description: "Weiterbildungskurs CPACC",
      id: "weiterbildungskurs-cpacc",
    },
    {
      category: "W2",
      description: "Weiterbildungskurs WAS",
      id: "weiterbildungskurs-was",
    },
    { category: "Z", description: "Zertifikate", id: "zertifikate" },
  ];

  const categoriesData = {
    applications: {
      headline: "Anwendungen (A)",
      id: "anwendung",
      items: [
        { tag: "(A) Acrobat", description: "" },
        { tag: "(A) Excel", description: "" },
        { tag: "(A) InDesign", description: "" },
        { tag: "(A) Keynote", description: "" },
        { tag: "(A) LaTeX", description: "" },
        { tag: "(A) Microsoft 365", description: "" },
        { tag: "(A) Moodle", description: "" },
        { tag: "(A) Narrator", description: "" },
        { tag: "(A) Numbers", description: "" },
        { tag: "(A) OpenOffice", description: "" },
        { tag: "(A) Outlook", description: "" },
        { tag: "(A) Pages", description: "" },
        { tag: "(A) PowerPoint", description: "" },
        { tag: "(A) VoiceOver", description: "" },
        { tag: "(A) Word", description: "" },
        { tag: "(A) Xcode", description: "" },
      ],
    },
    operatingSystems: {
      headline: "Betriebssysteme (B)",
      id: "betriebssystem",
      items: [
        { tag: "(B) Android", description: "" },
        { tag: "(B) iOS", description: "" },
        { tag: "(B) Linux", description: "" },
        { tag: "(B) macOS", description: "" },
        { tag: "(B) Windows", description: "" },
      ],
    },
    recommendations: {
      headline: "Empfehlung (E)",
      id: "empfehlung",
      items: [
        {
          tag: "(E) *",
          description:
            "Einträge, die mit dem Tag „(E) *“ versehen sind, sind eine Empfehlung des Kompetenzzentrums.",
        },
      ],
    },
    format: {
      headline: "Format (F)",
      id: "format",
      items: [
        { tag: "(F) Buch", description: "" },
        { tag: "(F) Checkliste", description: "" },
        { tag: "(F) Game", description: "" },
        { tag: "(F) Onlinekurs", description: "" },
        { tag: "(F) Video", description: "" },
        { tag: "(F) Webinar", description: "" },
        { tag: "(F) Webseite", description: "" },
        { tag: "(F) Werkzeug", description: "" },
        { tag: "(F) Wiss. Paper", description: "" },
      ],
    },
    contents: {
      headline: "Inhalt (I)",
      id: "inhalt",
      items: [
        {
          tag: "(I) AT & AS",
          description: "Assistive Technologie & Adaptionsstrategien",
        },
        { tag: "(I) Barrierefreie Dokumente", description: "" },
        { tag: "(I) Barrierefreie Multimedia", description: "" },
        { tag: "(I) Barrierefreies Web", description: "" },
        {
          tag: "(I) Bewusstsein",
          description:
            "Bewusstsein für die Bedürfnisse von Menschen mit Behinderungen aufbauen. Awareness.",
        },
        {
          tag: "(I) BITV 2.0",
          description:
            "Verordnung zur Schaffung barrierefreier Informationstechnik nach dem Behindertengleichstellungsgesetz (Barrierefreie-Informationstechnik-Verordnung – BITV 2.0)",
        },
        { tag: "(I) EAA", description: "European Accessibility Act" },
        { tag: "(I) ILIAS", description: "" },
        { tag: "(I) Lehre", description: "" },
        { tag: "(I) Onlinekurs", description: "" },
        { tag: "(I) Prozesse Bf", description: "" },
        { tag: "(I) Richtlinien", description: "" },
        { tag: "(I) Screenreader", description: "" },
        { tag: "(I) Selbstbedienungsterminal", description: "" },
        { tag: "(I) Soziale Medien", description: "" },
        { tag: "(I) Tutorien", description: "" },
        { tag: "(I) UAN", description: "User Accessibility Needs" },
        { tag: "(I) Veranstaltungen", description: "" },
        { tag: "(I) Videokonferenzen", description: "" },
        { tag: "(I) Vielfalt", description: "" },
        { tag: "(I) Vorteile Barrierefreiheit", description: "" },
        { tag: "(I) WAD", description: "Web Accessibility Directive" },
        {
          tag: "(I) WCAG",
          description: "Web Content Accessibility Guidelines",
        },
        { tag: "(I) Weiterbildung", description: "" },
        { tag: "(I) Werkzeuge zur Barrierefreiheit", description: "" },
        { tag: "(I) WZG", description: "Web-Zugänglichkeits-Gesetz" },
        { tag: "(I) XR", description: "Extended reality" },
      ],
    },
    costs: {
      headline: "Kosten (K)",
      id: "kosten",
      items: [
        { tag: "(K) Gratis", description: "" },
        { tag: "(K) Kostenpflichtig", description: "" },
      ],
    },
    licenses: {
      headline: "Lizenzen (L)",
      id: "lizent",
      items: [
        { tag: "(L) kommerziell", description: "" },
        { tag: "(L) nicht kommerziell", description: "" },
        { tag: "(L) modifizierbar", description: "" },
        { tag: "(L) nicht modifizierbar", description: "" },
      ],
    },
    miniWorkshops: {
      headline: "Mini-Workshops, vertiefende Literatur (M)",
      id: "workshop",
      items: [
        { tag: "(M) Einführung", description: "" },
        { tag: "(M) Vielfalt", description: "" },
        { tag: "(M) Word", description: "" },
        { tag: "(M) PowerPoint", description: "" },
        { tag: "(M) PDF-Dokumente", description: "" },
        { tag: "(M) PDF-Formulare aus Word", description: "" },
        { tag: "(M) Multimedia", description: "" },
        { tag: "(M) Easy-Web-Check", description: "" },
        { tag: "(M) Selbstbewertung-Web", description: "" },
        { tag: "(M) Veranstaltungen", description: "" },
      ],
    },
    notAccessibleFor: {
      headline: "Nicht zugänglich für (UAN)",
      id: "nicht-zugänglich",
      items: [
        { tag: "(N) 4.2.1 WV", description: "„Witout Vision“ / Ohne Sehen" },
        {
          tag: "(N) 4.2.2 LV",
          description: "„Limited Vision“ / Eingeschränktes Sehen",
        },
        {
          tag: "(N) 4.2.3 WPC",
          description:
            "„Withot Perception of Colour“/ Eingeschränkte Farbwahrnehmung",
        },
        { tag: "(N) 4.2.4 WH", description: "„Without Hearing“/ Ohne Hören" },
        {
          tag: "(N) 4.2.5 LH",
          description: "„Limited Hearing“ / Eingeschränktes Hören",
        },
        {
          tag: "(N) 4.2.6 WCV",
          description:
            "„With no or limited vocal capability“ / Eingeschränkte Sprachfähigkeit",
        },
        {
          tag: "(N) 4.2.7 LMS",
          description:
            "„With limited manipulation or strength“ / Eingeschränkte Handreichung oder Kraft",
        },
        {
          tag: "(N) 4.2.8 LR",
          description: "„Limited Reach“ / Eingeschränkte Reichweite",
        },
        {
          tag: "(N) 4.2.9 PST",
          description:
            "„Photosensitive seizure triggers“ / Photosensitive Epilepsie",
        },
        {
          tag: "(N) 4.2.10 LC",
          description:
            "„Limited Cognition“ / Eingeschränkte kognitive Fähigkeiten",
        },
      ],
    },

    qualifications: {
      headline: "Qualifikationsgrad (Q)",
      id: "qualifikationsgrad",
      items: [
        { tag: "(Q) Einstieg", description: "" },
        { tag: "(Q) Fortgeschritten", description: "" },
      ],
    },
    roles: {
      headline: "Rolle (R)",
      id: "rolle",
      items: [
        { tag: "(R) Design", description: "" },
        { tag: "(R) Dokumentbearbeitung", description: "" },
        { tag: "(R) Entwicklung", description: "" },
        { tag: "(R) Lehre", description: "" },
        { tag: "(R) Management", description: "" },
        { tag: "(R) Test", description: "" },
        { tag: "(R) Videobearbeitung", description: "" },
        { tag: "(R) Vortrag", description: "" },
      ],
    },
    language: {
      headline: "Sprache (S)",
      id: "sprache",
      items: [
        { tag: "(S) de", description: "Deutsch" },
        { tag: "(S) de-LS", description: "Deutsch – Leichte Sprache" },
        { tag: "(S) en", description: "Englisch" },
      ],
    },
    technology: {
      headline: "Technologie (T)",
      id: "technologie",
      items: [
        { tag: "(T) ARIA", description: "" },
        { tag: "(T) CSS", description: "" },
        { tag: "(T) HTML", description: "" },
        { tag: "(T) Java", description: "" },
        { tag: "(T) JavaScript", description: "" },
        { tag: "(T) Kotlin", description: "" },
        { tag: "(T) PDF", description: "" },
        { tag: "(T) SVG", description: "" },
        { tag: "(T) Swift", description: "" },
        { tag: "(T) WebVTT", description: "" },
      ],
    },
    userGroups: {
      headline: "Vielfalt der Benutzergruppen (V)",
      id: "vielfalt-der-benutzergruppen",
      items: [
        { tag: "(V) 4.2.1 OhneSehen", description: "Ohne Sehen" },
        { tag: "(V) 4.2.2 EingSehen", description: "Eingeschränktes Sehen" },
        {
          tag: "(V) 4.2.3 OhneFarbwahrnehmung",
          description: "Ohne Farbwahrnehmung",
        },
        { tag: "(V) 4.2.4 OhneHoeren", description: "Ohne Hören" },
        { tag: "(V) 4.2.5 EingHoeren", description: "Eingeschränktes Hören" },
        { tag: "(V) 4.2.6 OhneSprechen", description: "Ohne Sprechen" },
        {
          tag: "(V) 4.2.7 EingHandhabungKraft",
          description: "Eingeschränkte Hanhabung oder Kraft",
        },
        {
          tag: "(V) 4.2.8 EingReichweite",
          description: "Eingeschränkte Reichweite",
        },
        {
          tag: "(V) 4.2.9 OhneFotoAnfaelle",
          description: "Ohne Fotosensitive Anfälle",
        },
        {
          tag: "(V) 4.2.10 EingKognition",
          description: "Eingeschränkte kognitive Fähigkeiten",
        },
        {
          tag: "(V) EingFortbewegung",
          description: "Eingeschränkte Fortbewegung",
        },
        {
          tag: "(V) EingGleichgewicht",
          description: "Eingeschränktes Gleichgewicht",
        },
        {
          tag: "(V) EingRaumlWahrnehmung",
          description: "Eingeschränkte räumliche Wahrnehmung",
        },
        { tag: "(V) ChronKrank", description: "Chronische Krankheiten" },
        {
          tag: "(V) OhneHoerenOhneSehen",
          description: "Ohne Hören und ohne Sehen",
        },
      ],
    },
    cpaccCourse: {
      headline: "Weiterbildungskurs CPACC (W1)",
      id: "weiterbildungskurs-cpacc",
      items: [
        { tag: "(W1) Vielfalt", description: "" },
        { tag: "(W1) Multimedia", description: "" },
        { tag: "(W1) Dokumente", description: "" },
        { tag: "(W1) PDF-eBooks", description: "" },
        { tag: "(W1) Web", description: "" },
        { tag: "(W1) Prüfwerkzeuge Web", description: "" },
        { tag: "(W1) Software", description: "" },
        { tag: "(W1) Mobile-Apps", description: "" },
        { tag: "(W1) Organisationen-Prozesse", description: "" },
        { tag: "(W1) Demografie-Gesetze", description: "" },
      ],
    },
    cpaccCourse: {
      headline: "Weiterbildungskurs WAS (W2)",
      id: "weiterbildungskurs-was",
      items: [
        { tag: "(W2) Einführung Standards", description: "" },
        { tag: "(W2) Prüfprozesse", description: "" },
      ],
    },
    certificates: {
      headline: "Zertifikate (Z)",
      id: "zertifikate",
      items: [
        {
          tag: "(Z) ADS",
          description:
            "Accessible Document Specialist / Spezialist für Barrierefreie Dokumente",
        },
        {
          tag: "(Z) CPACC",
          description:
            "Certified Professional in Accessibility Core Competencies / Zertifizierte Fachkraft für Kernkompetenzen der Barrierefreiheit",
        },
        {
          tag: "(Z) CPABE",
          description:
            "Certified Professional in Web Accessibility Designation /Zertifizierte Fachkraft für Web-Barrierefreiheit. Personen, die die CPACC- und die WAS-Zertifizierung halten, erhalten automatisch diese Zertifizierung",
        },
        {
          tag: "(Z) WAS",
          description:
            "Web Accessibility Specialist / Spezialist für Web-Barrierefreiheit",
        },
      ],
    },
  };

  return (
    <main className={styles.infoContainer}>
      <section aria-labelledby="trainomatHeading" role="region">
        <h1 id="trainomatHeading">TRAINomat</h1>
        <p>
          Der TRAINomat ist ein Angebot des{" "}
          <a href="https://digitalisierung.hdm-stuttgart.de/barrierefreiheit/">
            Kompetenzzentrums für Digitale Barrierefreiheit
          </a>{" "}
          der Hochschule der Medien Stuttgart. In der Zotero-Bibliothek sind
          Ressourcen (Webseiten und Dokumente) verlinkt, die zur Weiterbildung
          in verschiedenen Bereichen der Digitalen Barrierefreiheit dienen. Man
          kann den TRAINomat über die Auswahl von Tags so einstellen, dass er
          nur Ressourcen für ganz bestimmte Anwendungsbereiche anzeigt.
        </p>
      </section>

      <section aria-labelledby="tagsHeading" role="region">
        <h2 id="tagsHeading">Tags</h2>
        <p>
          Jeder Eintrag im TRAINomat ist mit einem oder mehreren Tags versehen,
          die den Inhalt des Eintrags beschreiben. Durch Auswahl eines Tags
          werden nur die Dokumente, die mit diesem Tag versehen sind, angezeigt.
          Ein ausgewähltes Tag kann jederzeit wieder abgewählt werden. Durch die
          Auswahl mehrerer Tags kann die Auswahl weiter präzisiert werden.
          Beispiel: Mit den Tags <Tag key={1} tag={"(T) PDF"} /> und{" "}
          <Tag key={1} tag={"(Q) Einstieg"} /> werden Einträge zum Thema PDF
          angezeigt, die für Unerfahrene geeignet sind.
        </p>
        <br />
        <p>
          Einträge, die mit dem Tag <Tag key={1} tag={"(E) *"} /> versehen sind,
          sind eine Empfehlung des Kompetenzzentrums.
        </p>
        <br />
        <p>
          Die Tags sind in verschiedene Kategorien unterteilt. Die Kategorie
          eines Tags wird durch seine Anfangsbuchstaben angezeigt:
        </p>
        <br />
        {renderTagsTable(tagsData)}
      </section>

      <section aria-labelledby="categoriesHeading">
        <h2 id="categoriesHeading">Kategorien</h2>
        {Object.entries(categoriesData).map(([key, value]) =>
          renderCategoriesTable(value.items, key, value.headline, value.id)
        )}
      </section>
    </main>
  );
}

const renderTagsTable = (data) => (
  <section aria-label="Tags">
    <table>
      <thead>
        <tr>
          <th>Kategorie</th>
          <th>Beschreibung</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ category, description, id }) => (
          <tr key={category}>
            <td>{category}</td>
            <td>
              <a href={`#${id}`}> {description}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const renderCategoriesTable = (data, heading, headline, id) => (
  <section aria-labelledby={`${heading}Heading`} id={id}>
    <h3 id={`${heading}Heading`}>{headline}</h3>
    <table aria-labelledby={`${heading}Heading`}>
      <thead>
        <tr>
          <th>Tag</th>
          <th>Erklärung</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ tag, description }) => (
          <tr key={tag}>
            <td>{tag}</td>
            <td>{description || ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
