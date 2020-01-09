const initialState = {
    listings: [],
    addListingModal: false,
    createListingModal: false,
    editListingModal:  false,
    editListingModalInput: {}
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return {
                ...state,
                listings: action.payload
            };

        case 'TOGGLE_ADD_LISTING_MODAL':
            return {
                ...state,
                addListingModal: !state.addListingModal
            };

        case 'TOGGLE_EDIT_LISTING_MODAL':
            return {
                ...state,
                editListingModal: !state.editListingModal
            };

        case 'UPDATE_EDIT_LISTING_MODAL_INPUT':
            return {
                ...state,
                editListingModalInput: action.payload
            };
        
        default:
            return state;
    };
};