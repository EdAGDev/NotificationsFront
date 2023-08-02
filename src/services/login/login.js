import { api } from '../../helpers/axios';

export const setLogin = async (values) => {
    try {
        await api.post(`/Accounts/login`, values)
            .then(resp => {
                localStorage.setItem("token", resp.data.token);
                // navigate('/dashboard', { replace: true });
                window.location.href = "/dashboard";
            })
            .catch(err => console.log(err.response));
    } catch (error) {
        console.warn(error)
    }
    return null;
}