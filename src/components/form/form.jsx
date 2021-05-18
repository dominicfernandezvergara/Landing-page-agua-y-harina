import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./form.module.css";

function Form() {
  const [commentary, setCommentary] = useState("");

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  const handleChangeCommentary = (e) => {
    setCommentary(e.target.value);
    console.log("commentary", commentary);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.title}>Formulario de contacto</h3>
      <div className={styles.inputBox}>
        <TextField
          id="name"
          variant="outlined"
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
          variant="outlined"
          label="Asunto"
          type="text"
          name="subject"
          className={styles.input}
          inputRef={register({ required: true })}
        />
      </div>
      {errors.subject && (
        <span className={styles.errorInput}>
          Asunto requerido para continuar
        </span>
      )}
      <div className={styles.inputBox}>
        <TextField
          name="email"
          variant="outlined"
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
          variant="outlined"
          label="Mensaje"
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
      <Button variant="contained" type="submit">
        ENVIAR
      </Button>
    </form>
  );
}

export default Form;
