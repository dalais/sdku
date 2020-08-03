export const SESSION_EXAMPLE = 'SESSION_EXAMPLE';

function sessionAction(payload) {
    return {type: SESSION_EXAMPLE, payload}
}

const sessionReducer = (state = {example:null}, action) => {
    switch (action.type) {
        case 'SESSION_EXAMPLE':
            return state.example = action.payload;
        default:
            return state;
    }
};

export {sessionReducer,sessionAction};