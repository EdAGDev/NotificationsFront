import { api } from '../../helpers/axios'

export const getChannels = async () => {
    try {
        const { data } = await api.get(`/channels`);
        return data;
    } catch (error) {
        console.warn(error)
    }
    return null;
}

export const getTypesChannels = async () => {
    try {
        const { data } = await api.get(`/channels/types`);
        return data;
    } catch (error) {
        console.warn(error)
    }
    return null;
}

export const updateSubcriptions = async (values) => {
    try {
        const { data } = await api.put(`/channels`, values);
        return data;
    } catch (error) {
        console.warn(error)
    }
    return null;
}