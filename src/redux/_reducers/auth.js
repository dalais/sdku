import { AUTH } from "../_actions";
import axios from 'axios';

const initialState = {
    auth: null
};



export const checkAuth = () => {
    return axios.post(`api/auth`, {})
        .then(response => response.json())
};

const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return action.data;
        default:
            return state;
    }
};

export default authReduser;