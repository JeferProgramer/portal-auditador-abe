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
import { advancedFilterData } from "@/helpers/filter";
import CheckboxFilter from "../CheckboxFilter";
import { getUniqueList } from "@/helpers/format";

const AdvancedFilters = ({ originalData, data, setData, setEstadoState, setRubroState, estadoState, rubroState }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [rubroCheckboxState, setRubroCheckboxState] = useState({});
  const [estadoCheckboxState, setEstadoCheckboxState] = useState({});

  useEffect(() => {
    setEstadoCheckboxState(estadoState)
    setRubroCheckboxState(rubroState)
    let filteredData = advancedFilterData(originalData, estadoState, rubroState)
    setData(filteredData)
  }, [estadoState, rubroState])

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChangeState = (event) => {
    setEstadoCheckboxState({ ...estadoCheckboxState, [event.target.name]: event.target.checked });
  };

  const handleChangeRubro = (event) => {
    setRubroCheckboxState({ ...rubroCheckboxState, [event.target.name]: event.target.checked });
  };

  const handleAccept = () => {
    let filteredData = advancedFilterData(data, estadoCheckboxState, rubroCheckboxState)
    setEstadoState(estadoCheckboxState)
    setRubroState(rubroCheckboxState)
    setData(filteredData)
  }

  const handleClean = () => {
    setData(originalData)
    setEstadoCheckboxState({})
    setRubroCheckboxState({})
    setEstadoState({})
    setRubroState({})
  }

  let uniqueStateList = getUniqueList(originalData, 'status');
  let uniqueRubroList = getUniqueList(originalData, 'rubro');

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
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <CheckboxFilter
            state={estadoCheckboxState}
            handleChange={handleChangeState}
            options={uniqueStateList}
            principalCheckboxLabel="Estado"
            statusLabel={true}
          />
          <CheckboxFilter
            state={rubroCheckboxState}
            handleChange={handleChangeRubro}
            options={uniqueRubroList}
            principalCheckboxLabel="Rubro"
          />
        </DialogContent>
        <DialogActions sx={{justifyContent: "center"}}>
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
