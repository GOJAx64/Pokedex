import { useEffect, useState } from 'react';
import { getPokemonByName } from '../helpers';
import { PokeAPIResponsePokemon } from '../interfaces';

export const useFetchPokemon = ( name:string ) => {
    const [pokemon, setPokemon] = useState<PokeAPIResponsePokemon>();
    const [isLoading, setIsLoading] = useState(true);

    const getData = async( name:string ) => {
        const pokemon = await getPokemonByName( name ); 
        setPokemon(pokemon);
        setIsLoading(false);
    }

    useEffect(() => {
        getData( name );
    }, []);

    return {
        pokemon,
        isLoading,
    }
}