import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import { VALUES } from './constants/values'
import Search from './pages/search/Search'
import Pokemon from './pages/pokemon/Pokemon'
import Favorites from './pages/favorites/Favorites'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { DARKTHEME } from './constants/colors'

const Container = styled.div`
    padding: 0px;
    margin: 0px;
    user-select: none;
    width: 100vw;
    height: 100vh;
    background-color: ${DARKTHEME.background};
    color: ${DARKTHEME.textColor};
`

const Body = styled.div`
    height: calc(100vh - ${VALUES.navbarHeight});
`

function App() {
    return (
        <Container>
            <Router>
                <Body>
                    <Switch>
                        <Route path="/pokemon/:pokemonName" component={Pokemon}></Route>
                        <Route path="/favorites" component={Favorites}></Route>
                        <Route path="/" component={Search}></Route>
                    </Switch>
                </Body>
                <Navbar />
            </Router>
        </Container>
    );
}

export default App;
