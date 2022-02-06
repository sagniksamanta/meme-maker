const initialState = {};
const save_del_data = (state = initialState , action) => {
    switch(action.type){
        case "SAVING" :  localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
        return { ...state, ... action?.data };

        case "DELETING" :  localStorage.clear();
        return {};   
        default :return state;

    }
}



export  default save_del_data;

