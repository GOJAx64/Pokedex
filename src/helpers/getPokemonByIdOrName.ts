interface PropsType {
    type: {
        name: string;
        url: string;
    };
}

export const getPokemonByIdOrName = async( url:string ) => {
    //const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    const resp = await fetch(url);
    const { height, name, types=[], weight,  sprites} = await resp.json();
    
    const img = sprites.other.home.front_default;

    const typesCleaned = types.map( (typeElement:PropsType) => ({
        type: typeElement.type.name,
        url: typeElement.type.url,
    }));

    return { 
        height, 
        name, 
        weight, 
        img, 
        typesCleaned
    };
};