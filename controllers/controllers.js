const pokemon = require('../models/pokemon');

const showWelcome = (req, res) => {
    res.send('Welcome to the Pokemon App!');
    //res.send(pokemon);
};
const showPokemons = (req, res) => {
    res.render('index.ejs', {
        pokemons: pokemon
    });
};

const displayPokemon = (req, res) => {
    //res.send(pokemon[1].name);
    res.render('show.ejs',{
        pokemons: pokemon[req.params.id]
    });
};

module.exports = {
    showWelcome,
    showPokemons,
    displayPokemon
};