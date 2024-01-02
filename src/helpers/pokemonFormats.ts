import { Ability, Evolution, Pokemon, PokemonSpecie, Stat, Type } from "../interfaces";

interface Types {
    hp:                string;
    attack:            string;
    defense:           string;
    "special-attack":  string;
    "special-defense": string;
    speed:             string;
}

export const formatStats = (stats:Stat[]) => {
    const nameTypes = {
        hp:                "HP",
        attack:            "ATK",
        defense:           "DEF",
        "special-attack":  "SpA",
        "special-defense": "SpD",
        speed:             "SPD",
    };

    const newStats = stats.map( ({stat, base_stat}) => ({
        name: nameTypes[stat.name as keyof Types], 
        base_stat
    }));
    
    newStats.push({
        name: 'TOT',
        base_stat: newStats.reduce( (acc, stat) => stat.base_stat + acc, 0 ) 
    })

    return newStats;
};

export const formatTypes = (types:Type[]) => types.map( (type) => type.type.name );


export const formatAbilities = (abilities:Ability[]) => abilities.map( (ability) => ability.ability.name );


export const getPokemonSpecie = async(url:string) => {
    try {
        const resp = await fetch(url);
        return await resp.json();
    } catch (error) {
        console.log(error);
    }
};

export const getPokemonDescription = (pokemonSpecie:PokemonSpecie) => {
    return pokemonSpecie.flavor_text_entries[1].flavor_text;
};

export const getPokemonEvolutions = async(url:string) => {
    
    const evolutions = [];
    let evolutionData = await getEvolutionDataChain(url);

    do {
        const evolutionDetails = evolutionData["evolution_details"][0];
        evolutions.push({
            name: evolutionData.species.name,
            min_level: evolutionDetails?.min_level ?? 1,
        });
        evolutionData = evolutionData.evolves_to[0];
    } while(evolutionData);

    const promises = getEvolutionsData(evolutions);
    
    try {
        const responses = await Promise.allSettled(promises);
        assignInfoToEvolutions(responses, evolutions);
    } catch (error) {
        console.log(error);
    }
    console.log(evolutions)
    return evolutions;
    
};


const assignInfoToEvolutions = (responses:PromiseSettledResult<Pokemon>[], evolutions:Evolution[]) => {
    responses.forEach((response, index:number) => {
        if (response.status === "fulfilled") {
            evolutions[index].image = response.value.sprites.versions["generation-v"]["black-white"].front_default;
            evolutions[index].pokemonInfo = response.value;
        }
    });
};

const getEvolutionDataChain = async(url:string) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data.chain;
    } catch (error) {
        console.log(error);
    }
};

const fetchPokemonByName = async(url:string) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;    
    } catch (error) {
        console.log(error);
    }
}

const getEvolutionsData = (evolutions:any) => {
    return evolutions.map( (evolution:any) => fetchPokemonByName(`https://pokeapi.co/api/v2/pokemon/${evolution.name}/`) );
};