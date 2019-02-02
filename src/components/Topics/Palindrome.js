import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super(),
        this.state = {
            userInput: '' ,
            Palindrome: ''
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })

    }

    makePalindrome(value) {
        let palindrome = '';
        for ( let i=value.length; i>=0; i--) {
            palindrome = palindrome + value.charAt(i);
        }

        if (palindrome === value) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }

        this.setState({
            userInput: '',
        })
    }

    

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)} value={this.state.userInput} ></input>
                <button className="confirmationButton" onClick={ () => this.makePalindrome(this.state.userInput) } > Filter </button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}

export default Palindrome;