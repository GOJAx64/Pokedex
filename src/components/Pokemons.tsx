import { InputSearch, Loading, PokemonList } from '.';
import { useAppContext } from '../hooks';

export const Pokemons = () => {
  const { isLoading } = useAppContext();
  
  return (
    <section className=' bg-slate-100'>
      <InputSearch />
      { isLoading ? <Loading/> : <PokemonList/> }
    </section>
  )
}
