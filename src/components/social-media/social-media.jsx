import React from "react";

import styles from "./social-media.module.css";
import WhatsAppIcon from "../../images/social-media/whatsappIcon.svg";
import InstagramIcon from "../../images/social-media/instagramIcon.svg";

function SocialMedia() {
  return (
    <div className={styles.containerSocialMedia}>
      <div className={styles.containerIcon}>
        <a
          href="https://api.whatsapp.com/send?phone=569 75967218"
          className={styles.iconSocialMedia}
        >
          <img src={WhatsAppIcon} className={styles.iconSocialMedia} alt="" />
        </a>
      </div>

      <div className={styles.containerIcon}>
        <a
          href="https://www.instagram.com/awareness.consultant/"
          className={styles.iconSocialMedia}
        >
          <img src={InstagramIcon} className={styles.iconSocialMedia} alt="" />
        </a>
      </div>
    </div>
  );
}
export default SocialMedia;
