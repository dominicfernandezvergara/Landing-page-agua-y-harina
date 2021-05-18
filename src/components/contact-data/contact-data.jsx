import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";

import styles from "./contact-data.module.css";

function ContactData() {
  return (
    <div className={styles.contactData}>
      <h3 className={styles.title}>Escríbenos</h3>
      <p className={styles.text}>
        Para nosotros es muy importante mantener el contacto contigo. Para
        cualquier duda, comentario o sugerencia, por favor llámanos o
        escríbenos.
      </p>
      <div className={styles.wrappData}>
        <div className={styles.subWrappData}>
          <div className={styles.iconLink}>
            <WhatsAppIcon />
          </div>
          <div className={styles.containerText}>
            <div className={styles.subtitle}>Whatsapp</div>
            <a
              href="https://api.whatsapp.com/send?phone=56975967218"
              className={styles.textContactData}
            >
              +569 75967218
            </a>
          </div>
        </div>
        <div className={styles.subWrappData}>
          <div className={styles.iconLink}>
            <EmailIcon />
          </div>
          <div className={styles.containerText}>
            <div className={styles.subtitle}>Correo</div>

            <a
              href="mailto: aguayharina.bakery@gmail.com"
              className={styles.textContactData}
            >
              aguayharina.bakery@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactData;
