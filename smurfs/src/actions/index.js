import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log('Response: ', res);
            dispatch({type: UPDATE_SMURFS, payload: res.data})
        })
        .catch(err => {
            console.error('The data was not returned', err);
        });
}

export const addSmurf = smurf => {
    return
}