import {
    SELECTED_USER_TYPE
} from './constants';



export const selectedUserType = (payload) => ({
    type: SELECTED_USER_TYPE,
    payload
})