import axiosApiInstance from "./axiosInterceptor"

export const getRequirements = async (id_proyecto) => {
    const response = await axiosApiInstance.get(`/proyecto/${id_proyecto}/solicitud_archivo/`)
    return response.data
}