import Get from './Get'
import Post from './Post'
// import Put from './Put'
import Delete from './Delete'


const getPokemonOwned = () => Get('/Get/GetPokemonOwned.php', false);
const getPokemonOwnedCount = () => Get(`/Get/GetPokemonOwnedWithCount.php`, false);
const getPokemonOwnedCountID = (id) => Get(`/Get/GetPokemonOwnedWithCount.php?id=${id}`, false);
const getPokemonOwnedID = (id) => Get(`/Get/GetPokemonOwned.php?id=${id}`, false);
const getPokemonList = (offset) => Get(`pokemon?offset=${offset}&limit=20`, true);
const getPokemonTypes = () => Get('type', true);
const getPokemonTypesData = (id) => Get(`type/${id}`, true);
const getPokemonSpecies = () => Get('pokemon-species', true);
const getPokemonSpeciesOffset = (offset) => Get(`pokemon-species?offset=${offset}&limit=20`, true);
const getPokemonSpeciesData = (id) => Get(`pokemon-species/${id}`, true);
const getPokemonData = (id) => Get(`pokemon/${id}`, true);
const getPokemon = () => Get(`pokemon`, true);
const getPokemonOffset = (offset) => Get(`pokemon?offset=${offset}&limit=20`, true);
const getAbilityData = (id) => Get(`ability/${id}`, true)
const getMoveData = (id) => Get(`move/${id}`, true);
const getStatData = (id) => Get(`stat/${id}`, true);

// Other way to Delelte data, but im using Get method cause the other method fail when I deploy the website.  
// const deletePokemon = (id) => Delete(`Delete/DeletePokemon.php?id=${id}`, false);
const deletePokemon = (id) => Get(`Delete/DeletePokemon.php?id=${id}`, false);

// Other way to Post data, but im using Get method cause the other method fail when I deploy the website. If using Post method we need to
// change the param where the method called.
// const postPokemon = (data) => Post(`Post/PostPokemonOwned.php`, false, data);
const postPokemon = (pokemon_id, nickname) => Get(`Post/PostPokemonOwned.php?pokemon_id=${pokemon_id}&nickname=${nickname}`, false);

const API = {
    //GET
    getPokemonList,
    getPokemonOwned,
    getPokemonOwnedCount,
    getPokemonOwnedCountID,
    getPokemonOwnedID,
    getPokemonTypes,
    getPokemonTypesData,
    getPokemonSpecies,
    getPokemonSpeciesOffset,
    getPokemon,
    getPokemonData,
    getPokemonOffset,
    getPokemonSpeciesData,
    getAbilityData,
    getMoveData,
    getStatData,
    //POST
    postPokemon,
    //DELETE
    deletePokemon
    //PUT

}

export default API;