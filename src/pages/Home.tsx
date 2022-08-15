import { Footer, GridPokemons } from '../components';
import { useFetchRandomPokemons } from '../hooks';
import pokedex from '../assets/pokedex_2.webp';

export const Home = () => {

  const { pokemons, isLoading } = useFetchRandomPokemons();

  return (
    <section className="bg-slate-300 pt-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className=" mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl text-neutral-900 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">This is a Pokédex</h1>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">The Pokédex (ポケモン図鑑 Pokemon Zukan?, Pokémon Indexer, also called "Dexter"), in the fictional world of Pokémon, is a portable electronic encyclopedia that Pokémon trainers carry around to automatically record the records of all the various Pokémon species seen and captured during their journey as trainers.</p>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">This is a simple page aplication that consumes the PokeApi. I hope you enjoy this SPA and take a look in the pokemons and my work 😃!!!</p>
            </div>
            <div className="mt-4 lg:mt-0 lg:col-span-5 lg:flex">
                <img src={pokedex} className=" h-74 w-96 lg:ml-8" alt="pokedex" />
            </div>                
        </div>
        <div className='bg-slate-300'>
          <div className='py-5 bg-neutral-900 text-center'>
            <h1 className="text-2xl font-extrabold tracking-tight md:text-4xl text-slate-200">Random Pokémons</h1>
          </div>
          {/* { isLoading && <h2>Loading...</h2> } */}
          <GridPokemons pokemons={ pokemons }/>
        </div>
        <Footer/>
    </section>
  )
}
