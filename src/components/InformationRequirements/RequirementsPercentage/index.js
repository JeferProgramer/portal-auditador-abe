import { useEffect, useState } from "react";
import styles from "./RequirementsPercentage.module.scss";
import {
    Dialog,
    DialogContent,
} from "@mui/material";
import CloseIcon from "@/Icons/CloseIcon";
import FiltersGenerals from "@/components/FiltersGenerals/Filters";
import RequirementsTable from "../RequirementsList/RequirementsTable";
import CustomBarChart from "@/components/CustomBarChart";
import { BarChartData } from "@/utils/BarChartData";
import { countStates, formatDataBarChart } from "@/helpers/format";
import MessageEmpty from "@/components/MessangeEmpty";

const RequirementsPercentage = ({ data, viewsRender }) => {
    const [barChartFormattedData, setBarChartFormattedData] = useState(data);
    const [localData, setLocalData] = useState(data);
    const [selectedBarData, setSelectedBarData] = useState(null);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [filteredTableData, setFilteredTableData] = useState([]);

    useEffect(() => {
        setLocalData(data)
    }, [data])


    useEffect(() => {
        if (localData?.length > 0) {
            const stateCount = countStates(localData);
            const totalItems = localData.length;
            const formattedData = formatDataBarChart(BarChartData, stateCount, totalItems)
            setBarChartFormattedData(formattedData);
        }
    }, [localData]);

    const handleBarClick = (barData) => {
        setFilteredTableData(() =>
            localData.filter((InfoRequestItem) => {
                return InfoRequestItem?.status === barData.selectValue;
            })
        );
        setSelectedBarData(barData);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <>
            <div className={styles.observationsFieldContainer}>
                <FiltersGenerals data={data} setData={setLocalData} />
                {viewsRender()}
            </div>
            <div>
                <CustomBarChart
                    data={barChartFormattedData || []}
                    onBarClick={handleBarClick}
                />

                <Dialog fullWidth open={isDialogOpen} onClose={handleCloseDialog}>
                    <DialogContent>
                        <div style={{ width: "80vw", marginTop: 15 }}>
                            <div
                                title="Cerrar"
                                style={{
                                    position: "absolute",
                                    right: 3,
                                    top: 3,
                                    zoom: 1.3,
                                }}
                            >
                                <div style={{ position: "relative" }}>
                                    <CloseIcon
                                        style={{ cursor: "pointer" }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCloseDialog();
                                        }}
                                    />
                                </div>
                            </div>{" "}
                            {filteredTableData.length > 0 ? (
                                <RequirementsTable data={filteredTableData} />
                            ) : (
                                <MessageEmpty title={"No se encontró información."} />
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default RequirementsPercentage;