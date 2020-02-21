import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
    state = {
        name : '',
        age : '',
        height : ''
    };

    handleNameChanges = e => {
        this.setState({ name: e.target.value });
    };
    handleAgeChanges = e => {
        this.setState({ age: e.target.value });
    };
    handleHeightChanges = e => {
        this.setState({ height: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    };
};

export default connect(
    mapStateToProps,
    { }
)(Form);