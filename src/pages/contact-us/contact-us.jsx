import React from "react";

import styles from "./contactUs.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import HowItWork from "../../components/how-it-work";
import Form from "../../components/form";

function ContactUs() {
  UseScrollToTop();

  return (
    <div className={styles.containerContactUs}>
      <h3 className={styles.title}>Contactanos</h3>
      <Form />
      <HowItWork />
    </div>
  );
}

export default ContactUs;
