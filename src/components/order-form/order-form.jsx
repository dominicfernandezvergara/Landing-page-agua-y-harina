import React from "react";
import { useForm } from "react-hook-form";

import styles from "./orderForm.module.css";

import OrderSummary from "../order-summary/order-summary";

function OrderForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log("data", data);
  console.log(watch("name"));

  return (
    <div className={styles.formOrderResposiveSmall}>
      <p className={styles.title}>Finalizar Orden</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.subTitle}>Datos Personales</p>
        <div className={styles.wrapperForm}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Nombre"
            ref={register({ required: true })}
          />
          {errors.name && (
            <span className={styles.errorInput}>
              Nombre requerido para continuar
            </span>
          )}
          <input
            className={styles.input}
            type="text"
            name="lastName"
            placeholder="Apellido"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <span className={styles.errorInput}>
              Apellido requerido para continuar
            </span>
          )}
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <span className={styles.errorInput}>
              Email requerido para continuar
            </span>
          )}
          <input
            className={styles.input}
            type="number"
            name="telephone"
            placeholder="Telefono"
            ref={register({ required: true })}
          />
          {errors.telephone && (
            <span className={styles.errorInput}>
              Telefono requerido para continuar
            </span>
          )}
          <input
            className={styles.input}
            type="text"
            name="adresse"
            placeholder="Direccion"
            ref={register({ required: true })}
          />
          {errors.adresse && (
            <span className={styles.errorInput}>
              Direccion requerido para continuar
            </span>
          )}
          <input
            className={styles.input}
            type="date"
            name="date"
            placeholder="Fecha de entrega"
            ref={register({ required: true })}
          />
          {errors.date && (
            <span className={styles.errorInput}>
              Fecha requerido para continuar
            </span>
          )}
        </div>
        <OrderSummary />
        <input type="submit" />
      </form>
    </div>
  );
}

export default OrderForm;
