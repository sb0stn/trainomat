/**
 * Do not use this file as is, if you deploy your own version of the TRAINOmat!
 * You need to provide your own details!
 **/

import styles from "../Info/Info.module.scss";
import { useEffect } from "react";

export default function Accessibility() {
    useEffect(() => {
        document.title = "Erklärung zur Barrierefreiheit - TRAINomat";
    }, []);


    return (
        <main className={styles.infoContainer}>
            <h1>Erklärung zur Barrierefreiheit</h1>
            <h2>Anwendungsbereich</h2>
            <p>Diese Erklärung zur Barrierefreiheit bezieht sich auf das <a href="https://www.landesrecht-bw.de/bsbw/document/jlr-BehGleichStGBW2014pG2/part/X" target="_blank" rel="noreferrer">Landesgesetz zur Gleichstellung von Menschen mit Behinderungen (Landes-Behindertengleichstellungsgesetz – L-BGG) vom 17. Dezember 2014, zuletzt mehrfach geändert durch Gesetz vom 18. Dez. 2018<span className="sr-only">&nbsp;(öffnet in neuem Fenster)</span></a>. Das Kompetenzzentrum für Digitale Barrierefreiheit ist bemüht, seine Webseiten und mobilen Anwendungen in Einklang mit § 10 Absatz 1 des Landes-Behindertengleichstellungsgesetzes (L-BGG) barrierefrei zugänglich zu gestalten.</p>

            <p>Diese Erklärung zur Barrierefreiheit gilt für die TRAINomat-Plattform des Kompetenzzentrums für Barrierefreiheit der Hochschule der Medien. Diese Erklärung bezieht sich ausdrücklich nicht auf die anderen Websites und mobilen Apps der Hochschule der Medien, und nicht auf Inhalte von Drittanbietern, auf die über Links verwiesen wird.</p>

            <h2>Stand der Vereinbarkeit mit den Anforderungen</h2>
            <p>Alle Webseiten und mobilen Anwendungen im Anwendungsbereich sind mit §10 Absatz 1 L-BGG vollständig vereinbar; Ausnahmen siehe folgender Abschnitt.</p>

            <p>Anmerkung: Für Startseiten, Formulare und Login-Seiten wurde ein höchstmögliches Maß an Barrierefreiheit angestrebt. In diesem Fall sind zusätzlich einige der WCAG 2.1 AAA Erfolgskriterien erfüllt.</p>

            <h2>Nicht barrierefreie Inhalte</h2>
            <p>Es gibt zurzeit folgende Ausnahmen, die bis 31.03.2024 behoben werden:</p>

            <ul>
                <li>Bei Nutzung mancher Screenreader werden in den Eingabefeldern zu den <span lang="en">Tags</span> und Sortierung einzelne Texte auf Englisch, doppelt oder nicht vollständig vorgelesen.</li>
                <li>Der Button, um das <span lang="en">Tag</span>-Feld zu leeren, kann nicht mit der Tastatur erreicht werden. Sie können einen <span lang="en">Tag</span> per Tastatur löschen, indem Sie ihn im Formular erneut auswählen.</li>
            </ul>

            <h2>Erstellung dieser Erklärung zur Barrierefreiheit</h2>
            <p>Diese Erklärung wurde am 15.01.2024 erstellt.</p>
            <p>Sie beruht auf einer Selbstbewertung unserer Inhalte.</p>
            <p>Diese Erklärung wurde zuletzt am 20.02.2024 aktualisiert.</p>

            <h2>Rückmeldung und Kontaktangaben</h2>
            <p>Sie möchten uns bestehende Barrieren mitteilen oder Informationen zur Umsetzung der Barrierefreiheiterfragen? Für Ihr Feedback sowie alle weiteren Informationen können Sie uns über unser <a href="https://digitalisierung.hdm-stuttgart.de/barrierefreiheit/barrieren-melden/" target="_blank" rel="noreferrer">Barriere Melden Formular<span className="sr-only">&nbsp;(öffnet in neuem Fenster)</span></a> kontaktieren oder sprechen Sie gerne direkt unsere verantwortliche Kontaktperson an: Prof. Dr. Gottfried Zimmermann, Hochschule der Medien, Nobelstr. 10, 70569 Stuttgart, <a href="mailto:gzimmermann@hdm-stuttgart.de">gzimmermann@hdm-stuttgart.de</a>, Tel. +49711 8923-2751.</p>

            <h2>Durchsetzungsverfahren</h2>
            <p>Um zu gewährleisten, dass diese Webseiten und mobilen Anwendungen den in § 10 Absatz 1 L-BGG beschriebenen Anforderungen genügen, können Sie sich per Email an das Kompetenzzentrum für Digitale Barrierefreiheit (<a href="mailto:barrierefreiheit@hdm-stuttgart.de">barrierefreiheit@hdm-stuttgart.de</a>) wenden und eine entsprechende Rückmeldung geben.</p>

            <p>Falls das Kompetenzzentrum für Digitale Barrierefreiheit nicht innerhalb 4 Wochen auf Ihre Anfrage antwortet, können Sie sich an die Schlichtungsstelle des Landeszentrums Barrierefreiheit (LZ-BARR) wenden. Die Schlichtungsstelle erreichen Sie wie folgt: Landeszentrum Barrierefreiheit, Schlichtungsstelle, Else-Josenhans-Straße 6, 70173 Stuttgart, Telefon: 0711 123 39375, E-Mail: schlichtung@barrierefreiheit.bwl.de, Webseite: www.barrierefreiheit-bw.de</p>

            <p>Alternativ, können Sie sich an die Beauftragte der Landesregierung für die Belange von Menschen mit Behinderungen oder an die kommunalen Beauftragten für die Belange von Menschen mit Behinderungen im Rahmen der in § 14 Absatz 2 Satz 2 L-BGG und § 15 Absatz 3 Satz 2 L-BGG beschriebenen Ombudsfunktion wenden.</p>

            <p>Die Beauftragte der Landesregierung für die Belange von Menschen mit Behinderungen können Sie wie folgt erreichen: Simone Fischer. Tel. 0711/279-3366. Email: <a href="mailto:Poststelle@bfbmb.bwl.de">Poststelle@bfbmb.bwl.de</a>. Adresse: Else-Josenhans-Straße 6, 70173 Stuttgart.</p>

            <p>Die Kontaktdaten des für Sie zuständigen kommunalen Beauftragten für die Belange von Menschen mit Behinderungen können Sie über die Webseite des Stadt- oder Landkreises in Erfahrung bringen, in welchem Sie Ihren dauerhaften Wohnsitz haben.</p>

            <p>Das Schlichtungsverfahren ist unentgeltlich.</p>

            <p>Auf die Möglichkeit des Verbandsklagerechts nach § 12 Absatz 1 Satz 1 Nummer 4 L-BGG wird hingewiesen.</p>

            <h2>Hinweise zur Kompatibilität</h2>
            <p>Unsere Websites sind für die folgenden Browser optimiert: Chrome, Firefox, Edge, Safari. Internet Explorer wird nicht unterstützt.</p>

        </main>
    );
}



