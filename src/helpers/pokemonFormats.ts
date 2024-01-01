import { Ability, PokemonSpecie, Species, Stat, Type } from "../interfaces";

export const formatStats = (stats:Stat[]) => {
    
    const newStats = stats.map( ({stat, base_stat}) => (
        {name: stat.name, base_stat}
    ))
    
    newStats.push({
        name: 'total',
        base_stat: newStats.reduce( (acc, stat) => stat.base_stat + acc, 0 ) 
    })

    return newStats;
}

export const formatTypes = (types:Type[]) => types.map( (type) => type.type.name )


export const formatAbilities = (abilities:Ability[]) => abilities.map( (ability) => ability.ability.name )


export const getPokemonSpecie = async(url:string) => {
    try {
        const resp = await fetch(url);
        return await resp.json();
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonDescription = (pokemonSpecie:PokemonSpecie) => {
    return pokemonSpecie.flavor_text_entries[1].flavor_text;
}

export const getPokemonEvolutions = async(url:string) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        const evolutions = [];
        let evolutionData = data.chain;

        do {
            const evolutionDetails = evolutionData["evolution_details"][0];

            evolutions.push({
                name: evolutionData.species.name,
                min_level: evolutionDetails?.min_level ?? 1,
            });

            evolutionData = evolutionData.evolves_to[0];
        } while(evolutionData);

        return evolutions;
    } catch (error) {
        console.log(error);
    }
}