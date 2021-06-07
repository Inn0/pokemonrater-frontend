import React from 'react'
import styled from 'styled-components'

const AbilitiesContainer = styled.div`
    margin: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Text = styled.p`
    margin: 0;
    padding: 0;
    font-size: 16px;
`

function Abilities(props) {
    return (
        <AbilitiesContainer>
            <Text><b>Abilities</b>: {props.abilities[0].name}{props.abilities.length > 2 ? ", " + props.abilities[1].name : ""}</Text>
            <Text><b>Hidden ability</b>: {props.abilities[props.abilities.length-1].name}</Text>
        </AbilitiesContainer>
    );
}

export default Abilities;
