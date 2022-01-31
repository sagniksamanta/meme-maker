import * as api from '../api';

export const signin = (formData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch ({
            type: 'LOGIN',
            data
        });
        
        navigate('/dashboard');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch ({
            type: 'LOGIN',
            data
        });

        navigate('/dashboard');
    } catch (error) {
        console.log(error);
    }
}