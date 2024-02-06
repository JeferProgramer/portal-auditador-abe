import CheckCircle from "@/Icons/CheckCircle";
import cx from "classnames";
import styles from "./SuccesMessageResult.module.scss";

/**
 * SuccesMessageResult - Componente para mostrar un mensaje de éxito con una acción.
 *
 * @param {Object} props
 * @param {string} props.text - Texto a mostrar en el mensaje de éxito.
 * @param {string} props.succesActionButtonText - Texto del botón de acción de éxito.
 * @param {function} props.onButtonClick - Función para manejar el evento de clic en el botón de acción.
 *
 * @returns {React.ReactNode}
 */
export const SuccesMessageResult = ({
  text,
  succesActionButtonText,
  onButtonClick,
}) => {
  return (
    <>
      <div className={cx(styles.contentConfirmModal)}>
        <div className={cx(styles.modalContentCenter)}>
          <CheckCircle />
        </div>

        <div className={cx(styles.successContentConfirmContentText)}>{text}</div>
        <div className={cx(styles.successActionButtonsContainer)}>
          <button
            className={cx(styles.acceptSuccesActionModal)}
            onClick={() => onButtonClick()}
          >
            {succesActionButtonText}
          </button>
        </div>
      </div>
    </>
  );
};
