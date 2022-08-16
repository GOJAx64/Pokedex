export const getPokemonByName = async( name:string ) => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${ name }`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch( error ) {
        console.error(error);
    }
};