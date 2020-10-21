import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./orderForm.module.css";

import OrderSummary from "../order-summary/order-summary";
import {
  addPersonalDataOrderActionDispacher,
  addCommentaryOrderActionDispacher,
} from "../../redux/shopping-cart-store";

function OrderForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const [commentary, setCommentary] = useState("");
  const [loading, setLoading] = useState(false);

  const dataOrders = useSelector(
    (state) => state.shoppingCart.shoppingCartProducts
  );
  console.log("dataOrders", dataOrders);
  const totalAmount = useSelector((state) => state.shoppingCart.amount);

  const handleChangeCommentary = (e) => {
    setCommentary(e.target.value);
  };
  const productsArray = dataOrders.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
      name: item.name,
      totalAmount: item.totalAmount,
    };
  });
  const onSubmit = async (data) => {
    dispatch(addPersonalDataOrderActionDispacher(data));
    dispatch(addCommentaryOrderActionDispacher(commentary));

    setLoading(true);
    console.log("data", data);
    const dataPostBackend = {
      clientName: `Nombre: ${data.name} ${data.lastName} `,
      email: data.email,
      phone: `Telefono: ${data.telephone} `,
      address: `Direccion: ${data.address} `,
      deliveryDate: data.date,
      amount: totalAmount,
      description: commentary,
      paymentType: "Transferencia",
      deliveryCost: 0,
      products: productsArray,
    };

    history.push("/succefull-Order");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataPostBackend),
    };
    // fetch("https://breads-api.herokuapp.com/api/v1/purchases", requestOptions)
    //   .then((response) => response.json())
    //   .then((res) => {
    //     setLoading(false);
    //     if (res.status === "success") {
    //       history.push("/success-order");
    //     } else if (res.status === "error") {
    //       console.log("err SOSOSI");
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("err", e);
    //     setLoading(false);
    //   });

    // try {
    //   const purchaseResponse = await fetch(
    //     "https://breads-api.herokuapp.com/api/v1/purchases",
    //     requestOptions
    //   );
    //   setLoading(false);
    //   if (purchaseResponse.status === "success") {
    //     history.push("/success-order");
    //   }
    // } catch (e) {
    //   console.log("err", e);
    //   setLoading(false);
    // }
  };

  // console.log(watch("name"));

  return (
    <div className={styles.containerFormOrder}>
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
            name="address"
            placeholder="Direccion"
            ref={register({ required: true })}
          />
          {errors.address && (
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
        <div className={styles.titleOrderSummary}> Resumen de la Orden</div>
        <OrderSummary />
        <p className={styles.textCommentary}>Comentario:</p>
        <textarea
          id="commentary"
          className={styles.commentary}
          name="commentary"
          value={commentary}
          onChange={(e) => handleChangeCommentary(e)}
        />
        <input className={styles.submitButton} type="submit" />
      </form>
    </div>
  );
}

export default OrderForm;
