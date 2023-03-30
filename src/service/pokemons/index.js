import { client } from "../axios";

export const getPokemons = () => client({
    method: "GET",
    url: "/pokemon",
});

export const getPokemonsByName = (name) => client({
    method: "GET",
    url: `/pokemon/${name}`,
});