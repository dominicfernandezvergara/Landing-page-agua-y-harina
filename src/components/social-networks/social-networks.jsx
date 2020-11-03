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
      <div className={styles.containerSocialNetworksSmallScreen}>
        <button type="button" className={styles.containerIconButton}>
          <FacebookIcon style={{ fontSize: 40, color: "white" }} />
        </button>
        <button type="button" className={styles.containerIconButton}>
          <WhatsAppIcon style={{ fontSize: 40, color: "white" }} />
        </button>
        <button type="button" className={styles.containerIconButton}>
          <InstagramIcon style={{ fontSize: 40, color: "white" }} />
        </button>
        <button type="button" className={styles.containerIconButton}>
          <EmailIcon style={{ fontSize: 40, color: "white" }} />
        </button>
      </div>
      <div className={styles.containerSocialNetworksMediumScreen}>
        <button type="button" className={styles.containerIconButton}>
          <FacebookIcon style={{ fontSize: 60, color: "white" }} />
        </button>
        <button type="button" className={styles.containerIconButton}>
          <WhatsAppIcon style={{ fontSize: 60, color: "white" }} />
        </button>
        <button type="button" className={styles.containerIconButton}>
          <InstagramIcon style={{ fontSize: 60, color: "white" }} />
        </button>
        <button type="button" className={styles.containerIconButton}>
          <EmailIcon style={{ fontSize: 60, color: "white" }} />
        </button>
      </div>
    </Fragment>
  );
}

export default SocialNetworks;
