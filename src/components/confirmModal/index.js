import { Confirm } from "semantic-ui-react";
import { WarningMessageContent } from "../confirmContents/warningMessageContent";
import { useState } from "react";
import { SuccesMessageResult } from "../confirmContents/successResultMessage";
import { WrongMessageResult } from "../confirmContents/worngResultMessage";
import { Dialog, DialogContent } from "@mui/material";

/**
 * CustomConfirmModal - Componente para mostrar una modal de confirmación personalizada con opciones de éxito o error, controladas por la resupuesta de la prop onConfirm(),
 * - onConfirm = null, estado inicial - muestra alerta de confirmación
 * - onConfirm = true, devuelve mensaje de exito
 * - onConfirm = false, devuelve mensaje de error
 * - onConfirm = undefined, si no se devuelve nada en onClick funciona como confirmacion simple, sin mensajes de exito o error.
 *
 * @param {Object} props
 * @param {boolean} props.open - Indica si la modal debe estar abierta.
 * @param {function} props.onCancel - Función para manejar el evento de cancelación.
 * @param {function} props.onConfirm - Función asincrónica para manejar el evento de confirmación.
 * @param {string} [props.confirmMessage] - Texto de confirmación.
 * @param {string} [props.confirmButtonText] - Texto del botón de confirmación.
 * @param {string} [props.cancelButtonText] - Texto del botón de cancelación.
 * @param {string} [props.succesActionMessage] - Texto de mensaje de éxito.
 * @param {string} [props.succesActionButtonText] - Texto del botón de éxito.
 * @param {string} [props.wrongActionMessage] - Texto de mensaje de error.
 * @param {string} [props.wrongActionButtonText] - Texto del botón de error.
 *
 * @returns {React.ReactNode}
 */
export const CustomConfirmModal = ({
  open,
  onCancel,
  onConfirm,
  confirmMessage = "¿Estás seguro de que deseas realizar esta acción?",
  confirmButtonText = "Aceptar",
  cancelButtonText = "Cancelar",
  succesActionMessage = "¡Acción realizada correctamente!",
  succesActionButtonText = "Aceptar",
  wrongActionMessage = "Error al realizar la acción",
  wrongActionButtonText = "Aceptar",
}) => {
  const [confirmResponse, setConfirmResponse] = useState(null);
  const [innerOpen, setInnerOpen] = useState(false);
  
  const handleConfirm = async () => {
    setInnerOpen(true);
    console.log("aca");
    setConfirmResponse(true);
    const resp = await onConfirm();
    setConfirmResponse(resp);
    if (resp === undefined) {
      setInnerOpen(false);
      setConfirmResponse(true);
    }
  };

  console.log("confrimResponse", confirmResponse);

  const handleButtonClick = () => {
    setInnerOpen(false);
    setConfirmResponse(null);
  };
  return (
    <Dialog open={open} fullWidth={true}>
      <DialogContent>
        {confirmResponse === null ? (
          <WarningMessageContent
            text={confirmMessage}
            onConfirm={handleConfirm}
            onCancel={onCancel}
            confirmButtonText={confirmButtonText}
            cancelButtonText={cancelButtonText}
          />
        ) : confirmResponse === true ? (
            <SuccesMessageResult
              text={succesActionMessage}
              onButtonClick={handleButtonClick}
              succesActionButtonText={succesActionButtonText}
            />
        ) : (
              <WrongMessageResult
                text={wrongActionMessage}
                onButtonClick={handleButtonClick}
                wrongActionButtonText={wrongActionButtonText}
              />
        )}
      {/* <Confirm
        open={open || innerOpen}
        content={
          confirmResponse === null ? (
            <WarningMessageContent
              text={confirmMessage}
              onConfirm={handleConfirm}
              onCancel={onCancel}
              confirmButtonText={confirmButtonText}
              cancelButtonText={cancelButtonText}
            />
          ) : confirmResponse === true ? (
            <SuccesMessageResult
              text={succesActionMessage}
              onButtonClick={handleButtonClick}
              succesActionButtonText={succesActionButtonText}
            />
          ) : (
            <WrongMessageResult
              text={wrongActionMessage}
              onButtonClick={handleButtonClick}
              wrongActionButtonText={wrongActionButtonText}
            />
          )
        }
      /> */}
      </DialogContent>
    </Dialog>
  );
};
