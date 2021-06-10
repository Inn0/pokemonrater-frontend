import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Popup from '../../components/Popup'

const AbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
`

const AbilityRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    min-height: 30px;
    margin: 10px; 
    margin-bottom: 0;
    margin-top: 5px;
    line-height: 30px;
`

const Ability = styled.p`
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 18px;
    margin-right: 10px;
`

const AbilityTitle = styled.p`
    font-weight: 550;
    margin: 0;
    padding: 0;
    font-size: 18px;
    width: fit-content;
    margin-right: 5px;
`

function Abilities(props) {
    const [popup, setPopup] = useState(false)
    const [ability, setAbility] = useState()

    const closePopup = () => {
        setPopup(false)
    }

    return (
        <AbilitiesContainer>
            <AbilityRow>
                <AbilityTitle>Abilities:</AbilityTitle>
                <Ability onClick={() => {setPopup(true); setAbility(props.abilities[0].id)}}>{props.abilities[0].name}</Ability>
                {props.abilities.length > 2 &&
                    <Ability onClick={() => {setPopup(true); setAbility(props.abilities[1].id)}}>{props.abilities[1].name}</Ability>
                }
            </AbilityRow>
            {props.abilities.length > 1 &&
                <AbilityRow>
                    <AbilityTitle>Hidden ability:</AbilityTitle>
                    <Ability onClick={() => {setPopup(true); setAbility(props.abilities[props.abilities.length - 1].id)}}>{props.abilities[props.abilities.length - 1].name}</Ability>
                </AbilityRow>
            }
            {popup &&
                <Popup close={closePopup} ability={ability}/>
            }
        </AbilitiesContainer>
    );
}

export default Abilities;
