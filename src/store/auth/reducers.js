import {AUTH} from "./actions"

const initialState = {};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return {...state, auth: action.payload };
        default:
            return state;
    }
};

export default authReducer;