import { useEffect, useState } from 'react';
import { Card, Footer, InputSearch } from '../components';
import { getAllPokemons, getPokemonByUrl } from '../helpers';
import { PokeAPIResponsePokemon, Result  } from '../interfaces';

const initialStatePokemons:PokeAPIResponsePokemon[] = []

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState(initialStatePokemons);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async() => {
    const data = await getAllPokemons();

    const promises = data?.results.map( async(result:Result) => 
      await getPokemonByUrl(result.url) 
    );
    
    const pokemons:PokeAPIResponsePokemon[] = await Promise.all(promises);
    setPokemons(pokemons);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className='pt-20 bg-slate-300'>
      {/* <InputSearch/> */}
      <div className='sm:mx-9 mt-6 pb-8 text-center'>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {
            pokemons.map( (pokemon) => 
              <Card key={ pokemon.id } pokemon={ pokemon }/>
            )
          } 
        </div>
      </div>
      <Footer/>
    </section>
  )
}
