export const getRandomPokemon = async( id:number ) => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch( error ) {
        console.error(error);
    }
}
