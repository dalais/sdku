export const AUTH = 'AUTH';

const authAction = userData => {
    return {
        type: AUTH,
        payload: userData
    }
};

export default authAction;