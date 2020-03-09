import React from 'react';

const PokemonHome = React.lazy(() => import('./views/Container/PokemonHome/PokemonHome'));
const PokemonOwned = React.lazy(() => import('./views/Container/PokemonOwned/PokemonOwned'));
const PokemonBag = React.lazy(() => import('./views/Container/PokemonBag/PokemonBag'));

const routes = [
    { path: '/pokemon', exact: true, name: 'Pokemon Home', component: PokemonHome },
    { path: '/pokemon/owned', exact: true, name: 'Pokemon Owned', component: PokemonOwned },
    { path: '/pokemon/bag', exact: true, name: 'Pokemon Bag', component: PokemonBag },
];
export default routes;
