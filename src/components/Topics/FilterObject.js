import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
        employees: [
            {
                name: 'Jimmy Joe',
                title: 'Hack0r',
                age: 12,
            },
            {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
            },
            {
                name: 'Carly Armstrong',
                title: 'CEO',
            }
            ],
    
        userInput: '',
        filteredEmployees: []
    }
        
    }

    handleUpdate(value){
        this.setState({
            userInput: value
        }) 
    }

    

    

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">{this.state.filteredArray} </span>
            <input className="inputLine" />
            <button className="confirmationButton" onClick={ () => {this.handleUpdate(this.state.userInput)}} >Filter</button>
            <span className="resultsBox filterObjectRB"> {this.state.unFilteredArray}</span>
    
            </div>
        )
    }
}

export default FilterObject;