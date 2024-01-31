import { useState } from "react";
import styles from "../RequirementsList.module.scss";
import MessageNotification from "@/Icons/MessajeNotification";

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";

import PlusIcon from "@/Icons/PlusIcon";
import UserMessageIcon from "@/Icons/UserMessageIcon";
import CustomTextArea from "@/components/Editor";
import CloseIcon from "@/Icons/CloseIcon";
export const DocumentRequirementManagement = ({ state = "en_proceso" }) => {
  const [editableStateComments, setEditableStateComments] = useState(false);

  const AuditorResponseHeader = () => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr", // Dos columnas
          gridTemplateRows: "auto auto auto  auto", // Tres filas, ajusta según necesites
          padding: 5,
          borderTop: "1px solid #C7C7C7",
          gridColumn: "1 / span 2",
          borderBottom: "1px solid #C7C7C7",
        }}
      >
        <div
          style={{
            borderRight: "1px solid #C7C7C7",
            padding: "10px 5px",
          }}
        >
          1. Arqueo de Caja
        </div>
        <div
          style={{
            borderRight: "1px solid #C7C7C7",
            padding: "10px 5px",
          }}
        >
          Arqueo de Caja.xls
        </div>
        <div
          style={{
            padding: "10px 5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div> Rechazado</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "auto 0px",
          }}
        >
          {" "}
          <MessageNotification />
        </div>
      </div>
    );
  };

  const AuditorRequestingDocumentsHeader = ({ setEditableStateComments }) => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr", // Dos columnas
          gridTemplateRows: "auto auto auto  auto", // Tres filas, ajusta según necesites
          padding: 5,
          borderTop: "1px solid #C7C7C7",
          gridColumn: "1 / span 2",
          borderBottom: "1px solid #C7C7C7",
        }}
      >
        <div
          style={{
            borderRight: "1px solid #C7C7C7",
            padding: "10px 5px",
          }}
        >
          1. Arqueo de Caja
        </div>
        <div style={{ gridColumn: "2 / span 3", display: "flex" }}>
          {" "}
          <Button
            type="submit"
            color="primary"
            className="primary-abe-button"
            size="large"
            fullWidth
            style={{
              resize: "none",
              height: 30,
              margin: "5px 10px 5px 5px",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            Adjuntar Documento
          </Button>
          <div style={{ display: "flex" }}>
            <Checkbox />
            <div style={{ margin: "auto 0px" }}> {"No aplica"}</div>
          </div>
          <div
            style={{
              margin: "auto 20px",
              gap: 10,
              flexDirection: "row",
              display: "flex",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setEditableStateComments(true);
            }}
          >
            <PlusIcon />
            <div> {"Agregar comentarios   "}</div>
          </div>
        </div>
      </div>
    );
  };

  const AuditorMessage = () => {
    return (
      <>
        <div style={{ position: "relative", top: 90, height: 0 }}>
          <UserMessageIcon />
        </div>
        <div className={styles.commentsListRequirements}>
          <div
            style={{
              margin: 10,
              width: 400,
              whiteSpace: "nowrap",
              flexDirection: "column",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <span title=" Cristian Suarez Torres"> Cristian Suarez Torres</span>
            <div>18 de Enero, 2024</div>
          </div>
          <div>
            {" "}
            {
              "Lorem ipsum dolor sit amet consectetur. Pretium feugiat eu sed pellentesque lorem. Eget eleifend nisl at aliquam ultrices dolor nibh dignissim. Lorem odio gravida quisque quis. Diam in ultrices amet vel suspendisse quis adipiscing maecenas donec."
            }
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {" "}
      {state === "en_proceso" ? (
        <AuditorRequestingDocumentsHeader
          setEditableStateComments={setEditableStateComments}
        />
      ) : (
        <AuditorResponseHeader />
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr", // Dos columnas
          gridTemplateRows: "auto auto auto  auto", // Tres filas, ajusta según necesites
          gridColumn: "1 / span 2",
        }}
      >
        <div></div>
        <div
          style={{
            gridColumn: "2 / span 3",
          }}
        >
          <div style={{ height: 150, overflow: "auto" }}>
            <AuditorMessage />
            <AuditorMessage />
            <AuditorMessage />
          </div>
          {editableStateComments && (
            <div style={{ margin: "5px 15px 5px 5px" }}>
              {" "}
              <CustomTextArea
                border={"1px solid #C7C7C7"}
                borderRadius={4}
                // className={styles.textAreaComments}
                // placeholder="Escribir Comentarios..."
                style={{ width: "100%" }}
                //autoFocus
              />
              <div
                style={{
                  position: "relative",
                  transform: "translate(4px, -120px)",
                  height: 0,
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  title="Cerrar"
                  style={{
                    cursor: "pointer",
                    zoom: 1.2,
                  }}
                >
                  <CloseIcon onClick={() => setEditableStateComments(false)} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
