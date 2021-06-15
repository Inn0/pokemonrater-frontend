import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components'
import { FaChevronLeft, FaRegHeart, FaChevronRight, FaHeart } from 'react-icons/fa'
import Stats from './Stats'
import Type from './Type'
import { COLORS } from '../../constants/colors'
import Abilities from './Abilities'
import Defenses from './Defenses'
import { VALUES } from '../../constants/values'
import { DARKTHEME } from '../../constants/colors'
import Spacer from '../../components/Spacer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: ${DARKTHEME.background};
`

const BackgroundColor = styled.div`
    width: 100vw;
    height: 210px;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    flex-direction: row;
    justify-content: space-between;
`

const Sprite = styled.img`
    margin: auto
    width: 200px;
    height: 200px;
    padding: 5px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - ${VALUES.navbarHeight});
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    box-shadow: 0px -4px 3px 2px rgba(0,0,0,0.1);
`

const Name = styled.p`
    font-size: 24px;
    margin: 0;
    padding: 0;
`

const Back = styled(Link)`
    text-decoration: none;
    color: black;
    height: 50px;
`

const BackChevron = styled(FaChevronLeft)`
    width: 30px;
    height: 30px;
    padding: 10px;
    margin-top: 5px;
    color: ${DARKTHEME.color1};
`

const FavoriteIcon = styled(FaRegHeart)`
    width: 30px;
    height: 30px;
    padding: 10px;
    margin-top: 5px;
    color: ${DARKTHEME.color1};
`

const FavoriteIconFilled = styled(FaHeart)`
    width: 30px;
    height: 30px;
    padding: 10px;
    margin-top: 5px;
    color: ${DARKTHEME.color1};
`

const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 40px;
    line-height: 40px;
`

const PreviousButton = styled(FaChevronLeft)`
    color: black;
    height: 30px;
    width: 30px;
    text-decoration: none;
    margin: 10px;
    color: ${DARKTHEME.textColor};
`

const NextButton = styled(FaChevronRight)`
    color: black;
    height: 30px;
    width: 30px;
    text-decoration: none;
    margin: 10px;
    color: ${DARKTHEME.textColor};
`

function Pokemon(props) {
    const { pokemonName } = useParams()
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)
    const [bgColor, setBgColor] = useState("lightgrey")
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        fetch('https://pokemonrater-api.herokuapp.com/pokemon/name/' + pokemonName.toLowerCase())
            .then(res => res.json())
            .then(res => { 
                setPokemon(res); 
                setLoading(false); 
                getType(res); 
                setIsFavorite(JSON.parse(localStorage.getItem('favorites')).includes(pokemon.id))
            })
    }, [pokemon])

    function getType(pokemon) {
        switch (pokemon.types[0].name) {
            case "normal": setBgColor(COLORS.normal); break;
            case "fire": setBgColor(COLORS.fire); break;
            case "water": setBgColor(COLORS.water); break;
            case "electric": setBgColor(COLORS.electric); break;
            case "grass": setBgColor(COLORS.grass); break;
            case "ice": setBgColor(COLORS.ice); break;
            case "fighting": setBgColor(COLORS.fighting); break;
            case "poison": setBgColor(COLORS.poison); break;
            case "ground": setBgColor(COLORS.ground); break;
            case "flying": setBgColor(COLORS.flying); break;
            case "psychic": setBgColor(COLORS.psychic); break;
            case "bug": setBgColor(COLORS.bug); break;
            case "rock": setBgColor(COLORS.rock); break;
            case "ghost": setBgColor(COLORS.ghost); break;
            case "dragon": setBgColor(COLORS.dragon); break;
            case "dark": setBgColor(COLORS.dark); break;
            case "steel": setBgColor(COLORS.steel); break;
            case "fairy": setBgColor(COLORS.fairy); break;
            default: console.log("Type not found..."); break;
        }
    }

    function addToFavorites(id) {
        let favorites = JSON.parse(localStorage.getItem('favorites'))

        if(favorites == null){
            favorites = []
        }

        if(favorites.includes(id)){
            let index = favorites.indexOf(id)
            if(index > -1){
                favorites.splice(index, 1)
            }
            setIsFavorite(false)
        } else {
            favorites.push(id)
            setIsFavorite(true)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    return (
        <Container>
            {!loading &&
                <ContentContainer>
                    <BackgroundColor color={bgColor}>
                        <Back to="/">
                            <BackChevron />
                        </Back>
                        <Sprite src={pokemon.sprites.default} alt={pokemonName + " sprite"} />
                        {!isFavorite && 
                            <FavoriteIcon onClick={() => addToFavorites(pokemon.id)}/>
                        }
                        {isFavorite &&
                            <FavoriteIconFilled onClick={() => addToFavorites(pokemon.id)}/>
                        }
                    </BackgroundColor>
                    <Header>
                        <Link to={"/pokemon/" + (pokemon.id - 1)}>
                            <PreviousButton />
                        </Link>
                        <Name>
                            #{pokemon.id}, {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </Name>
                        <Link to={"/pokemon/" + (pokemon.id + 1)}>
                            <NextButton />
                        </Link>
                    </Header>
                    <TypeContainer>
                        {pokemon.types.map(type => {
                            return <Type key={type.id} type={type.name} />
                        })}
                    </TypeContainer>
                    <Abilities abilities={pokemon.abilities} />
                    <Stats stats={pokemon.stats} />
                    <Defenses defenses={pokemon.defenses} />
                    <Spacer></Spacer>
                </ContentContainer>
            }
            {loading &&
                <p>Loading...</p>
            }
        </Container>
    );
}

export default Pokemon;
