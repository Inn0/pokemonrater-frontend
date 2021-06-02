import React from 'react'
import styled from 'styled-components'
import { VALUES } from '../constants/values'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: ${VALUES.navbarHeight};
    width: 100vw;
    background-color: red;
`

function Navbar() {
    return (
        <Container>
            navbar
        </Container>
    )
}

export default Navbar