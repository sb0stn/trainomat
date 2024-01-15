import styles from "../Info/Info.module.css";
import { useEffect } from "react";

export default function Privacy() {
    useEffect(() => {
        document.title = "Datenschutzerklärung - TRAINomat";
    }, []);


    return (
        <main className={styles.infoContainer}>
            <h1>Datenschutzerklärung</h1>
            <p>Diese Erklärung gilt für Angebote innerhalb der Trainomat Plattform des Kompetenzzentrums Digitale Barrierefreiheit, erreichbar unter <a href="https://trainomat.bf-lernen.de">https://trainomat.bf-lernen.de</a>.</p>

            <h2>1. Name und Anschrift des Verantwortlichen</h2>
            <p>Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:</p>

            <p>
                Prof. Dr. Alexander Roos, Rektor der Hochschule der Medien (HdM)<br />
                Nobelstr. 10, 70569 Stuttgart, Deutschland<br />
                Tel.: <a href="tel:004971189232004">0711 8923-2004</a><br />
                E-Mail: <a href="mailto:roos@hdm-stuttgart.de">roos@hdm-stuttgart.de</a>
            </p>

            <h2>2. Name und Anschrift des Datenschutzbeauftragten</h2>
            <p>Die Datenschutzbeauftragte des Verantwortlichen ist:</p>
            <p>
                Lisa Lingner, Justiziarin<br />
                Nobelstr. 10, 70569 Stuttgart, Deutschland<br />
                Tel.: <a href="tel:004971189232057">0711 8923-2057</a><br />
                E-Mail: <a href="mailto:lingner@hdm-stuttgart.de">lingner@hdm-stuttgart.de</a>
            </p>

            <h2>3. Name und Anschrift der verantwortlichen Fachabteilung</h2>
            <p>Als Ansprechpersonen sind folgende Administratorinnen und Administratoren des Kompetenzzentrums Digitale Barrierefreiheit zu nennen:</p>

            <p>
                Prof. Dr. Gottfried Zimmermann<br />
                Nobelstr. 10, 70569 Stuttgart, Deutschland<br />
                Tel.: <a href="tel:004971189232751">0711 8923-2751</a><br />
                E-Mail: <a href="mailto:gzimmermann@hdm-stuttgart.de">gzimmermann@hdm-stuttgart.de</a>
            </p>

            <p>
                Sebastian Koch<br />
                Nobelstr. 10, 70569 Stuttgart, Deutschland<br />
                Tel.: <a href="tel:004971189233082">0711 8923-3082</a><br />
                E-Mail: <a href="mailto:kochs@hdm-stuttgart.de">kochs@hdm-stuttgart.de</a>
            </p>


            <h2>4. Informationen zur Datenverarbeitung</h2>
            <h3>4.1 Datenarten, Zwecke und Rechtsgrundlagen</h3>
            <h4>4.1.1 Allgemeine Informationen</h4>

            <p>Die Website dient der Information und Bekanntmachung der Arbeiten des Kompetenzzentrums Digitale Barrierefreiheit der Hochschule der Medien, nicht dagegen sonstigen Marketingzwecken oder außerhalb des Projekts stehenden Zwecke. Konkret personenbezogene Daten werden grundsätzlich nicht erhoben (s. hierzu Ziff. 4.1.2).</p>

            <h4>4.1.2 Einzelne Verarbeitungsvorgänge</h4>
            <h5>(Einfache) Nutzung der Website</h5>
            <p>Die einfache Nutzung der Website findet naturgemäß ohne gesonderte Registrierung, d.h. ohne eine Erhebung von Namen oder sonstiger sog. Bestandsdaten statt. Eine Verarbeitung personenbezogener Daten kann sich jedoch daraus ergeben, dass sog. Logfiles und damit verbunden eine Erhebung auch von IP-Adresse(n) der Nutzenden durch das System erfolgt (zu der Frage, ob ein sog. berechtigtes Interesse an der Erhebung (dynamischer) IP-Adressen besteht siehe auch: EUGH-Urteil C-582/14 bzw. BGH-Urteil v. 16. Mai 2017 - VI ZR 135/13). Derartige Logfiles (IP-Adresse, User Agent, Zielseite, Zeitpunkt, Browserdaten etc.) werden auf Servern des Datenverantwortlichen erhoben und gespeichert. Sie sind alleine schon für eine einfache und problemfreie Übertragung und Ausgabe der Website erforderlich.</p>

            <p>Technisch sichert eine dem Stand der Technik entsprechende Transportverschlüsselung (SSL) die Daten (vgl. Art. 32 Abs. 1 lit. a DSGVO) mit einem entsprechenden Zertifikat (incl. HSTS). Bezüglich individueller Server- und Datenbankzugänge bestehen interne Zugangskonzepte. Im Übrigen werden keine Cookies gesetzt bzw. gespeichert.</p>

            <p>Die Rechtsgrundlage für diese Datenverarbeitungen ist daher ein berechtigtes Interesse gemäß Artikel 6 Abs. 1 lit. e bzw. Artikel 6 Abs. 1 lit. f DSGVO. Zudem kann sich ein öffentliches bzw. überwiegendes Interesse zur Datenverarbeitung ergeben, insbesondere auch aus dem Forschungsprivileg (s.o. Ziff. 1).</p>

            <h5>Zotero API</h5>
            <p>Der Trainomat verwendet die Zotero API. Wenn Sie die Webseite aufrufen, baut Ihr Browser automatisch eine Verbindung zu verschiedenen Servern des Anbieters Zotero auf.</p>

            <p>Die Hochschule der Medien selbst verarbeitet diese Daten nicht. Zu welchem Zweck und in welchem Umfang Zotero die Daten, die es über die Protokollierung Ihrer Zugriffe gewinnt, verarbeitet, können Sie der <a href="https://www.zotero.org/support/privacy" target="_blank" hreflang="en">Datenschutz-Erklärung von Zotero</a> entnehmen.</p>

            <p>Da wir den Trainomat nur durch das Einbetten der Daten von Zotero-Servern anbieten können, stellt diese Verarbeitung ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO dar.</p>

            <p>Die Widerspruchs- und Löschmöglichkeiten der über Sie aufgezeichneten Daten können Sie ebenfalls der Datenschutzerklärung von Zotero entnehmen.</p>

            <h3>4.2 Übermittlung an Dritte</h3>
            <p>Eine beabsichtigte Übermittlung von personenbezogenen Daten an Dritte, d.h. außerhalb des Projektes stehende Empfänger, findet grundsätzlich nicht statt, mit Ausnahme der Nutung der Zotero API (s.o.)</p>

            <p>Im Einzelfall können gesetzliche Vorlage- und/oder Archivierungspflichten bestehen, z.B. gegenüber einem Landesarchiv. Rechtsgrundlage wäre hier eine rechtliche Verpflichtung gem. Artikel 6 Abs. 1 lit. c DSGVO, im Fall einer Einwilligung (z.B. Kontaktformular) Artikel 6 Abs. 1 lit. a und für sog. „besondere Kategorien“ (z.B. Gesundheitsdaten) Artikel 9 Abs. 2 lit. j DSGVO, gegebenenfalls auch in Verbindung mit dem sog. Forschungsprivileg (s.o.).</p>

            <h3>4.3 Dauer der Speicherung</h3>
            <p>Die unter Ziffer 4.1.2 genannten Datenverarbeitungen werden diesseits gelöscht oder anonymisiert, sobald der Zweck der Speicherung entfällt und sofern der Löschung bzw. Anonymisierung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Dies gilt grundsätzlich auch für solche Daten, die (ausschließlich) aufgrund einer erteilten Einwilligung erhoben wurden (gem. Grundsätzen des privacy by design, Art. 25 Abs. 1 DSGVO)</p>
        </main>
    );
}



