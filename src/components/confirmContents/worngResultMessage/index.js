
import ElipseWarning from "@/Icons/ElipseWarining";
import cx from "classnames";
import styles from "./WrongMessageResult.module.scss";

/**
 * WrongMessageResult - Componente para mostrar un mensaje de error con una acción.
 *
 * @param {Object} props
 * @param {string} props.text - Texto a mostrar en el mensaje de error.
 * @param {string} props.wrongActionButtonText - Texto del botón de acción de error.
 * @param {function} props.onButtonClick - Función para manejar el evento de clic en el botón de acción.
 *
 * @returns {React.ReactNode}
 */
export const WrongMessageResult = ({
  text,
  wrongActionButtonText,
  onButtonClick,
}) => {
  return (
    <>
      <div className={cx(styles.contentConfirmModal)}>
        <div className={cx(styles.modalContentCenter)}>
          <ElipseWarning />
        </div>

        <div className={cx(styles.wrongContentConfirmContentText)}>{text}</div>
        <div className={cx(styles.wrongActionButtonsContainer)}>
          <button
            className={cx(styles.acceptSuccesActionModal)}
            onClick={() => onButtonClick()}
          >
            {wrongActionButtonText}
          </button>
        </div>
      </div>
    </>
  );
};
