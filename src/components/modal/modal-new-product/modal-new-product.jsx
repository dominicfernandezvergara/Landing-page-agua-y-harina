import React from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

import styles from "./modal-new-product.module.css";

function ModalNewProduct({ editData, close, onFormSubmit, title }) {
  console.log("editData", editData);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const idProduct = editData.id;
    console.log("data", data);

    const newProduct = {
      title: data.name,
      description: data.description,
      type: data.type,
      price: data.precio,
      image: data.image,
    };
    const httpMethod = editData.id ? "PUT" : "POST";
    onFormSubmit(newProduct, httpMethod, idProduct);
    close();
  };

  return (
    <div className={styles.containerModalNewProduct}>
      <h3>{title}</h3>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputBox}>
          <div className={styles.inputBox}>
            <TextField
              id="type"
              label="Tipo (molde, pan pita, etc...)"
              type="text"
              name="type"
              defaultValue={editData.title}
              className={styles.input}
              inputRef={register({ required: true })}
            />
          </div>
          {errors.type && (
            <span className={styles.errorInput}>
              Tipo requerido para continuar
            </span>
          )}
          <TextField
            id="name"
            label="Nombre"
            type="text"
            name="name"
            defaultValue={editData.title}
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
            id="description"
            label="Descricion del producto"
            multiline
            rowsMax={4}
            type="text"
            name="description"
            defaultValue={editData.description}
            className={styles.input}
            inputRef={register({ required: true })}
          />
        </div>
        {errors.description && (
          <span className={styles.errorInput}>
            Descripcion requerida para continuar
          </span>
        )}
        <div className={styles.inputBox}>
          <TextField
            id="precio"
            label="Precio"
            type="number"
            name="precio"
            defaultValue={editData.price}
            className={styles.input}
            inputRef={register({ required: true })}
          />
        </div>
        {errors.precio && (
          <span className={styles.errorInput}>
            Precio requerido para continuar
          </span>
        )}
        <div className={styles.inputBox}>
          <TextField
            id="image"
            label="Imagen"
            type="file"
            accept="image/*"
            name="image"
            // defaultValue={editData.image}
            className={styles.input}
            inputRef={register({ required: true })}
          />
        </div>

        <Button className={styles.submitButton} type="submit">
          AGREGAR NUEVO PRODUCTO
        </Button>
      </form>
    </div>
  );
}
ModalNewProduct.propTypes = {
  close: PropTypes.func.isRequired,
  editData: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }),
  onFormSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
ModalNewProduct.defaultProps = {
  editData: null,
};
export default ModalNewProduct;
