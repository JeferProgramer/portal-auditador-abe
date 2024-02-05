import { getUniqueObjects, mapDataToOptions, normalizeString, searchInsensitive } from '@/helpers/format';
import { getProjectIdFromURL } from '@/helpers/idProject';
import React, { useCallback, useEffect, useState } from 'react';
import SelectPortal from '../SelectPortal';

const FiltersGenerals = ({ data, setData, searchTerm, column = false, setDataFilters = () => { }, setActivate = () => { }, }) => {
    const id_proyecto = getProjectIdFromURL();
    const [selectedProject, setSelectedProject] = useState(id_proyecto);
    const [selectedVisit, setSelectedVisit] = useState(null);
    const [selectedResponsible, setSelectedResponsible] = useState(null);

    const getOptions = useCallback((items, selected, allLabel) => {
        // const filteredItems = selected ? data?.filter(item => item.proyecto.id === selected).map(item => item.visita) : items;
        return getUniqueObjects(items, 'id', { label: allLabel, value: "" });
    }, [data]);

    const visits = getOptions(data?.map(item => item.visita), selectedProject, "- Todos las Visitas -");
    const responsibles = getOptions(data?.map(item => item.usuario_responsable), null, "- Todos los Responsables -");

    const handleFilterChange = (type, value) => {
        switch (type) {
            case "visit":
                setSelectedVisit(value);
                setActivate(true);
                break;
            case "responsible":
                setSelectedResponsible(value);
                setActivate(true);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const filteredData = searchInsensitive(searchTerm, data);
        const filteredAndSelectedData = filteredData?.filter((item) => {
            return (
                // (!selectedProject || (selectedProject !== "" && item.proyecto.id === selectedProject)) &&
                (!selectedVisit || (selectedVisit !== "" && item.visita.id === selectedVisit)) &&
                (!selectedResponsible || (selectedResponsible && item.usuario_responsable.id === selectedResponsible))
            );
        });
        setData(filteredAndSelectedData);
        setDataFilters(filteredAndSelectedData);
    }, [selectedProject, selectedVisit, selectedResponsible, searchTerm]);

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
