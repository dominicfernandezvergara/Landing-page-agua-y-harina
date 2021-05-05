import React from "react";
import cn from "classnames";

import styles from "./team.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

import image1 from "../../images/team/imageTeamCarolina 2.png";

function Team() {
  UseScrollToTop();

  return (
    <div className={styles.containerTeam}>
      <div className={styles.wrapp}>
        <img
          alt="imageHomeMisionSection"
          className={styles.image}
          src={image1}
        />
        <div className={cn(styles.containerText, styles.paddingLeft)}>
          <h3 className={styles.name}>Eliana más conocida como Eli</h3>
          <p className={styles.text}>
            Siempre he estado familiarizada en el área de cocina por mi
            profesión de varios años. Esto me lleva a crear una gran curiosidad
            y conectarme mucho más con ella. Para mi hacer pan pitas en casa es
            parte de mi disciplina y terapia personal, una conexión sanadora de
            llegar a lograr y transmitir una experiencia única con nuestros
            productos. Mi compromiso siempre es seguir estudiando y aprendiendo
            para así poder compartir mis conocimientos.
          </p>
        </div>
      </div>
      <div className={cn(styles.wrapp, styles.marginTop)}>
        <img
          alt="imageHomeMisionSection"
          className={cn(styles.image, styles.smallView)}
          src={image1}
        />
        <div className={cn(styles.containerText, styles.paddingRigth)}>
          <h3 className={styles.name}>Raúl conocido también como Rulo</h3>
          <p className={styles.text}>
            Como ingeniero siempre e buscado dejar huella en todo lo que se hace
            y en esta búsqueda con los conocimientos de mi mujer llegamos con la
            idea de crear pan pita artesanales e integrales que le permitan a la
            gente disfrutar de una comida nutritiva dentro de su alimentación,
            buscamos siempre destacar por los productos de selección elegidos y
            por el proceso artesanal en la creación , llegando así a entregan un
            producto único que nos permitan dejar huella en las personas y que
            los clientes finalmente nos elijan por la calidad del producto
            final.
          </p>
        </div>
        <img
          alt="imageHomeMisionSection"
          className={cn(styles.image, styles.largeView)}
          src={image1}
        />
      </div>
    </div>
  );
}

export default Team;
