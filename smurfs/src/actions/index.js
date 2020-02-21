import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const POST_DATA = 'POST_DATA';
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

export const postData = (smurf) => {
    console.log(smurf);
    axios
        .post(`http://localhost:3333/smurfs`, {
            name: smurf.name,
            age: smurf.age,
            height: smurf.height,
            id: smurf.id
        })
        .then(res => {
            console.log('Response: ', res);
        })
        .catch(err => {
            console.log('Error submitting data', err);
        });
}