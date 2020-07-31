const authReducer = (state = {base:null}, action) => {
    switch (action.type) {
        case 'AUTH':
            return state.base = action.payload;
        default:
            return state;
    }
};

export default authReducer;