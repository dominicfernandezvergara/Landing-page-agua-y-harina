import React, { Fragment } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import {} from "@material-ui/core/colors";

import styles from "./socialNetworks.module.css";

function SocialNetworks() {
  return (
    <Fragment>
      <div className={styles.socialNetworksResponsiveSmall}>
        <div className={styles.containerIcon}>
          <FacebookIcon style={{ fontSize: 40, color: "white" }} />
        </div>
        <div className={styles.containerIcon}>
          <WhatsAppIcon style={{ fontSize: 40, color: "white" }} />
        </div>
        <div className={styles.containerIcon}>
          <InstagramIcon style={{ fontSize: 40, color: "white" }} />
        </div>
        <div className={styles.containerIcon}>
          <EmailIcon style={{ fontSize: 40, color: "white" }} />
        </div>
      </div>
      <div className={styles.socialNetworksResponsiveLarge}>
        <InstagramIcon />
        <FacebookIcon />
        <WhatsAppIcon />
        <EmailIcon />
      </div>
    </Fragment>
  );
}

export default SocialNetworks;
