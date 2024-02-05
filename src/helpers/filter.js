export function advancedFilterData(data, estadoCheckboxState) {
    let filteredData = data;

    if (Object.keys(estadoCheckboxState).some(key => estadoCheckboxState[key])) {
        filteredData = filteredData.filter(item => estadoCheckboxState[item.status]);
    }
    return filteredData;
}

export const filterBySelection = (data, selectedProject, selectedVisit, selectedResponsible) => {
    return data?.filter((item) => {
        return (
            (!selectedProject || (selectedProject !== "" && item.proyecto.id === selectedProject)) &&
            (!selectedVisit || (selectedVisit !== "" && item.visita.id === selectedVisit)) &&
            (!selectedResponsible || (selectedResponsible && item.usuario_responsable.id === selectedResponsible))
        );
    });
}
