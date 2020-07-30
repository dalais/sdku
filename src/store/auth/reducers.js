const authReducer = (state = {auth:null}, action) => {
    switch (action.type) {
        case 'AUTH':
            return state.auth = action.payload;
        default:
            return state;
    }
};

export default authReducer;