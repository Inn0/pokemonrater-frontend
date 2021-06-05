import React from 'react'
import styled from 'styled-components'

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

function ResultItem(props) {
    return (
        <Container>
            <Title>#{props.pokemon.id}, {props.pokemon.name}</Title>
        </Container>
    );
}

export default ResultItem;
