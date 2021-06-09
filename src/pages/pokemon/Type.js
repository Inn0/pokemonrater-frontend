import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

const TypeContainer = styled.div`
    width: 75px;
    height: 30px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 4px;
    color: white;
    line-height: 30px;
    text-align: center;
    text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
`

const TypeTitle = styled.p`
    margin: auto;
`

function Type(props) {
    const [bgColor, setBgColor] = useState("#aa9")

    useEffect(() => {
        switch(props.type){
            case "normal": setBgColor(COLORS.normal); break;
            case "fire": setBgColor(COLORS.fire); break;
            case "water": setBgColor(COLORS.water); break;
            case "electric": setBgColor(COLORS.electric); break;
            case "grass": setBgColor(COLORS.grass); break;
            case "ice": setBgColor(COLORS.ice); break;
            case "fighting": setBgColor(COLORS.fighting); break;
            case "poison": setBgColor(COLORS.poison); break;
            case "ground": setBgColor(COLORS.ground); break;
            case "flying": setBgColor(COLORS.flying); break;
            case "psychic": setBgColor(COLORS.psychic); break;
            case "bug": setBgColor(COLORS.bug); break;
            case "rock": setBgColor(COLORS.rock); break;
            case "ghost": setBgColor(COLORS.ghost); break;
            case "dragon": setBgColor(COLORS.dragon); break;
            case "dark": setBgColor(COLORS.dark); break;
            case "steel": setBgColor(COLORS.steel); break;
            case "fairy": setBgColor(COLORS.fairy); break;
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
