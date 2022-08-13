// interface PropsType {
//     type: {
//         name: string;
//         url: string;
//     };
// }

interface PropsResult {
    url: string;
}

export const getAllPokemons = async() => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`;
    const resp = await fetch(url);
    const { next, previous, results = [] } = await resp.json();
  
    const urls = results.map( (result:PropsResult) => (
        result.url
    ))

    // const pokemons = urls.map( async(url:string) => (
    //     await getPokemon(url)
    // ));
    // const pokemonsCleaned = Promise.all(pokemons)
    //     .then(responses => {
    //         responses.map( (response) => (
    //             response
    //         ))
    //     });
    //console.log(pokemonsCleaned);
    
    return {
        next,
        previous,
        urls,
    };
};

// const getPokemon = async( url:string ) => {
//     const resp = await fetch(url);
//     const { name, types=[],  sprites} = await resp.json();
    
//     const img = await sprites.other.home.front_default;

//     const typesCleaned = types.map( (typeElement:PropsType) => ({
//         type: typeElement.type.name,
//         url: typeElement.type.url,
//     }));

//     return {
//         name, 
//         img, 
//         typesCleaned
//     };
// }