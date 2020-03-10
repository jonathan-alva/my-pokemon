import Get from './Get'
import Post from './Post'
import Put from './Put'
import Delete from './Delete'

const getPokemonList = (offset) => Get(`/pokemon?offset=${offset}&limit=20`, true);
const getPokemonOwned = () => Get('/Get/GetPokemonOwned.php', false);
const getPokemonTypes = () => Get('/type', true);
const API = {
    //GET
    getPokemonList,
    getPokemonOwned,
    getPokemonTypes,
    //POST
    //DELETE
    //PUT

}

export default API;