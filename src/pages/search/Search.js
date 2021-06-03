import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { VALUES } from '../../constants/values'

const List = styled.ul`
    overflow: auto;
    max-height: calc(100vh - 70px - ${VALUES.navbarHeight});
`

const SearchBar = styled.input`
    margin: 5px;
    padding: 5px;
    font-size: 16px;
    width: calc(100% - 25px);
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
    }, [searchTerm])

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <SearchBar type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
            <List>
                {searchResults.map(pokemon => {
                    return <li>{pokemon.name}</li>
                })}
            </List>
        </div>
    );
}

export default Search;
