import React from 'react'
import styled from 'styled-components'
import { VALUES } from '../constants/values'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FaSearch, FaStar } from 'react-icons/fa'

const NavbarContainer = styled.div`
    height: ${VALUES.navbarHeight};
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    line-height: ${VALUES.navbarHeight};
    box-shadow: 0px -2px 3px 2px rgba(0,0,0,0.1);
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
`

const NavTitle = styled.p`
    font-size: 16px;
    margin: 0;
    line-height: calc(${VALUES.navbarHeight} / 2);
    margin-top: -5px;
    font-weight: 550;
`

const SearchIcon = styled(FaSearch)`
    height: calc((${VALUES.navbarHeight} / 2) - 5px);
    width: calc((${VALUES.navbarHeight} / 2) - 5px);
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
`

const FaveIcon = styled(FaStar)`
    height: calc((${VALUES.navbarHeight} / 2) - 5px);
    width: calc((${VALUES.navbarHeight} / 2) - 5px);
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
`

function Navbar() {
    const location = useLocation()

    return (
        <NavbarContainer>
            <StyledLink to="/">
                <SearchIcon style={{ color: location.pathname === '/' ? "red" : "black" }}></SearchIcon>
                <NavTitle style={{ color: location.pathname === '/' ? "red" : "black" }}>Search</NavTitle>
            </StyledLink>
            <StyledLink to="/favorites">
                <FaveIcon style={{ color: location.pathname === '/favorites' ? "red" : "black" }}></FaveIcon>
                <NavTitle style={{ color: location.pathname === '/favorites' ? "red" : "black" }}>Search</NavTitle>
            </StyledLink>
        </NavbarContainer>
    )
}

export default Navbar