import axiosApiInstance from "./axiosInterceptor"

export const getRequirements = async () => {
    const response = await axiosApiInstance.get(`/solicitud_archivo/@me/`)
    return response.data
}