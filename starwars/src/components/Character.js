// Write your Character component here
import React from 'react'
import styled from "styled-components";

const RickBox = styled.div`
    display: flex;
flex-direction: row;
align-items: flex-start;
align-content: flex-start;
justify-content: space-evenly;
padding: 10vh 0 0;
background-color: rgba(217, 184, 192, 0.7);
color:white;
`;

const InfoDiv = styled.div`
display: flex
flex-direction: column;
max-width: 70%;
`

const RickInfo = styled.p` 
font-size: 16px;
display: flex;
justify-content: space-evenly;
`;

const StyledH1 = styled.h1`
font-size: 25px;
font-weight: bold;
margin: 16px;
color: #33FF38;
padding: 10px;
background-color: black;
border-radius: 25px;
  border: 2px solid #73AD21;
`;




const CharacterComponent = ({ name, species, gender, status }) => {
    return (
        <RickBox>
        <InfoDiv>
        
            <StyledH1>{name}</StyledH1>

            <RickInfo style={{fontWeight: "bold", color: "grey"}}>Species:</RickInfo> <RickInfo>{species}</RickInfo>
            <RickInfo style={{fontWeight: "bold", color: "grey"}}>Gender:</RickInfo> <RickInfo> {gender}</RickInfo>
            <RickInfo style={{fontWeight: "bold", color: "grey"}}>Status:</RickInfo> <RickInfo> {status}</RickInfo>
        </InfoDiv>
        </RickBox>
    )
}

export default CharacterComponent;
