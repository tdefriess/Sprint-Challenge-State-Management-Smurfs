import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

function SmurfList(props){
    console.log('SmurfList props: ', props);
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }
    const handleDelete = e => {
        
        props.deleteSmurf();
    }
    return (
        <div>
            {props.isFetchingData === true ?
            <div>Fetching data from the server...</div> :
            <button onClick={handleGetData}>Get Smurfs</button>}
            <div>
                {props.smurfs.map(smurf =>
                    <div key={smurf.id}>
                        <h3>{smurf.name}</h3>
                        <p>{`Age: ${smurf.age}`}</p>
                        <p>{`Height: ${smurf.height}`}</p>
                        {/* <p onClick={handleDelete(smurf.id)}>x</p> */}
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    {getData}
)(SmurfList);