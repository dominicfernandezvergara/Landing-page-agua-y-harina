import React from "react";
import { ReactComponent as BreadIcon } from "../../images/mi-coleccion-de-iconos/001-pan-de-molde.svg";
import { ReactComponent as HeartIcon } from "../../images/mi-coleccion-de-iconos/002-corazon.svg";
import { ReactComponent as GloveIcon } from "../../images/mi-coleccion-de-iconos/003-guante-de-cocina.svg";
import { ReactComponent as RecipeBookIcon } from "../../images/mi-coleccion-de-iconos/004-libro-de-cocina.svg";
import { ReactComponent as RollerIcon } from "../../images/mi-coleccion-de-iconos/005-rodillo.svg";
import { ReactComponent as HatIcon } from "../../images/mi-coleccion-de-iconos/006-cocinero.svg";

const icon1 = <BreadIcon width="80" height="80" />;
const icon2 = <GloveIcon width="80" height="80" />;
const icon3 = <RollerIcon width="80" height="80" />;
const icon4 = <RecipeBookIcon width="80" height="80" />;
const icon5 = <HatIcon width="80" height="80" />;
const icon6 = <HeartIcon width="80" height="80" />;
const somos =
  "Somos una pareja de emprendedores, autodefinidos como artesanos del pan pita. Nos dedicamos a esto con mucho amor y mucho entusiasmo para elaborar un pan que aporte a su bienestar, nutrición y salud.";
const creemos =
  "Creemos que cuando se busca entregar algo único, seleccionando los mejores ingredientes y desarrollando un proceso con dedicación se puede crear un excelente producto final.";
const queremos =
  "Queremos darnos a conocer como creadores de un producto único y elemental dentro de la pirámide alimentaria, que son la familia de los granos.";
const creamos =
  "Creamos un producto, pan pita integral con finos insumos orgánicos, naturales y nutritivos.";
const disfrutamos =
  "Disfrutamos en demasía entregar un producto único que sea un aporte a la sana y nutritiva alimentación del día a día.";
const amamos =
  "Amamos lo que hacemos y buscamos crecer día a día para seguir entregando productos con la mejor calidad.";

// eslint-disable-next-line import/prefer-default-export
export const dataBoxAbout = [
  {
    title: "Somos",
    text: somos,
    icon: icon1,
  },
  {
    title: "Creemos",
    text: creemos,
    icon: icon2,
  },
  {
    title: "Queremos",
    text: queremos,
    icon: icon3,
  },
  {
    title: "Creamos",
    text: creamos,
    icon: icon4,
  },
  {
    title: "Disfrutamos",
    text: disfrutamos,
    icon: icon5,
  },
  {
    title: "Amamos",
    text: amamos,
    icon: icon6,
  },
];
