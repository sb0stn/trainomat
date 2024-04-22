/**
 * Do not use this file as is, if you deploy your own version of the TRAINOmat!
 * You need to provide your own details!
 **/

import styles from "../Info/Info.module.scss";
import { useEffect } from "react";
import wir from '../../assets/leichte-sprache/wir.png';
import liste from '../../assets/leichte-sprache/liste.png';
import suchen from '../../assets/leichte-sprache/suchen.png';
import barrierefrei from '../../assets/leichte-sprache/barrierefrei.png';


export default function LS() {
  useEffect(() => {
    document.title = "Erklärung in Leichter Sprache - TRAINomat";
  }, []);


  return (
    <main className={styles.infoContainer}>
    <h1>Erklärung in Leichter Sprache</h1>
    <h2>Wer wir sind</h2>
    <img src={wir} alt="" height="100em" />
    <p>
        Wir sind:<br/>
        Das "Kompetenz·zentrum für digitale Barriere·freiheit". <br/>
        Von der Hochschule der Medien <br/>
        in Stuttgart.
    </p>

    <p>
    Wir helfen dabei <br/>
    digitale Dinge barriere·frei zu machen.<br/>
    Wir helfen der Hochschule <br/>
    und anderen Gruppen.
    </p>

    <h2>Was Sie hier finden</h2>
    <img src={liste} alt="" height="100em" />
    <p>
    Der TRAINomat ist eine Liste <br/>
    mit Internet·seiten und Dokumenten.<br/>
    In denen geht es<br/>
    um digitale Barriere·freiheit.<br/>
    Diese Liste ist öffentlich.<br/>
    Sie können es sich anschauen.
    </p>

    <h2>Wie diese Seite funktioniert</h2>
    <img src={suchen} alt="" height="100em" />
    <p><strong>Es gibt 2 Such·felder.</strong></p>
    <p>
        <strong>Im ersten Such·feld</strong><br/>
        können Sie Wörter schreiben.<br/>
        Dann zeigen wir Seiten<br/>
        wo diese Wörter stehen.
    </p>

    <p>Suchen Sie zum Beispiel nach:</p>
    <ul>
        <li>Autor</li>
        <li>Titel</li>
    </ul>
      
    <p>
        <strong>Im zweiten Such·feld</strong><br/>
        wählen Sie ein <strong>Schlagwort</strong>.<br/>
        Schlagwort bedeutet: Thema.<br/>
        Auf Englisch heißt das: tag.
    </p>

    <p>
        Dazu gibt es eine Liste.<br/>
        Wählen Sie aus dieser Liste.
    </p>

    <p>
        Dann zeigen wir Seiten<br/>
        die zu dem Thema passen.
    </p>

    <p>
    <strong>Für beide Such·felder gilt:</strong><br/>
    Wenn Sie etwas rein·geschrieben haben<br/>
    oder ein Schlagwort ausgewählt haben:<br/>
    Dann zeigen wir die Such·ergebnisse.<br/>
    Das sind Seiten oder Dokumente.
    </p>

    <p>
    Klicken Sie auf ein Such·ergebnis. <br/>
    Dann zeigen wir mehr Informationen dazu.
    </p>

    <p>
    Noch genauer haben wir das erklärt<br/>
    in den <a href="/info">Informationen in schwerer Sprache</a>.
    </p>

    <p>
    <strong>Andere Seiten·teile</strong><br/>
    Im Menü rechts oben <br/>
    finden Sie <br/>
    Informationen in schwerer Sprache: 
    </p>
    <ul>
        <li>Impressum</li>
        <li>Datenschutz</li>
        <li>Barriere·freiheit</li>
    </ul>

    <p>Sonst haben wir keine Seiten in Leichter Sprache.</p>

    <h2>Barriere·freiheit</h2>
    <img src={barrierefrei} alt="" height="100em" />
    <p>
        Wir wollen<br/>
    dass der TRAINomat barriere·frei ist.<br/>
    Und sich an alle Gesetze hält.
    </p>

    <p>Leider ist noch nicht alles barriere·frei.</p>

    <p>Mehr dazu steht hier: <a href="/barrierefreiheit">Erklärung zur Barriere·freiheit.</a></p>


    </main>
  );
}



