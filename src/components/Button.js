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
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
    border: 1px solid rgba(0,0,0,0.5);

    &:hover {
        background-color: ${DARKTHEME.secondary};
        box-shadow: none;
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
