import { FETCH_DATA, UPDATE_SMURFS } from '../actions';

const initialState = {
    smurfs: [],
    isFetchingData: false,
    isPostingData: false,
    isPuttingData: false,
    isDeletingData: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            console.log('Fetching data...')
            return {
                ...state,
                isFetchingData: true,
                smurfs: []
            }
        case UPDATE_SMURFS:
            console.log('Updating Smurfs...');
            return {
                ...state,
                smurfs: action.payload,
                isFetchingData: false
            }
        default:
            return state;
    }
}