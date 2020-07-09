import { AUTH } from "../_actions";

const initialState = {};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return {
                number: state.number + 1
            };
        default:
            return state;
    }
};

export default reducer;