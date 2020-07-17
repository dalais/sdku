export const AUTH = 'AUTH';

export default function authAction(payload) {
    return {type: AUTH, payload}
}