import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { VALUES } from '../../constants/values'
import { Link } from "react-router-dom"
import { FaChevronLeft } from 'react-icons/fa'
import { DARKTHEME } from '../../constants/colors'
import FavoriteItem from './FavoriteItem'
import Spacer from '../../components/Spacer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 50px;
    max-height: 50px;
    line-height: 50px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-height: calc(100vh - ${VALUES.navbarHeight} - 50px);
`

const Back = styled(Link)`
    text-decoration: none;
    color: black;
`

const BackChevron = styled(FaChevronLeft)`
    width: 30px;
    height: 30px;
    margin: 5px;
    margin-top: 10px;
    margin-right: 10px;
    color: ${DARKTHEME.textColor};
`

const HeaderTitle = styled.p`
    color: ${DARKTHEME.textColor};
    font-size: 28px;
    margin: 0;
    padding: 0;
    font-weight: 550;
`

function Favorites() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        let temp = JSON.parse(localStorage.getItem('favorites'))

        if (temp == null) {
            temp = []
        }

        setFavorites(temp)
        console.log(temp)
    }, [])

    return (
        <Container>
            <HeaderContainer>
                <Back to="/">
                    <BackChevron></BackChevron>
                </Back>
                <HeaderTitle>
                    Favorites
                </HeaderTitle>
            </HeaderContainer>
            <ContentContainer>
                {favorites.map(pokemon => {
                    return <FavoriteItem id={pokemon} key={pokemon}></FavoriteItem>
                })}
                <Spacer></Spacer>
            </ContentContainer>
        </Container>
    );
}

export default Favorites;
