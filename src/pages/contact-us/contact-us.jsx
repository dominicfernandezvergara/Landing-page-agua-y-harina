import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as ContactUsImage } from "../../images/contact-us-image/undraw_Questions_re_1fy7.svg";

import styles from "./contactUs.module.css";

function ContactUs() {
  const [commentary, setCommentary] = useState("");

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  const handleChangeCommentary = (e) => {
    setCommentary(e.target.value);
    console.log("commentary", commentary);
  };
  console.log(watch("name"));
  return (
    <div className={styles.containerContactUs}>
      <div className={styles.formContactUs}>
        <h2 className={styles.title}>¿Tienes alguna Pregunta?</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.input}
            placeholder="Nombre"
            name="name"
            type="text"
            ref={register({ required: true })}
          />
          {errors.name && (
            <span className={styles.errorInput}>
              Nombre requerido para continuar
            </span>
          )}
          <input
            className={styles.input}
            placeholder="Apellido"
            name="lastName"
            type="text"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <span className={styles.errorInput}>
              Apellido requerido para continuar
            </span>
          )}
          <input
            className={styles.input}
            placeholder="Email"
            name="email"
            type="email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <span className={styles.errorInput}>
              Email requerido para continuar
            </span>
          )}
          <div className={styles.containerMessage}>
            <p className={styles.textMessage}>Mensaje</p>
            <textarea
              id="commentary"
              className={styles.commentary}
              name="commentary"
              value={commentary}
              onChange={(e) => handleChangeCommentary(e)}
            />
          </div>
          <button className={styles.submitButton} type="submit">
            Enviar
          </button>
        </form>
      </div>
      <ContactUsImage className={styles.image} />
    </div>
  );
}

export default ContactUs;
