import * as api from '../api';

export const submitMeme = (file) => async(dispatch) => {
    try {
        const { data } = await api.submitMeme(file);
        
    } catch (error) {
        console.log(error);
    }
}

export const getmemeData = (id) => async(dispatch) => {
    try {
        const {data} = await api.fetchMeme(id);

        dispatch({
            type: 'MEMEFILE',
            data
        })
    } catch (error) {
        console.log(error.message);
    }
    
}