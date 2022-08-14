import { useEffect, useState } from 'react';
import { getAllPokemons, getPokemonByUrl } from '../helpers';

//TODO: Define interface
interface Pokemon {
   name:string;
   sprites: {
    front_default: string;
   };
}

interface Result {
  name: string;
  url:  string;
}

const initialStatePokemons:Pokemon[] = []

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState(initialStatePokemons);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async() => {
    const data = await getAllPokemons();

    const promises = data?.results.map( async(pokemon:Result) => 
      await getPokemonByUrl(pokemon.url) 
    );
    
    const pokemons:Pokemon[] = await Promise.all(promises);
    setPokemons(pokemons);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className='pt-20'>
      {
        pokemons.map( (pokemon, index) => (
          <div key={index}>
            <h1>{pokemon.name}</h1>
            <img src={ pokemon.sprites.front_default } alt={ pokemon.name } className=''/>
          </div>
        ))
      }
    </section>
  )
}
