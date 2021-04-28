import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./contactUs.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import { ReactComponent as ContactUsImage } from "../../images/contact-us-image/undraw_Questions_re_1fy7.svg";

function ContactUs() {
  UseScrollToTop();

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
          <div className={styles.inputBox}>
            <TextField
              id="name"
              label="Nombre"
              type="text"
              name="name"
              className={styles.input}
              inputRef={register({ required: true })}
            />
          </div>
          {errors.name && (
            <span className={styles.errorInput}>
              Nombre requerido para continuar
            </span>
          )}
          <div className={styles.inputBox}>
            <TextField
              id="lastName"
              label="Apellido"
              type="text"
              name="lastName"
              className={styles.input}
              inputRef={register({ required: true })}
            />
          </div>
          {errors.lastName && (
            <span className={styles.errorInput}>
              Apellido requerido para continuar
            </span>
          )}
          <div className={styles.inputBox}>
            <TextField
              name="email"
              id="Email"
              label="Email"
              type="text"
              className={styles.input}
              inputRef={register({
                required: "Email requerido para continuar",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email invalido",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className={styles.errorInput}>{errors.email.message}</span>
          )}
          <div className={styles.commentaryBox}>
            <TextField
              id="commentary"
              label="Comentario"
              multiline
              rowsMax={4}
              type="text"
              className={styles.input}
              name="commentary"
              inputRef={register({ required: true })}
              value={commentary}
              onChange={(e) => handleChangeCommentary(e)}
            />
          </div>
          {errors.commentary && (
            <span className={styles.errorInput}>
              Comentario requerido para continuar
            </span>
          )}
          <Button className={styles.submitButton} type="submit">
            ENVIAR
          </Button>
        </form>
      </div>
      <ContactUsImage className={styles.image} />
    </div>
  );
}

export default ContactUs;
