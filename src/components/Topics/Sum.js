import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            value1: 0,
            value2: 0,
            sum: null
        }
    }

    handleChange1(value){
        this.setState({
            value1: parseInt(value, 10)
        })
    }

    handleChange2(value){
        this.setState({
            value2: parseInt(value, 10)
        })
    }

    sum(value1, value2){
        this.setState ({
            sum: value1 + value2,
            value1: 0,
            value2: 0
        })
    }

    

    render(){
        return (
            <div className="puzzleBox sumPB">
            <h4>Sum</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange1(e.target.value)}  value={this.state.value1}></input>
                <input className="inputLine" onChange={ (e) => this.handleChange2(e.target.value)}  value={this.state.value2}></input>
                <button className="confirmationButton" onClick={ () => this.sum(this.state.value1,this.state.value2)} > Add </button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;