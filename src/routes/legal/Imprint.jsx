import styles from "../Info/Info.module.scss";
import { useEffect } from "react";

export default function Imprint() {
  useEffect(() => {
    document.title = "Impressum - TRAINomat";
  }, []);


  return (
    <main className={styles.infoContainer}>
    <h1>Impressum</h1>

       <p>Die Hochschule der Medien Stuttgart ist eine Körperschaft des öffentlichen Rechts. Sie wird durch den Rektor Professor Dr. Alexander W. Roos gesetzlich vertreten.</p>
                <p><strong>USt.-ID-Nr.:</strong> DE 224 427 890</p>

                <strong>Für die Website verantwortlich:</strong>
                <ul className="list-unstyled">
                    <li>Prof. Dr. Gottfried Zimmermann</li>
                    <li>Hochschule der Medien Stuttgart</li>
                    <li>Nobelstr. 10</li>
                    <li>70569 Stuttgart</li>
                    <li>E-Mail: <a href="mailto:zimmermanng@hdm-stuttgart.de">zimmermanng@hdm-stuttgart.de</a></li>
                </ul>

                <strong>Zuständige Aufsichtsbehörde:</strong>
                <ul className="list-unstyled">
                    <li>Ministerium für Wissenschaft, Forschung und Kunst Baden-Württemberg</li>
                    <li>Königstraße 46</li>
                    <li>70173 Stuttgart</li>
                </ul>

                <h2>Haftungsausschluss</h2>
                <ol className="list-unstyled">
                    <li>
                        <h3>1. Inhalt des Onlineangebotes</h3>
                        <p>Der Autor (Anbieter dieser Website) bzw. die einzelnen Verfasser übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor oder Verfasser, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors oder der Verfasser kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.</p>

                        <p>Alle Angebote sind freibleibend und unverbindlich. Der Autor und die Verfasser behalten es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
                    </li>

                    <li>
                        <h3>2. Verweise und Links</h3>
                        <p>Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.</p>

                        <p>Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der gelinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.</p>
                    </li>

                    <li>
                        <h3>3. Urheber- und Kennzeichenrecht</h3>
                        <p>Der Autor bzw. die Verfasser sind bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.</p>

                        <p>Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor oder Verfasser selbst erstellte Objekte bleibt allein beim Autor/den Verfassern der Seiten bzw. Texte und Inhalte. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors/der Verfasser nicht gestattet.</p>
                    </li>

                    <li>
                        <h3>4. Rechtswirksamkeit dieses Haftungsausschlusses</h3>
                        <p>Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.</p>
                    </li>

                    <li>
                        <p>Quelle: <a href="https://www.juraforum.de">www.Juraforum.de</a> &mdash; Rechtportal mit Anwaltssuche
                        Stand: August 2017</p>
                    </li>

                </ol>
    </main>
  );
}



