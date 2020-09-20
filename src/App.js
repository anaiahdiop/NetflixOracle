import React from 'react';
import './styles.css';
import PartyList from './PartyList';
import data from './data';

export default function App(){
  return(
    <div className= "App">
      <h1>Netflix Oracle</h1>
      <PartyList UserList={data.userData} myList={[
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
          }/>
    </div>
  );
}
