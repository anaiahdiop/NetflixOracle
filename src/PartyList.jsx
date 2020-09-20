import React, {Component} from 'react';

export default class PartyList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        movies:[
            "Star-Trek",
            "Finding Nemo", 
            "Zodiac",
            "Iron Man 3",
            "Ender's Game",
            "World War Z",
            "The Secret Life Of Pets",
            "The Wind Rises",
            "The Warriors",
            "The Rescuers",
            "Speed",
            "Braveheart",
            "Top Gun",
            "The Lego Movie",
            "Branded",
            "Elysium",
            "Dredd",
            "The Road",
            "Sound City",
            "Antz"
            ] 
    }

    return(
        <div>
            {this.state.movies.map(movie => (
                <li>{movie}</li>
            ))}
        </div>
    );
 }
}