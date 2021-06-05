import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TypeContainer = styled.div`
    width: 75px;
    height: 30px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 4px;
    color: white;
    line-height: 30px;
    text-align: center;
    text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
    margin-left: 10px;
    margin-right: 10px;
`

const TypeTitle = styled.p`
    margin: auto;
`

function Type(props) {
    const [bgColor, setBgColor] = useState("#aa9")

    useEffect(() => {
        switch(props.type){
            case "normal": setBgColor("#aa9"); break;
            case "fire": setBgColor("#f42"); break;
            case "water": setBgColor("#39f"); break;
            case "electric": setBgColor("#fc3"); break;
            case "grass": setBgColor("#7c5"); break;
            case "ice": setBgColor("#6cf"); break;
            case "fighting": setBgColor("#b54"); break;
            case "poison": setBgColor("#a59"); break;
            case "ground": setBgColor("#db5"); break;
            case "flying": setBgColor("#89f"); break;
            case "psychic": setBgColor("#f59"); break;
            case "bug": setBgColor("#ab2"); break;
            case "rock": setBgColor("#ba6"); break;
            case "ghost": setBgColor("#66b"); break;
            case "dragon": setBgColor("#76e"); break;
            case "dark": setBgColor("#754"); break;
            case "steel": setBgColor("#aab"); break;
            case "fairy": setBgColor("#e9e"); break;
            default: console.log("Type not found..."); break;
        }
    }, [props.type])

    return (
        <TypeContainer style={{'backgroundColor': bgColor}}>
            <TypeTitle>{props.type.toUpperCase()}</TypeTitle>
        </TypeContainer>
    );
}

export default Type;
