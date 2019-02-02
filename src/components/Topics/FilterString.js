import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            names: ['Sam','Katie','Chris','Nicole','Justin', 'Samwise', 'Christine', 'Katherine'],
            userInput: '',
            filteredNames: []
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    filterNames(value) {
        console.log(value)
        let filtered = this.state.names.filter( (name) => name.includes(value) === true)
        console.log(filtered)
        this.setState({
            filteredNames: filtered,
            userInput: ''
        })
    }


    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.names, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)} value={this.state.userInput} />
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) } > Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames,null,10) }</span>
    
            </div>
        )
    }
}

export default FilterString;