import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Settings from "@/Icons/Settings";
import styles from "./AdvancedFilters.module.scss";
import {
  Button,
} from "@mui/material";
import AbiIcon from "@/Icons/AbiIcon";
import CloseIcon from "@/Icons/CloseIcon";
import CheckboxFilter from "../CheckboxFilter";
import { getUniqueList } from "@/helpers/format";

const AdvancedFilters = ({ originalData, setEstadoState, estadoState, handleChangeState, handleAccept }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClean = () => {
    setEstadoState({})
  }

  let uniqueStateList = getUniqueList(originalData, 'status');

  const handleClickAccept = (event) => {
    event.stopPropagation();
    handleAccept();
    setOpenDialog(false);
  };


  return (
    <div className={styles.advancedFilters} onClick={handleOpenDialog}>
      <div className={styles.arrow}>
        <Settings />
      </div>
      <div className={styles.text}>Filtro Avanzado</div>
      <Dialog open={openDialog}>
        <DialogTitle>
          <div className={styles.containerCheckHeader}>
            <div className={styles["advanced-filter-title"]}>
              Filtro Avanzado
            </div>
            <AbiIcon style={{ margin: "auto 10px" }} />
            <div
              className={styles.closeIconCustomStyle}
              onClick={(e) => {
                e.stopPropagation();
                handleCloseDialog();
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CheckboxFilter
            state={estadoState}
            handleChange={handleChangeState}
            options={uniqueStateList}
            principalCheckboxLabel="Estado"
            statusLabel={true}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <div className={styles.containerButtonsFooter}>
            {" "}
            <Button
              type="submit"
              color="primary"
              className="secondary-abe-button"
              size="large"
              fullWidth
              style={{
                height: 30,
                margin: "30px auto 10px auto",
                borderRadius: 6,
                width: 80,
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleClean();
                setOpenDialog(false);
              }}
            >
              Limpiar
            </Button>
            <Button
              type="submit"
              color="primary"
              className="primary-abe-button"
              size="large"
              fullWidth
              style={{
                resize: "none",
                height: 30,
                margin: "30px auto 10px auto",
                borderRadius: 6,
                width: 80,
              }}
              onClick={handleClickAccept}
            >
              Aceptar
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdvancedFilters;
