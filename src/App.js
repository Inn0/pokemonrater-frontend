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

const Container = styled.div`
    padding: 0px;
    margin: 0px;
    user-select: none;
    width: 100vw;
    height: 100vh;
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
                        <Route path="/pokemon">
                            <Pokemon />
                        </Route>
                        <Route path="/favorites">
                            <Favorites />
                        </Route>
                        <Route path="/">
                            <Search />
                        </Route>
                    </Switch>
                </Body>
                <Navbar />
            </Router>
        </Container>
    );
}

export default App;
