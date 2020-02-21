import { FETCH_DATA, UPDATE_SMURFS, POST_DATA } from '../actions';

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
        case POST_DATA:
            console.log('Posting data...');
            return {
                ...state,
                isPostingData: true
            }
        default:
            return state;
    }
}