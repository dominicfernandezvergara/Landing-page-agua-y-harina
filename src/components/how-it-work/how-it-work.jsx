import React from "react";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EmailIcon from "@material-ui/icons/Email";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import styles from "./how-it-work.module.css";

function HowItWork() {
  return (
    <div className={styles.containerHowItWork}>
      <h1 className={styles.title}>¿Cómo funciona?</h1>
      <h3 className={styles.subtitle}>
        3 sencillos pasos para empezar tu proceso de cambio
      </h3>
      <div className={styles.containerIconsSection}>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EmailIcon />
          </div>
          <div className={styles.textIcon}>
            <h2 className={styles.step}>Paso Uno</h2>
            <p className={styles.descriptionStep}>
              Dinos qué servicio te interesa a través de nuestra página de
              contacto.
            </p>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EventAvailableIcon />
          </div>
          <div className={styles.textIcon}>
            <h2 className={styles.step}>Paso Dos</h2>
            <p className={styles.descriptionStep}>
              Nos pondremos en contacto contigo, y te daremos los detalles que
              necesites saber
            </p>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <SentimentVerySatisfiedIcon />
          </div>
          <div className={styles.textIcon}>
            <h2 className={styles.step}>Paso tres</h2>
            <p className={styles.descriptionStep}>
              Comienza con tus sesiones y alcanza tu bienestar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
