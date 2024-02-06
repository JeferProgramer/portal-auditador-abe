import SemanticDatepicker from "react-semantic-ui-datepickers";
import cx from "classnames";
import styles from "./PeriodInput.module.scss";

/**
 * PeriodInput - Componente que muestra un campo de entrada de fecha con una etiqueta.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.label - Etiqueta a mostrar encima del campo de entrada de fecha.
 * @param {Object} [props.labelStyle] - Estilos en línea para la etiqueta.
 * @param {Object} [props.containerStyle] - Estilos en línea para el contenedor del campo de entrada.
 * @param {string} [props.placeholder] - Placeholder para el campo de entrada de fecha.
 * @param {string} [props.size] - Tamaño del campo de entrada de fecha. 
 * @param {function} [props.onChange] - Función que se llama cuando el valor del campo de entrada cambia.
 * @param {Date|string} [props.value] - Valor del campo de entrada de fecha.
 * @param {string} [props.name] - Nombre del campo de entrada de fecha.
 * 
 * @returns {React.ReactNode}
 */

export const PeriodInput = ({
  label,
  labelStyle,
  containerStyle,
  placeholder,
  size,
  onChange,
  value,
  name,
}) => {
  return (
    <div className={styles.containerPeriodInput}>
      <label style={labelStyle} className={styles.labelInput}>
        {label}
      </label>
      <div className={`ui input ${styles.containerInput}`}>
        <SemanticDatepicker
          type="date"
          className={styles.customInputCalendar}
          placeholder={placeholder}
          size={size}
          locale={"es-ES"}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};
