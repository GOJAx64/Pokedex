import { createContext, useEffect, useState } from 'react';
import { useFetchAllPokemons } from '../hooks';

export interface ContextProps { 
    
}

export interface propsAppProvider {
    children: JSX.Element | JSX.Element[]
}

const AppContext = createContext<ContextProps | any>(null); //? Resolve this

export const AppProvider = ({ children }:propsAppProvider) => {
    const { pokemons, isLoading } = useFetchAllPokemons();
    const [pokemonName, setPokemonName] = useState<string>('');
    const [offset, setOffset] = useState<number>(30);
    const [showModalPokemon, setshowModalPokemon] = useState<boolean>(false);
    
    useEffect(() => {
      setOffset(30)
    }, [pokemonName])
    
    const pokemonsByName = pokemons.filter( (pokemon) => 
        pokemon.name.includes(pokemonName)
    );

    const showPokemonById = () => {
        setshowModalPokemon(true);
    };

    const closePokemonById = () => {
        setshowModalPokemon(false);
    };

    return (
        <AppContext.Provider
            value={{
                pokemons,
                isLoading,
                pokemonName,
                setPokemonName,
                offset,
                setOffset,
                pokemonsByName,
                showModalPokemon,

                showPokemonById,
                closePokemonById,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContext;