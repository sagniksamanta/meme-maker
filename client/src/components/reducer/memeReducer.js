const memeReducer = (state = [], action) => {
    switch(action.type){
        case 'MEMEFILE':
            return [ action.data ];
        default:
            return state;    
    }
};

export default memeReducer;