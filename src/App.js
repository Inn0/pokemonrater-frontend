import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import { VALUES } from './constants/values'

const Container = styled.div`
    padding: 0px;
    margin: 0px;
    user-select: none;
    width: 100vw;
    height: 100vh;
`

const SearchBar = styled.input`
    margin: 5px;
    padding: 5px;
    font-size: 16px;
    width: calc(100% - 25px);
`

const Body = styled.div`
    height: calc(100vh - ${VALUES.navbarHeight});
`

const List = styled.ul`
    overflow: auto;
    max-height: calc(100vh - 70px - ${VALUES.navbarHeight});
`

function App() {
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
        <Container>
            <Body>
                <SearchBar type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
                <List>
                    {searchResults.map(pokemon => {
                        return <li>{pokemon.name}</li>
                    })}
                </List>
            </Body>
            <Navbar />
        </Container>
    );
}

export default App;
