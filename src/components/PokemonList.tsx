import { Result } from '../interfaces'
import { PokemonPreview } from '.';

export const PokemonList = ( { pokemons }:{pokemons:Result[]} ) => {
  return (
    <section className='pt-12 mx-3 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>  
      {
          pokemons.map( ({ url }) => 
              <PokemonPreview key={ url } url={ url }/>
          )
      } 
    </section>
  )
}
