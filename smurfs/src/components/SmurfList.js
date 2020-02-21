import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

function SmurfList(props){
    console.log('SmurfList props: ', props);
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }
    return (
        <div>
            {props.isFetchingData === true ?
            <div>Fetching data from the server...</div> :
            <button onClick={handleGetData}>Get Smurfs</button>}
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