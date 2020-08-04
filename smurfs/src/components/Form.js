import React from 'react';
import { connect } from 'react-redux';
import { postData, POST_DATA } from '../actions';

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
        console.log(this.props);
        e.preventDefault();
            const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        };
        postData(newSmurf);
    };

    render() {
        return (
            <div>
                <h2>Add a Smurf:</h2>
                <form>
                    <label>
                        Name: 
                        <input 
                            type='text'
                            value={this.state.name}
                            onChange={this.handleNameChanges}
                        />
                    </label>
                    <label>
                        Age:
                        <input
                            type='text'
                            value={this.state.age}
                            onChange={this.handleAgeChanges}
                        />
                    </label>
                    <label>
                        Height:
                        <input
                            type='text'
                            value={this.state.height}
                            onChange={this.handleHeightChanges}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
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
    { postData }
)(Form);