import { useEffect, useState } from 'react';
import { Result } from '../interfaces';

const initialStatePokemons:Result[] = []

export const useFetchAllPokemons = () => {
    const [pokemons, setPokemons] = useState<Result[]>(initialStatePokemons);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = async() => {
        try {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=80'; //898
            const resp = await fetch(url);
            const { results }:{ results:Result[] } = await resp.json();
            setPokemons(results);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        pokemons,
        isLoading,
    }
}