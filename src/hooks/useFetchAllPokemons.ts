import { useEffect, useState } from 'react';
import { getAllPokemons, getPokemonByUrl } from '../helpers';
import { PokeAPIResponsePokemon, Result  } from '../interfaces';

const initialStatePokemons:PokeAPIResponsePokemon[] = []

export const useFetchAllPokemons = () => {
    const [pokemons, setPokemons] = useState(initialStatePokemons);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const data = await getAllPokemons();
        const promises = data?.results.map( async(result:Result) => 
            await getPokemonByUrl(result.url) 
        );
        const pokemons:PokeAPIResponsePokemon[] = await Promise.all(promises);
        setPokemons(pokemons);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        pokemons,
        isLoading,
    }
}