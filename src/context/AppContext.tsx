import { createContext, useEffect, useState } from 'react';
import { useFetchAllPokemons } from '../hooks';
import { ContextProps, Pokemon, pokemonDetail, propsAppProvider } from '../interfaces';
import { formatAbilities, formatStats, formatTypes, getPokemonDescription, getPokemonEvolutions, getPokemonSpecie } from '../helpers';


const AppContext = createContext<ContextProps | any>(null); //TODO Resolve this

export const AppProvider = ({ children }:propsAppProvider) => {
    const { pokemons, isLoading } = useFetchAllPokemons();
    const [pokemonName, setPokemonName] = useState<string>('');
    const [offset, setOffset] = useState<number>(30);
    const [showModalPokemon, setshowModalPokemon] = useState<boolean>(false);
    const [pokemonDetail, setPokemonDetail] = useState<pokemonDetail>();

    useEffect(() => {
      setOffset(30)
    }, [pokemonName])
    
    const pokemonsByName = pokemons.filter( (pokemon) => 
        pokemon.name.includes(pokemonName)
    );

    const showPokemon = async(pokemon:Pokemon) => {
        const pokemonSpecie =  await getPokemonSpecie(pokemon.species.url);
        const { id, name, height, weight, stats, types, abilities } = pokemon;
        const description = getPokemonDescription(pokemonSpecie);
        const evolutions = await getPokemonEvolutions(pokemonSpecie.evolution_chain.url);
        
        setPokemonDetail({ 
            id, 
            name, 
            height, 
            weight ,
            stats: formatStats(stats),
            types: formatTypes(types),
            abilities: formatAbilities(abilities),
            description,
            evolutions,
        });
        
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

                showPokemon,
                closePokemonById,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContext;