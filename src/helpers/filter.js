export function advancedFilterData(data, estadoCheckboxState) {
    let filteredData = data;

    if (Object.keys(estadoCheckboxState).some(key => estadoCheckboxState[key])) {
        filteredData = filteredData.filter(item => estadoCheckboxState[item.status]);
    }
    return filteredData;
}
