import axiosApiInstance from "./axiosInterceptor"

export const getResponsibleUsers= async () => {
    const response = await axiosApiInstance.get(`/general/usuario_responsable/`)
    return response.data
}