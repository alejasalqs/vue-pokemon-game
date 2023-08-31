import POKEMON_API from '@/api/pokemonApi';
import Pokemon from '@/types/pokemonType';

const getPokemons = (): Array<number> => {
  const pokemonArr = Array.from(Array(650));
  return pokemonArr.map((_, index) => index + 1);
};

const getPokemonName = async (pokemons: Array<number>) : Promise<Pokemon[]> => {
  const arrPromises = [
    POKEMON_API.get(`/${pokemons[0]}`),
    POKEMON_API.get(`/${pokemons[1]}`),
    POKEMON_API.get(`/${pokemons[2]}`),
    POKEMON_API.get(`/${pokemons[3]}`),
  ];

  const [p1, p2, p3, p4] = await Promise.all(arrPromises);

  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

const getPokemonOptions = async () : Promise<Pokemon[]> => {
  const mixedPokemons = getPokemons();
  mixedPokemons.sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonName(mixedPokemons.splice(0, 4));
  return pokemons;
};

export default getPokemonOptions;
