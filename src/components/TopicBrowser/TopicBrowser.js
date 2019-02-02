import React, { Component } from 'react';


import EvenAndOdd from '../Topics/EvenAndOdd.js';
import FilterObject from '../Topics/FilterObject.js';
import Filterstring from '../Topics/FilterString.js';
import Palindrome from '../Topics/Palindrome.js';
import Sum from '../Topics/Sum.js';



class TopicBrowser extends Component {

    render(){
        return (
            <div>
                <EvenAndOdd />
                <FilterObject />
                <Filterstring />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}

export default TopicBrowser;