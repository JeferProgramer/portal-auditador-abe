import ElipseWarning from "@/Icons/ElipseWarining";
import cx from "classnames";
import styles from "./WarningMessageContent.module.module.scss";

/**
 * WarningMessageContent - Componente para mostrar un mensaje de advertencia con opciones de confirmación.
 *
 * @param {Object} props
 * @param {string} props.text - Texto a mostrar en el mensaje de advertencia.
 * @param {string} props.cancelButtonText - Texto del botón de cancelación.
 * @param {string} props.confirmButtonText - Texto del botón de confirmación.
 * @param {function} props.onConfirm - Función para manejar el evento de confirmación.
 * @param {function} props.onCancel - Función para manejar el evento de cancelación.
 *
 * @returns {React.ReactNode}
 */
export const WarningMessageContent = ({
  text,
  cancelButtonText,
  confirmButtonText,
  onConfirm,
  onCancel,
}) => {
  return (
    <>
      <div className={cx(styles.contentConfirmModal)}>
        <div className={cx(styles.modalContentCenter)}>
          <ElipseWarning />
        </div>

        <div className={cx(styles.contentConfirmContentText)}>{text}</div>
        <div className={cx(styles.confirmButtonsContainer)}>
          <button
            className={cx(styles.cancelButtonConfirmModal)}
            onClick={() => onCancel()}
          >
            {cancelButtonText}
          </button>
          <button
            className={cx(styles.confirmButtonConfirmModal)}
            onClick={() => onConfirm()}
          >
            {confirmButtonText}
          </button>
        </div>
      </div>
    </>
  );
};
