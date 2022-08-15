import { Footer, GridPokemons, InputSearch } from '../components';
import { useFetchAllPokemons } from '../hooks';

export const Pokemons = () => {

  const { pokemons, isLoading } = useFetchAllPokemons();

  return (
    <section className='pt-20 bg-slate-300'>
      {/* <InputSearch/> */}
      <GridPokemons pokemons={ pokemons }/>
      <Footer/>
    </section>
  )
}
