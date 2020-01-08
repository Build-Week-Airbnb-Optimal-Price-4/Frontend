const initialState = {
    listings: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return {
                ...state,
                listings: action.payload
            };
        
        default:
            return state;
    };
};