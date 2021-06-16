import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DARKTHEME } from '../../constants/colors'
import Type from '../pokemon/Type'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin-bottom: 5px;
    min-height: 150px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    background-color: ${DARKTHEME.color1};
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 40px;
    line-height: 40px;
    margin-left: 10px;
    margin-right: 10px;
`

const Title = styled.p`
    font-size: 22px;
    font-weight: 550;
    margin: 0;
    padding: 0;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 110px;
`

const Sprite = styled.img`
    margin: auto
    width: 100px;
    height: 100px;
    padding: 5px;
`

const TypeContaier = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    justify-content: center;
`

const RemoveIcon = styled(FaTrash)`
    width: 25px;
    height: 25px;
    padding: 7.5px;
    margin-right: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${DARKTHEME.textColor};
`

function FavoriteItem(props) {
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://pokemonrater-api.herokuapp.com/pokemon/name/' + props.id)
            .then(res => res.json())
            .then(res => {
                setPokemon(res);
                setLoading(false);
            })
    }, [])

    var removeFromFavorites = (e) => {
        e.stopPropagation()

        let temp = JSON.parse(localStorage.getItem('favorites'))

        if (temp.includes(pokemon.id)) {
            let index = temp.indexOf(pokemon.id)
            if (index > -1) {
                temp.splice(index, 1)
            }
        }

        localStorage.setItem('favorites', JSON.stringify(temp))
        window.location.href = '/favorites'
    }

    return (
        <div>
            {!loading &&
                <Container>
                    <TitleContainer>
                        <StyledLink to={"/pokemon/" + pokemon.name}>
                            <Title>#{pokemon.id}, {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Title>
                        </StyledLink>
                        <RemoveIcon onClick={removeFromFavorites}></RemoveIcon>
                    </TitleContainer>
                    <ContentContainer>
                        <Sprite src={pokemon.sprites.default}></Sprite>
                        <TypeContaier>
                            {pokemon.types.map(type => {
                                return <Type key={type.id} type={type.name} />
                            })}
                        </TypeContaier>
                    </ContentContainer>
                </Container>
            }
        </div>
    );
}

export default FavoriteItem;
