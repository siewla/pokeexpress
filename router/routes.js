const pokemon = require('../controllers/controllers');

module.exports = (app) => {
    app.get('/', pokemon.showWelcome);
    app.get('/pokemon',pokemon.showPokemons);
    app.get('/pokemon/:id', pokemon.displayPokemon);
};