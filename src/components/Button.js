import React from 'react'
import styled from 'styled-components'
import { DARKTHEME } from '../constants/colors'

const ButtonBody = styled.div`
    min-width: 75px;
    height: 30px;
    width: fit-content;
    border-radius: 4px;
    color: ${DARKTHEME.textColor};
    background-color: ${DARKTHEME.primary};
    line-height: 30px;
    text-align: center;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    font-size: 18px;
    font-weight: 500;

    &:hover {
        background-color: ${DARKTHEME.secondary};
    }
`

const ButtonTitle = styled.p`
    margin: auto;
    margin-left: 10px;
    margin-right: 10px;
`

function Button(props) {
    return (
        <ButtonBody onClick={props.function}>
            <ButtonTitle>{props.title}</ButtonTitle>
        </ButtonBody>
    );
}

export default Button;
