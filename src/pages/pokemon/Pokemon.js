import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components'
import { FaChevronLeft, FaRegHeart } from 'react-icons/fa'
import Stats from './Stats'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
`

const BackgroundColor = styled.div`
    width: 100vw;
    height: 200px;
    background-color: #c7c7c7;
    display: flex;
    justify-content: center;
    flex-direction: row;
    justify-content: space-between;
`

const Sprite = styled.img`
    margin: auto
    width: 200px;
    height: 200px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 50px;
    line-height: 50px;
`

const Name = styled.p`
    font-size: 24px;
    margin: 0;
    padding: 0;
`

const Back = styled(Link)`
    text-decoration: none;
    color: black;
`

const BackChevron = styled(FaChevronLeft)`
    width: 30px;
    height: 30px;
    padding: 10px;
    margin-top: 5px;
`

const Favorite = styled(FaRegHeart)`
    width: 30px;
    height: 30px;
    padding: 10px;
    margin-top: 5px;
`

const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #c7c7c7;
    height: 40px;
    line-height: 40px;
`

const Type = styled.p`
    font-size: 18px;
    margin: 0;
    margin-left: 10px;
    margin-right: 10px;
`

function Pokemon(props) {
    const { pokemonName } = useParams()
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://pokemonrater-backend.herokuapp.com/pokemon/' + pokemonName.toLowerCase())
            .then(res => res.json())
            .then(res => { setPokemon(res); setLoading(false) })
    }, [pokemonName])

    return (
        <Container>
            {!loading &&
                <ContentContainer>
                    <BackgroundColor>
                        <Back to="/search">
                            <BackChevron/>
                        </Back>
                        <Sprite src={pokemon.sprite.default} alt={pokemonName + " sprite"} />
                        <Favorite />
                    </BackgroundColor>
                    <TypeContainer>
                        {pokemon.types.map(type => {
                            return <Type key={type.id}>{type.name}</Type>
                        })}
                    </TypeContainer>
                    <Header>
                        <Name>
                            #{pokemon.id}, {pokemonName}
                        </Name>
                    </Header>
                    <Stats stats={pokemon.stats}/>
                </ContentContainer>
            }
        </Container>
    );
}

export default Pokemon;
