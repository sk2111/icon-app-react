import { editIconActionTypes } from './edit-icon.type';

const INITIAL_STATE = {
    iconToEdit: {},
    isEditIconModalOpen: false,
};

const editIconReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case editIconActionTypes.EDIT_USER_SELECTED_ICON:
            return { ...state, isEditIconModalOpen: true, iconToEdit: { ...action.payload } };
        default:
            return state;
    }
};

export default editIconReducer;