import React from "react";
import cx from "classnames";
import { Loader } from "semantic-ui-react";

/**
 * Loading - Un componente para mostrar un indicador de carga.
 *
 * @param {Object} props
 * @param {string} [props.size] - Tamaño del cargador. Los valores pueden ser "mini", "tiny", "small", "medium", "large", "big", "huge", "massive".
 * @param {string} [props.className] - Clases adicionales para el cargador.
 *
 * @returns {React.ReactNode}
 */
const Loading = ({ size, className }) => {
  const loaderClassName = cx({
    [className]: !!className,
  });

  return <Loader active inline size={size} className={loaderClassName} />;
};

export default Loading;
