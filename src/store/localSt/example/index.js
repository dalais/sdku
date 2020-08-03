export const LOCAL_EXAMPLE = 'LOCAL_EXAMPLE';

function localAction(payload) {
    return {type: LOCAL_EXAMPLE, payload}
}

const localReducer = (state = {example:null}, action) => {
    switch (action.type) {
        case 'LOCAL_EXAMPLE':
            return state.example = action.payload;
        default:
            return state;
    }
};

export {localReducer,localAction};