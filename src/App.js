import React from 'react';
import './styles.css';
import PartyList from './PartyList';


export default function App(){
  return(
    <div className= "App">
      <h1>Netflix Oracle</h1>
      <h2>Add to your Party</h2>
    
      <h2>Party list:You,</h2>
      <PartyList />
    </div>
  );
}
