import { useEffect, useState } from 'react';
import { getAllPokemons } from '../helpers/getAllPokemons';
import { getPokemonByIdOrName } from '../helpers/getPokemonByIdOrName';

// interface type{
//   type: string;
//   url:  string;
// }

// interface Pokemon {
//   name:   string; 
//   img:    string;
//   typesCleaned: [type];
// }

// const initialPokemon:Pokemon = {
//   name: 'none', 
//   img: 'none', 
//   typesCleaned: [{
//     type: 'none',
//     url: 'none'
//   }]
// }

interface PropsData {
  next:     string | undefined;
  previous: string | undefined;
  urls:     string | undefined;
}

const initialState:PropsData = {
  next:     undefined,
  previous: undefined,
  urls:     undefined
}

export const Pokemons = () => {
  
  const [{next, previous, urls}, setData] = useState(initialState);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async() => {
    const {next, previous, urls} = await getAllPokemons();
    setData({next, previous, urls});
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <section className='pt-20'>
      {/* {
        data?.map( (pokemon:Pokemon, index) => (
          <div key={index}>
            <h1>{pokemon.name}</h1>
            <img src={ pokemon.img } alt={ pokemon.name } className=''/>
          </div>
        ))
      } */}

      {/* {
        pokemon.typesCleaned.map( (t, index) => 
          <p key={ index }>{ t.type }</p>
        ) 
      } */}
    
    </section>
  )
}
