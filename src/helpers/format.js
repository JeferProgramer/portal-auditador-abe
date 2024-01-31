import { parse } from 'date-fns';
/**
 * Convierte una cadena a notación CamelCase.
 * 
 * Cambia el primer carácter de la cadena a mayúsculas y los restantes a minúsculas.
 * 
 * @param {string} str - La cadena de texto que se quiere convertir.
 * @returns {string} La cadena en notación CamelCase.
 */
export const toCamelCase = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
};

export const normalizeString = (str) => {
    if (str) {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    } else {
        return "";
    }
};

export function mapDataToEvents(data) {
    return data?.map((item, index) => {
        console.log("item", item.fecha_vencimiento);
        
        const date = parse(item.fecha_vencimiento, 'yyyy-MM-dd', new Date());
        console.log("date", date);
        return {
            title: item.titulo,
            start: date,
            end: date,
            extendedProps: {
                description: item.project,
                state: item.status,
                date_request: item.fecha_vencimiento,
                showExtend: false,
                index: index
            },
        };
    });
}

export const searchInsensitive = (term, data) => {
    const normalizedTerm = normalizeString(term);

    return data?.filter((item) =>
        Object.values(item).some(
            (value) =>
                value && normalizeString(value.toString()).includes(normalizedTerm)
        )
    );
};

export const formatDataBarChart = (BarChartData, stateCount, totalItems) => {
    const formattedData = BarChartData?.map((item) => {
        const state = item.selectValue;
        const count = stateCount[state] || 0;
        const percentage = (count / totalItems) * 100;

        return {
            ...item,
            value: percentage.toFixed(2),
            count,
        };
    });
    return formattedData;
}


export const countStates = (data = []) => {
    return data?.reduce((acc, currentItem) => {
        const state = currentItem.status;
        acc[state] = (acc[state] || 0) + 1;
        return acc;
    }, {});
};

export const mapDataToOptions = (data) => data?.map(item => ({ label: item.label, value: item.id }));

export const getUniqueObjects = (array, key, defaultOption) => {
    const uniqueObjects = array
        ? array.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t[key] === item[key]
            ))
        )
        : [];
    return defaultOption ? [defaultOption, ...uniqueObjects] : uniqueObjects;
}

export const getUniqueList = (data, key) => {
    let seen = {};
    return data?.filter(item => {
        return item[key] && !seen.hasOwnProperty(item[key]) ? (seen[item[key]] = true) : false;
    }).map(item => {
        return { name: item[key], label: item[key] }
    });
}
