import { Footer, GridPokemons, InputSearch, Loading } from '../components';
import { useFetchAllPokemons } from '../hooks';

export const Pokemons = () => {
  const { pokemons, isLoading, nextPokemons, prevPokemons } = useFetchAllPokemons();

  return (
    <section className='pt-20 bg-slate-300'>
      <InputSearch/>
      { isLoading ? <Loading/> : <GridPokemons pokemons={ pokemons }/> }
      <div className='flex flex-row'>
        <div className='mx-auto'>
          <button 
              className="mx-1 mb-2 text-slate-600 bg-slate-200 hover:bg-slate-400 hover:text-slate-800 border border-slate-600 font-bold rounded-full text-lg sm:w-auto px-4 py-1.5 text-center"
              disabled={ isLoading }
              onClick={ () => prevPokemons() }> 
              &lt; prev
          </button>
          <button 
              className="mx-1 mb-2 text-slate-600 bg-slate-200 hover:bg-slate-400 hover:text-slate-800 border border-slate-600 font-bold rounded-full text-lg sm:w-auto px-4 py-1.5 text-center"
              disabled={ isLoading }
              onClick={ () => nextPokemons() }> 
              next &gt;
          </button>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
