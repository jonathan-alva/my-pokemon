import Get from './Get'
// import Post from './Post'
// import Put from './Put'
// import Delete from './Delete'

const getPokemonList = (offset) => Get(`/pokemon?offset=${offset}&limit=20`, true);
const getPokemonOwned = () => Get('/Get/GetPokemonOwned.php', false);
const getPokemonTypes = () => Get('/type', true);
const getPokemonHabitats = () => Get('/pokemon-habitat', true);
const getPokemonSpecies = () => Get('pokemon-species', true);
const getPokemonSpeciesOffset = (offset) => Get(`pokemon-species?offset=${offset}&limit=20`, true);
const getPokemonSpeciesData = (id) => Get(`pokemon-species/${id}`, true);
const getPokemonData = (id) => Get(`pokemon/${id}`, true);
const getPokemon = () => Get(`pokemon`, true);
const getPokemonOffset = (offset) => Get(`pokemon?offset=${offset}&limit=20`, true);
const getAbilityData = (id) => Get(`ability/${id}`, true)
const getMoveData = (id) => Get(`move/${id}`, true)

const API = {
    //GET
    getPokemonList,
    getPokemonOwned,
    getPokemonTypes,
    getPokemonHabitats,
    getPokemonSpecies,
    getPokemonSpeciesOffset,
    getPokemon,
    getPokemonData,
    getPokemonOffset,
    getPokemonSpeciesData,
    getAbilityData,
    getMoveData,
    //POST
    //DELETE
    //PUT

}

export default API;