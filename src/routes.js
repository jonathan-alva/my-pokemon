import React from 'react';

const PokemonHome = React.lazy(() => import('./views/Container/PokemonHome/PokemonHome'));
const PokemonOwned = React.lazy(() => import('./views/Container/PokemonOwned/PokemonOwned'));
const PokemonBag = React.lazy(() => import('./views/Container/PokemonBag/PokemonBag'));
const PokemonList = React.lazy(() => import('./views/Container/PokemonList/PokemonList'));
const PokemonDetail = React.lazy(() => import('./views/Container/PokemonDetail/PokemonDetail'));

const routes = [
    { path: '/', exact: true, name: 'Pokemon Home', component: PokemonHome },
    { path: '/owned', exact: true, name: 'Pokemon Owned', component: PokemonOwned },
    { path: '/bag', exact: true, name: 'Pokemon Bag', component: PokemonBag },
    { path: '/list/:page', exact: true, name: 'Pokemon List', component: PokemonList },
    { path: '/detail/:id', exact: true, name: 'Pokemon Detail', component: PokemonDetail },
];
export default routes;
