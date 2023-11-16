import {
    CHANGE_SELECTED_TAB,
    TOGGLE_SIDE_MENU
} from './constants';

const initialState = {
    selectedTab: 0,
    isMenuOpen: false,
}

const flags = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_TAB:
            return {
                ...state, //fetch all state data
                selectedTab: action.payload,
            }
        case TOGGLE_SIDE_MENU: 
            return {
                ...state,
                isMenuOpen: action.payload
            }
        default: 
            return state;
    }
}

export default flags;