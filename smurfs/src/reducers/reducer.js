const initialState = {
    smurfs: [],
    isFetchingData: false,
    isPostingData: false,
    isPuttingData: false,
    isDeletingData: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}