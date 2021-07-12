import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DARKTHEME } from '../constants/colors'

const PopupOverlay = styled.div`
    position: fixed;
    width: 100%;
    // height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
`

const PopupContainer = styled.div`
    position: absolute;
    left: 10%;
    right: 10%;
    margin: auto;
    background: ${DARKTHEME.color2};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    top: 50%;
    transform: translateY(-50%);
`

const PopupBody = styled.div`
    display: flex;
    // height: calc(100% - 60px);
    width: 100%:
    margin: 5px;
`

const CloseButton = styled.div`
    display: flex;
    background-color: red;
    text-align: center;
    height: 40px;
    margin: 5px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: ${DARKTHEME.textColor};
    justify-content: center;
    border-radius: 5px;
`

const PopupContent = styled.div`
    margin: 5px;
    width: 100%;
    text-align: center;
`

const PopupTitle = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    font-size: 22px;
    font-weight: 550;
`

function Popup(props) {
    const [ability, setAbility] = useState()

    useEffect(() => {
        fetch('https://pokemonrater-api.herokuapp.com/ability/' + props.ability)
            .then(res => res.json())
            .then(res => { setAbility(res) })
    }, [])

    return (
        <PopupOverlay>
            <PopupContainer>
                <PopupBody>
                    {ability &&
                        <PopupContent>
                            <PopupTitle>{ability.name}</PopupTitle>
                            <p>{ability.effect}</p>
                        </PopupContent>
                    }
                </PopupBody>
                <CloseButton onClick={props.close}>
                    Close
                </CloseButton>
            </PopupContainer>
        </PopupOverlay>
    );
}

export default Popup;
