const initialState = {
    listings: [],
    modal: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return {
                ...state,
                listings: action.payload
            };

        case 'TOGGLE_MODAL':
            return {
                ...state,
                modal: !state.modal
            };
        
        default:
            return state;
    };
};