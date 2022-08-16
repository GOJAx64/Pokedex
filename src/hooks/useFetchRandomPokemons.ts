import { useEffect, useState } from 'react';

import { getRandomPokemon, getRandomIds } from '../helpers';
import { PokeAPIResponsePokemon  } from '../interfaces';

const initialStatePokemons:PokeAPIResponsePokemon[] = []

export const useFetchRandomPokemons = () => {
    const [pokemons, setPokemons] = useState(initialStatePokemons);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const ids = getRandomIds();

        const promises = ids.map( async(id:number) => 
            await getRandomPokemon(id) 
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