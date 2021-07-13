# [PokémonRater (frontend)](https://pokemon-rater.herokuapp.com/)
## Introduction
This repository is the front-end Progressive Web Application for the PokémonRater project. The back-end for this project can be found in [this repository](https://github.com/Inn0/pokemonrater-backend). The project was created by two friends with a passion for everything Pokémon with the intention of providing users with a quick and reliable way of comparing Pokémon's competitive capabilities. All the code is written by [me](https://daanbrocatus.nl/). The project is openly available for now. Feel free to use it as you please. The project is hosted on [Heroku](https://heroku.com/) and a live-version can be found [here](https://pokemon-rater.herokuapp.com/). It works on any device with a browser, but was developed for mobile phones. For any questions or inquiries feel free to contact me (contact information can be found on my [website](https://daanbrocatus.nl/)).

## Commands
This project uses [Yarn](https://yarnpkg.com/) as package manager, and it is highly recommended to use Yarn instead of NPM with this project.

### Starting the development server
Run the following command:
```
yarn dev
```
This will start the development server on your machine on port 3000.

### Building for production
Because the project is a PWA and is hosted on Heroku there is a small [ExpressJS](https://expressjs.com/) server that builds and serves the project when the following command is called:
```
yarn start
```

## Technology Stack
This project consists out of a front-end and a back-end. 
The front-end is a [React](https://reactjs.org/) PWA with the following dependencies:
1.  [react-icons](https://react-icons.github.io/react-icons/)
2.  [styled-components](https://styled-components.com/)
3.  [react-router](https://reactrouter.com/)
4.  [express](https://expressjs.com/)

The back-end project and its documentation can be found [here](https://github.com/Inn0/pokemonrater-backend)

## Credits
The team consists out of two core members, with some testing-help from friends and family.
1.  [Daan Brocatus](https://daanbrocatus.nl/) - Development/Concept/Design
2.  Thomas Willems - Concept/Design