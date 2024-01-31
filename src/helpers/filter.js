export function advancedFilterData(data, estadoCheckboxState, rubroCheckboxState) {
    let filteredData = data;

    if (Object.keys(estadoCheckboxState).some(key => estadoCheckboxState[key])) {
        filteredData = filteredData.filter(item => estadoCheckboxState[item.status]);
    }

    if (Object.keys(rubroCheckboxState).some(key => rubroCheckboxState[key])) {
        filteredData = filteredData.filter(item => rubroCheckboxState[item.rubro]);
    }

    return filteredData;
}
