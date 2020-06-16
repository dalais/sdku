import { ADD_ONE, MINUS_ONE } from "../_actions";

const initialState = {
    number: 1
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ONE:
            return {
                number: state.number + 1
            };
        case MINUS_ONE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
};

export default reducer;