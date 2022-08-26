import { useEffect, useState } from 'react';
import { getAllPokemons, getPokemonByUrl } from '../helpers';
import { PokeAPIResponsePokemon, Result  } from '../interfaces';

const initialStatePokemons:PokeAPIResponsePokemon[] = []

export const useFetchAllPokemons = () => {
    const [offset, setOffset] = useState(0);
    const [pokemons, setPokemons] = useState(initialStatePokemons);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const data = await getAllPokemons( offset );
        const promises = data?.results.map( async(result:Result) => 
            await getPokemonByUrl(result.url) 
        );
        const pokemons:PokeAPIResponsePokemon[] = await Promise.all(promises);
        setPokemons(pokemons);
        setIsLoading(false);
    }

    const nextPokemons = () => {
        if( offset >= 1140 ) return;
        setOffset( (offset) => (offset + 20) );
    }

    const prevPokemons = () => {
        if( offset < 20 ) return;
        setOffset( (offset) => (offset - 20) );
    }

    useEffect(() => {
        getData();
    }, [offset]);

    return {
        pokemons,
        isLoading,
        offset,
        nextPokemons,
        prevPokemons
    }
}