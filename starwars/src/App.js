import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'; 
import Character from './components/Character.js'
import styled from "styled-components";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.




  const [characters, setChar] = useState([]);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        console.log(response)
        setChar(response.data.results)
      })
      .catch(error => console.log('Error', error));
  }, []);
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <BackgroundDiv>
    <div className="App">
      <LargeHeader className="Header">Rick and Morty Characters</LargeHeader>
          {characters.map((characters) => <CharacterComponent 
          key={characters.id} 
          
          name={characters.name}
          species={characters.species}
          type={characters.type}
          gender={characters.gender}
          status={characters.status}
          />)}
        
    </div>
    </BackgroundDiv>
  );
}

export default App;
