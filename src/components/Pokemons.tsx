import { InputSearch, Loading, PokemonList } from '.';
import { useFetchAllPokemons } from '../hooks';

export const Pokemons = () => {
  const { pokemons, isLoading } = useFetchAllPokemons();

  return (
    <section className=' bg-slate-100'>
      <InputSearch/>
      { isLoading ? <Loading/> :<PokemonList pokemons={ pokemons }/> }
    </section>
  )
}
