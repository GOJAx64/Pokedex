export const getAllPokemons = async( offset:number = 0 ) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${ offset }&limit=18`;
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error( error );
    }
};