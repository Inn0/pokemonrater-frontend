import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: calc(100vw - 40px);
    margin: 10px;
    background-color: lightgrey;
    padding: 10px;
    border-radius: 5px;
`

const Title = styled.p`
    font-size: 16px;
    margin: 0;
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
                <Title>#{props.pokemon.id}, {props.pokemon.name}</Title>
            </Container>
        </StyledLink>

    );
}

export default ResultItem;
