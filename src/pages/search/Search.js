import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { VALUES } from '../../constants/values'
import ResultItem from './ResultItem'

const List = styled.div`
    overflow: auto;
    max-height: calc(100vh - 55px - ${VALUES.navbarHeight});
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
`

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
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
        fetch('https://pokemonrater-backend.herokuapp.com/nationaldex')
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
            </List>
        </SearchContainer>
    );
}

export default Search;
