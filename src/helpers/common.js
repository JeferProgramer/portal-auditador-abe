/**
 * Verifica si un valor es nulo o indefinido.
 * 
 * Esta función determina si el valor proporcionado es estrictamente `null` o `undefined`.
 * 
 * @param {*} value - El valor que se desea verificar.
 * @returns {boolean} Retorna `true` si el valor es nulo o indefinido, de lo contrario retorna `false`.
 */
export const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};
