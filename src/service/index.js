import Get from './Get'
// import Post from './Post'
// import Put from './Put'
import Delete from './Delete'


const getPokemonOwned = () => Get('/Get/GetPokemonOwned.php', false);
const getPokemonOwnedID = (id) => Get(`/Get/GetPokemonOwned.php?id=${id}`, false);
const getPokemonList = (offset) => Get(`/pokemon?offset=${offset}&limit=20`, true);
const getPokemonTypes = () => Get('/type', true);
const getPokemonHabitats = () => Get('/pokemon-habitat', true);
const getPokemonSpecies = () => Get('pokemon-species', true);
const getPokemonSpeciesOffset = (offset) => Get(`pokemon-species?offset=${offset}&limit=20`, true);
const getPokemonSpeciesData = (id) => Get(`pokemon-species/${id}`, true);
const getPokemonData = (id) => Get(`pokemon/${id}`, true);
const getPokemon = () => Get(`pokemon`, true);
const getPokemonOffset = (offset) => Get(`pokemon?offset=${offset}&limit=20`, true);
const getAbilityData = (id) => Get(`ability/${id}`, true)
const getMoveData = (id) => Get(`move/${id}`, true);
const getEvolutionChain = (id) => Get(`evolution-chain/${id}`, true);

const deletePokemon = (id) => Delete(`/Delete/DeletePokemon.php?id=${id}`, false);

const API = {
    //GET
    getPokemonList,
    getPokemonOwned,
    getPokemonOwnedID,
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
    getEvolutionChain,
    //POST
    //DELETE
    deletePokemon
    //PUT

}

export default API;