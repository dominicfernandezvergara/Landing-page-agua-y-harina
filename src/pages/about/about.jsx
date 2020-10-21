import React from "react";

import styles from "./about.module.css";
import FollowUs from "../../components/follow-us/follow-us";
import SocialNetworks from "../../components/social-networks/social-networks";
import { ReactComponent as BreadIcon } from "../../images/mi-coleccion-de-iconos/001-pan-de-molde.svg";
import { ReactComponent as HeartIcon } from "../../images/mi-coleccion-de-iconos/002-corazon.svg";
import { ReactComponent as GloveIcon } from "../../images/mi-coleccion-de-iconos/003-guante-de-cocina.svg";
import { ReactComponent as RecipeBookIcon } from "../../images/mi-coleccion-de-iconos/004-libro-de-cocina.svg";
import { ReactComponent as RollerIcon } from "../../images/mi-coleccion-de-iconos/005-rodillo.svg";
import { ReactComponent as HatIcon } from "../../images/mi-coleccion-de-iconos/006-cocinero.svg";
import BoxAboutData from "../../components/box-about-data/box-about-data";

function About() {
  const icon1 = (
    <BreadIcon className={styles.imageboxAbout} width="80" height="80" />
  );
  const icon2 = (
    <GloveIcon className={styles.imageboxAbout} width="80" height="80" />
  );
  const icon3 = (
    <RollerIcon className={styles.imageboxAbout} width="80" height="80" />
  );
  const icon4 = (
    <RecipeBookIcon className={styles.imageboxAbout} width="80" height="80" />
  );
  const icon5 = (
    <HatIcon className={styles.imageboxAbout} width="80" height="80" />
  );
  const icon6 = (
    <HeartIcon className={styles.imageboxAbout} width="80" height="80" />
  );
  const titleAbout = "Amamos el pan!";
  const descriptionAbout =
    "Nos preocupamos de que los ingredientes de nuestros panes sean un aporte para el bienestar de tu salud";
  const textBox =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  return (
    <div className={styles.containerAbout}>
      <h1 className={styles.titleAbout}>{titleAbout}</h1>
      <h2 className={styles.descriptionAbout}>{descriptionAbout}</h2>
      <div className={styles.containerBoxesAbout}>
        <BoxAboutData title="SOMOS" text={textBox} icon={icon1} />
        <BoxAboutData title="CREEMOS" text={textBox} icon={icon2} />
        <BoxAboutData title="QUEREMOS" text={textBox} icon={icon3} />
        <BoxAboutData title="CREAMOS" text={textBox} icon={icon4} />
        <BoxAboutData title="DISFRUTAMOS" text={textBox} icon={icon5} />
        <BoxAboutData title="AMAMOS" text={textBox} icon={icon6} />
      </div>
      <hr />
      <FollowUs />
      <SocialNetworks />
    </div>
  );
}

export default About;
