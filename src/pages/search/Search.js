import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { VALUES } from '../../constants/values'
import ResultItem from './ResultItem'
import { DARKTHEME } from '../../constants/colors'
import Spacer from '../../components/Spacer'

const List = styled.div`
    overflow: auto;
    max-height: calc(100vh - 52px - ${VALUES.navbarHeight});
    width: 100vw;
`

const SearchBar = styled.input`
    margin: 10px;
    padding: 10px;
    font-size: 18px;
    width: 100%;
    margin-bottom: 0px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: ${DARKTHEME.color1};
    color: ${DARKTHEME.textColor};
`

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${DARKTHEME.background};
`

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
`

function Search() {
    const [pokemon, setPokemon] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch('https://pokemonrater-api.herokuapp.com/pokemon/nationaldex')
            .then(res => res.json())
            .then(res => setPokemon(res))
    }, [])

    useEffect(() => {
        const results = pokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setSearchResults(results)
    }, [searchTerm, pokemon])

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    return (
        <SearchContainer>
            <SearchBarContainer>
                <SearchBar type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
            </SearchBarContainer>

            <List>
                {searchResults.map(pokemon => {
                    return <ResultItem key={pokemon.id} pokemon={pokemon}/>
                })}
                <Spacer></Spacer>
            </List>
        </SearchContainer>
    );
}

export default Search;
