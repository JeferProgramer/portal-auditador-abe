import { isNullOrUndefined } from "@/helpers/common";
import axiosApiInstance from "./axiosInterceptor";

/**
 * Obtiene las visitas de proyecto específico.
 *
 * @param {number|null} id_proyecto - El ID del proyecto.
 * @returns {Promise<object|null>} - Una promesa que resuelve en los datos de la visita del proyecto o null si el ID de la visita es nulo o no se encuentra.
 */
export const getProyectoVisita = async (id_proyecto) => {
    if (!isNullOrUndefined(id_proyecto)) {
        const { data } = await axiosApiInstance.get(
            `/proyecto_visita/${id_proyecto}/`
        );
        return data;
    } else {
        return null;
    }
};