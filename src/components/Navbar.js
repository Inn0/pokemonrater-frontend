import React from 'react'
import styled from 'styled-components'
import { VALUES } from '../constants/values'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.div`
    height: ${VALUES.navbarHeight};
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: grey;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    line-height: ${VALUES.navbarHeight};
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: auto;
`

function Navbar() {
    return (
        <NavbarContainer>
            <StyledLink to="/pokemon">Pokemon</StyledLink>
            <StyledLink to="/">Search</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
        </NavbarContainer>
    )
}

export default Navbar