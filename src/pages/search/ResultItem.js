import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DARKTHEME } from '../../constants/colors'

const Container = styled.div`
    width: calc(100vw - 40px);
    margin: 10px;
    background-color: ${DARKTHEME.color1};
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
`

const Title = styled.p`
    font-size: 16px;
    margin: 0;
    color: ${DARKTHEME.textColor};
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: auto;
`

function ResultItem(props) {
    return (
        <StyledLink to={"/pokemon/" + props.pokemon.name}>
            <Container to={"/pokemon/" + props.pokemon.name}>
                <Title>#{props.pokemon.id}, {props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</Title>
            </Container>
        </StyledLink>

    );
}

export default ResultItem;
