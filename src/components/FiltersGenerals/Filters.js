import { getUniqueObjects, mapDataToOptions, normalizeString, searchInsensitive } from '@/helpers/format';
import React, { useCallback, useEffect, useState } from 'react';
import SelectPortal from '../SelectPortal';

const FiltersGenerals = ({ data, setData, searchTerm, column = false, setDataFilters = () => { }, setActivate = () => { }, disabledProject = false }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedVisit, setSelectedVisit] = useState(null);
    const [selectedResponsible, setSelectedResponsible] = useState(null);

    const getOptions = useCallback((items, selected, allLabel) => {
        const filteredItems = selected ? data?.filter(item => item.proyecto.id === selected).map(item => item.visita) : items;
        return getUniqueObjects(filteredItems, 'id', { label: allLabel, value: "" });
    }, [data]);

    const projects = getOptions(data?.map(item => item.proyecto), null, "- Todos los Proyectos -");
    const visits = getOptions(data?.map(item => item.visita), selectedProject, "- Todos las Visitas -");
    const responsibles = getOptions(data?.map(item => item.usuario_responsable), null, "- Todos los Responsables -");

    const handleFilterChange = (type, value) => {
        switch (type) {
            case "project":
                setSelectedProject(value);
                setActivate(true);
                break;
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
                (!selectedProject || (selectedProject !== "" && item.proyecto.id === selectedProject)) &&
                (!selectedVisit || (selectedVisit !== "" && item.visita.id === selectedVisit)) &&
                (!selectedResponsible || (selectedResponsible && item.usuario_responsable.id === selectedResponsible))
            );
        });
        setData(filteredAndSelectedData);
        setDataFilters(filteredAndSelectedData);
    }, [selectedProject, selectedVisit, selectedResponsible, searchTerm]);

    return (
        <div style={{ display: "flex", marginRight: "2vw", gap: 10, flexDirection: column ? "column" : "row" }}>
            {!disabledProject && (
                <SelectPortal
                    title={"Proyecto"}
                    placeholder={"Selecciona Proyecto"}
                    options={mapDataToOptions(projects)}
                    handleChange={(value) => handleFilterChange("project", value)}
                />
            )}
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
