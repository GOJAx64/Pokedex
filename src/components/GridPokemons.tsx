import { GridPokemonsProps } from '../interfaces/grid-pokemon'
import { Card } from '../components';

export const GridPokemons = ( { pokemons }:GridPokemonsProps) => {
  return (
    <div className='sm:mx-9 mt-6 pb-8 text-center'>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {
                pokemons.map( (pokemon) => 
                    <Card key={ pokemon.id } pokemon={ pokemon }/>
                )
            } 
        </div>
    </div>
  )
}
