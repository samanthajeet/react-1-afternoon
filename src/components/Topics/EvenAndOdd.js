import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray : [],
            oddArray : [],
            userInput : ``
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        }) 
    }

    assignEvenAndOdds(userInput) {
        let userArr = userInput.split(`,`)
        userArr = userArr.map( input => parseInt(input, 10))
        let remainingEvens = userArr.filter( (input) => input % 2 === 0)
        let remainingOdds = userArr.filter( (input) => input % 2 !== 0)  
        this.setState({
            evenArray: remainingEvens,
            oddArray: remainingOdds,
            userInput: ``
        })
    }

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange= { (e) => this.handleChange(e.target.value)} value={this.state.userInput} /> 
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}} > Split </button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)} </span> 
            </div>

        )
    }
}

export default EvenAndOdd;