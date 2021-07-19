import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DEFENSECOLORS } from '../constants/colors'

const Container = styled.div`
    width: 40px;
    height: 40px;
    border: 3px solid rgba(0,0,0,0.5);
    border-radius: 50%;
    color: white;
    line-height: 40px;
    text-align: center;
    text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
    margin: auto;
    display: flex;

    background-color: ${props => {
        switch(props.tier){
            case "E": return DEFENSECOLORS.black;
            case "D": return DEFENSECOLORS.darkRed
            case "C": return DEFENSECOLORS.red;
            case "B": return DEFENSECOLORS.green;
            case "A": return DEFENSECOLORS.brightGreen;
            case "S": return DEFENSECOLORS.gold;
            default: return DEFENSECOLORS.black;
        }
    }}
`

const Text = styled.p`
    margin: auto;
    font-size: 20px;
`

function TierIndicator(props) {
    let tier = "S"

    if (props.rating < 600) {
        tier = "E"
    } else if (props.rating >= 600 && props.rating < 800) {
        tier = "D"
    } else if (props.rating >= 800 && props.rating < 1000) {
        tier = "C"
    } else if (props.rating >= 1000 && props.rating < 1200) {
        tier = "B"
    } else if (props.rating >= 1200 && props.rating < 1400) {
        tier = "A"
    } else if (props.rating >= 1400) {
        tier = "S"
    }

    return (
        <Container tier={tier}>
            <Text>{tier}</Text>
        </Container>
    );
}

export default TierIndicator;
