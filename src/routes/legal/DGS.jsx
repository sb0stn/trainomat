/**
 * Do not use this file as is, if you deploy your own version of the TRAINOmat!
 * You need to provide your own details!
 **/

import styles from "../Info/Info.module.scss";
import { useEffect } from "react";



export default function DGS() {
  useEffect(() => {
    document.title = "Erklärung in Gebärdensprache (DGS) - TRAINomat";
  }, []);


  return (
    <main className={styles.infoContainer}>
    <h1>Erklärung in Gebärdensprache (DGS)</h1>
    <img src="dgs-symbol.svg" alt="" aria-hiden="true" height="100px" />

    <p>Das folgende Video erklärt die Website des TRAINomaten in Deutscher Gebärdensprache (DGS).</p>

    <video width="100%" controls>
    <source src="TRAINomat.mp4" type="video/mp4"  />
    Ihr Browser unterstützt das Video nicht.
    </video>

    </main>
  );
}



