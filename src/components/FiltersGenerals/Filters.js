import { getUniqueObjects, mapDataToOptions } from '@/helpers/format';
import React, { useCallback } from 'react';
import SelectPortal from '../SelectPortal';

const FiltersGenerals = ({ data, column = false, disabledProject = false, selectedProject, handleFilterChange }) => {

    const getOptions = useCallback((items, selected, allLabel) => {
        const filteredItems = selected ? data?.filter(item => item.proyecto.id === selected).map(item => item.visita) : items;
        return getUniqueObjects(filteredItems, 'id', { label: allLabel, value: "" });
    }, [data]);

    const visits = getOptions(data?.map(item => item.visita), selectedProject, "- Todos las Visitas -");
    const responsibles = getOptions(data.map(item => item.usuario_responsable), null, "- Todos los Responsables -");


    return (
        <div style={{ display: "flex", marginRight: "2vw", gap: 10, flexDirection: column ? "column" : "row" }}>
            <SelectPortal
                title={"Visita"}
                placeholder={"Selecciona Visita"}
                options={mapDataToOptions(visits)}
                handleChange={(value) => handleFilterChange("visit", value)}
            />
            <SelectPortal
                title={"Responsable"}
                placeholder={"Selecciona Responsable"}
                options={mapDataToOptions(responsibles)}
                handleChange={(value) => handleFilterChange("responsible", value)}
            />
        </div>
    );
};

export default FiltersGenerals;
