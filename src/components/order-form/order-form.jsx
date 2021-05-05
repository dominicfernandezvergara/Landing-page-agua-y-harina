import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./order-form.module.css";
import OrderSummary from "../order-summary/order-summary";
import {
  addPersonalDataOrderActionDispacher,
  addCommentaryOrderActionDispacher,
} from "../../redux/shopping-cart-store";

function OrderForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
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

  console.log("errors", errors);
  return (
    <div className={styles.containerFormOrder}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={styles.containerFlex}>
          <div className={styles.wrapperForm}>
            <h4 className={styles.title}>Datos Personales</h4>
            <div className={styles.inputBox}>
              <TextField
                id="name"
                label="Nombre y Apellido"
                type="text"
                name="name"
                className={styles.input}
                inputRef={register({ required: true })}
              />
            </div>

            {errors.name && (
              <span className={styles.errorInput}>
                Nombre y apellido requerido para continuar
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
            <div className={styles.inputBox}>
              <TextField
                name="telephone"
                id="Telephone"
                label="Telefono"
                type="number"
                className={styles.input}
                inputRef={register({ required: true })}
              />
            </div>
            {errors.telephone && (
              <span className={styles.errorInput}>
                Telefono requerido para continuar
              </span>
            )}
            <div className={styles.inputBox}>
              <TextField
                name="address"
                id="address"
                label="Direccion"
                type="text"
                className={styles.input}
                inputRef={register({ required: true })}
              />
            </div>
            {errors.address && (
              <span className={styles.errorInput}>
                Direccion requerida para continuar
              </span>
            )}
            <div className={styles.inputBoxDate}>
              <TextField
                name="date"
                id="date"
                label="Fecha de entrega"
                type="date"
                className={styles.input}
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={register({ required: true })}
              />
            </div>
            {errors.date && (
              <span className={styles.errorInput}>
                Fecha requerida para continuar
              </span>
            )}
            <div className={styles.commentaryBox}>
              <TextField
                id="commentary"
                label="Comentario (Opcional)"
                multiline
                type="text"
                className={styles.input}
                value={commentary}
                onChange={(e) => handleChangeCommentary(e)}
              />
            </div>
          </div>
          <div className={styles.containerSummary}>
            <h4 className={styles.title}> Resumen de la Orden</h4>
            <OrderSummary />
          </div>
        </div>

        <Button type="submit" variant="contained">
          Enviar pedido
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;

// <input
//   className={styles.input}
//   type="text"
//   name="name"
//   placeholder="Nombre"
//   ref={register({ required: true })}
// />
// {errors.name && (
//   <span className={styles.errorInput}>
//     Nombre requerido para continuar
//   </span>
// )}
// <input
//   className={styles.input}
//   type="text"
//   name="lastName"
//   placeholder="Apellido"
//   ref={register({ required: true })}
// />
// {errors.lastName && (
//   <span className={styles.errorInput}>
//     Apellido requerido para continuar
//   </span>
// )}
// <input
//   className={styles.input}
//   type="email"
//   name="email"
//   placeholder="Email"
//   ref={register({
//     required: "Email requerido para continuar",
//     pattern: {
//       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//       message: "Email invalido",
//     },
//   })}
// />
// {errors.email && (
//   <span className={styles.errorInput}>{errors.email.message}</span>
// )}
// <input
//   className={styles.input}
//   type="number"
//   name="telephone"
//   placeholder="Telefono"
//   ref={register({ required: true })}
// />

// <input
//   className={styles.input}
//   type="text"
//   name="address"
//   placeholder="Direccion"
//   ref={register({ required: true })}
// />

// <p className={styles.textCommentary}>Comentario (opcional):</p>
// <textarea
//   id="commentary"
//   className={styles.commentary}
//   name="commentary"
//   value={commentary}
//   onChange={(e) => handleChangeCommentary(e)}
// />
