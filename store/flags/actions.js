import {
    CHANGE_SELECTED_TAB,
    TOGGLE_SIDE_MENU,
} from './constants';

export const handleChangeSelectedTab = (payload) => ({
    type: CHANGE_SELECTED_TAB,
    payload
})

export const toggleSideMenu = (payload) => ({
    type: TOGGLE_SIDE_MENU,
    payload
})
