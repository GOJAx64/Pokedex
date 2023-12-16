import { useEffect, useState } from 'react';
import { PokeAPIResponsePokemon } from '../interfaces';

export const useFetchPokemon = ( url:string ) => {
    const [pokemon, setPokemon] = useState<PokeAPIResponsePokemon>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData( url );
    }, []);

    const getData = async( name:string ) => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setPokemon(data);
            setIsLoading(false);
        }
        catch( error ) {
            console.error(error);
        }
    }

    return {
        pokemon,
        isLoading,
    }
}