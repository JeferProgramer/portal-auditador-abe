import React, { useState } from 'react'
import styles from "../RequirementsList.module.scss";
import cx from "classnames";
import LayoutAll from "@/Icons/LayoutAll";
import { toCamelCase } from "@/helpers/format";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Tooltip,
} from "@mui/material";
import CloseIcon from "@/Icons/CloseIcon";
import { StatusInidicator } from "@/components/StatusIndicator";
import { DocumentRequirementManagement } from "../DocumentRequirementManagement";
import InfoRed from '@/Icons/InfoRed';
import { filters } from '@/utils/filters';
import AlertReturned from '@/components/AlertReturned';
import Edit from '@/Icons/Edit';


const RequirementsTable = ({ data }) => {
    const [openRequiremenetDetail, setOpenRequirementDetail] = useState(false);
    const tableClass = cx({
        [styles.requirementsTableContainer]: true,
        [styles.hide]: data?.length === 0,
    });
    return (
        <div className={tableClass}>
            <table className={styles.customTableRequirements}>
                <thead className={styles.schemaStickyHeader}>
                    <tr className={styles.requirementsCustomHeaderRow}>
                        <th className={styles.customHeaderCell}>
                            <div className={styles.containerProjectRequirements}>
                                <div className={styles.customHeaderCellProject}>Visita</div>
                            </div>
                        </th>
                        <th style={{ width: "122px" }}>
                            <div className={styles.customHeaderCellRequirements}>
                                Nombre de la Solicitud
                            </div>
                        </th>
                        <th style={{ width: "150px" }}>
                            <div className={styles.customHeaderCellRequirements}>
                                Responsable
                            </div>
                        </th>
                        <th style={{ width: "120px" }}>
                            <div className={styles.customHeaderCellRequirements}>
                                Fecha Vencimiento solicitud{" "}
                            </div>
                        </th>
                        <th style={{ width: "80px" }}>
                            <div className={styles.customHeaderCellRequirements}>Estado </div>
                        </th>
                        <th style={{ width: "100px" }}>
                            <div className={styles.customHeaderCellRequirements}>
                                Solicitado Por{" "}
                            </div>
                        </th>
                        <th style={{ width: "20px" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr
                            key={index}
                            className={cx({
                                [styles.customRowGrupo]: index % 2 === 0,
                            })}
                        >
                            <td
                                className={styles.customCellProject}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <div className={styles.spanProject}>
                                    <span className={styles.spanProject} title={item.project}>
                                        {toCamelCase(item.visita.label)}
                                    </span>
                                </div>
                            </td>
                           
                            <td className={[styles.customCell, styles.nameRequest]}>
                                <span
                                    className={[styles.nameRequest]}
                                    title={item.titulo}
                                >
                                    {" "}
                                    {toCamelCase(item.titulo) || null}
                                </span>
                            </td>
                            <td>
                                {item?.usuario_responsable?.label}
                            </td>
                            <td
                                style={{
                                    color: item?.status === "VENCIDO" ? "#FF0B0B" : "inherent",
                                }}
                            >
                                {item?.fecha_vencimiento}
                            </td>
                            <td>
                                {" "}
                                <div className={styles.statusContainer}>
                                    <StatusInidicator state={item?.status} />
                                    {toCamelCase(item?.status)}
                                </div>
                            </td>
                            <td >
                                {item?.created_by?.label}
                            </td>
                            <td className={styles.containerActions}>
                                {item?.status.toLowerCase() === filters[1] && (
                                    <AlertReturned variant={2} />
                                )}
                                {item.borrador ? (
                                    <AlertReturned
                                        variant={2}
                                        title="Borrador"
                                        component={(props) => (
                                           <Edit/>
                                        )}
                                    />
                                ): (

                                <AlertReturned
                                    variant={2}
                                    title="Ver"
                                    component={(props) => (
                                        <LayoutAll
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setOpenRequirementDetail(true);
                                            }}
                                            {...props}
                                        />
                                    )}
                                />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog open={openRequiremenetDetail} fullWidth maxWidth="sm">
                <DialogTitle>
                    <div
                        style={{
                            display: "flex",
                            borderBottom: "1px solid #ABABAB",
                            justifyContent: "space-between",
                        }}
                    >
                        <div className={styles.requirementsInformationTitleModal}>
                            Solicitud de información
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <CloseIcon
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenRequirementDetail(false);
                                }}
                            />
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50vw",
                        gap: "10px",
                    }}
                >
                    <div> Proyecto Coca-Cola Auditoria 2023</div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ fontWeight: "bold", fontSize: "24px" }}>
                            Conciliaciones Bancarias 31.12.2023
                        </div>{" "}
                        <div style={{ flexDirection: "column", paddingRight: 30 }}>
                            <div style={{ fontWeight: "bold" }}>Estado</div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <StatusInidicator state={"Vencido"} />
                                <div>Vencido</div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr", // Dos columnas
                            gridTemplateRows: "auto auto auto", // Tres filas, ajusta según necesites
                            gap: "10px",
                        }}
                    >
                        {" "}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {" "}
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ fontWeight: "bold", marginRight: "10px" }}>
                                    Fase Auditoria:
                                </div>
                                <div>Ejecución</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ fontWeight: "bold", marginRight: "10px" }}>
                                    Rubro:
                                </div>
                                <div>Efectivo y Equivalentes</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                {" "}
                                <div style={{ fontWeight: "bold", marginRight: "10px" }}>
                                    Visita:
                                </div>
                                <div>Ejecución</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                {" "}
                                <div style={{ fontWeight: "bold", marginRight: "10px" }}>
                                    Fecha de Vencimiento de la solicitud :
                                </div>
                                <div> 12/12/2023</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ fontWeight: "bold", marginRight: "10px" }}>
                                    Asignado Por:
                                </div>
                                <div>Texto de la columna 2</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ fontWeight: "bold", marginRight: "10px" }}>
                                    Responsable:
                                </div>
                                <div>Texto de la columna 2</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ fontWeight: "bold", marginRight: "10px" }}>
                                    Con Copia A::
                                </div>
                                <div>Texto de la columna 2</div>
                            </div>
                        </div>
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                borderBottom: "1px solid #C7C7C7",
                                width: "100%",
                                gridColumn: "1 / span 2",
                            }}
                        >
                            Información requerida
                        </div>
                        <div style={{ gridColumn: "1 / span 2" }}>
                            Solicito por favor me haga llegar las conciliaciones bancarias del
                            mes de Enero hasta Diciembre del 2023
                        </div>
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                borderBottom: "1px solid #C7C7C7",
                                width: "100%",
                                gridColumn: "1 / span 2",
                            }}
                        >
                            Documentos Solicitados
                        </div>
                        <div
                            style={{
                                maxHeight: 450,
                                overflow: "auto",
                                gridColumn: "1 / span 2",
                            }}
                        >
                            <DocumentRequirementManagement state="finalizaado" />
                            <DocumentRequirementManagement state="en_proceso" />
                            <DocumentRequirementManagement state="en_proceso" />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <>
                        <div style={{ marginRight: 40, gap: 10, display: "flex" }}>
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
                                    width: 80,
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
                                    width: 80,
                                }}
                            >
                                Aceptar
                            </Button>
                        </div>
                    </>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default RequirementsTable
