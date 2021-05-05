import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import styles from "./footer.module.css";
import image from "../../images/imageWebPay.png";
import InstagramIcon from "../../images/social-media/instagramIcon.svg";
import WhatsAppIcon from "../../images/social-media/whatsappIcon.svg";

function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.Body}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>Contactanos</h3>
          <hr className={styles.line} />
        </div>
        <div className={styles.containerText}>
          <div className={styles.iconLink}>
            <PhoneIcon />
          </div>
          <a href="tel:569 75967218" className={styles.text}>
            +569 75967218
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.iconLink}>
            <EmailIcon />
          </div>
          <a
            href="mailto: aguayharina.bakery@gmail.com"
            className={styles.text}
          >
            aguayharina.bakery@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.Body}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>Redes Sociales</h3>
          <hr className={styles.line} />
        </div>
        <div className={styles.containerIconsMedia}>
          <div className={styles.containerText}>
            <a
              href="https://www.instagram.com/awareness.consultant/"
              className={styles.iconSocialMedia}
            >
              <img
                src={InstagramIcon}
                className={styles.iconSocialMedia}
                alt="instagramIcon"
              />
            </a>
          </div>
          <div className={styles.containerText}>
            <a
              href="https://api.whatsapp.com/send?phone=569 75967218"
              className={styles.iconSocialMedia}
            >
              <img
                src={WhatsAppIcon}
                className={styles.iconSocialMedia}
                alt="whatsappIcon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Body}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>Conversemos</h3>
          <hr className={styles.line} />
        </div>
        <div className={styles.containerText}>
          <p className={styles.text}>
            Para dejarnos tu opinión, sugerencias, reclamos o felicitaciones
            escríbenos a través de nuestro{" "}
            <a href="./contacto" className={styles.link}>
              formulario de contacto
            </a>
          </p>
        </div>
      </div>
      <div className={styles.Body}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>Paga seguro con</h3>
          <hr className={styles.line} />
        </div>
        <div className={styles.containerText}>
          <img alt="webPayImage" className={styles.imageWebPay} src={image} />
        </div>
      </div>
    </div>
  );
}
export default Footer;
