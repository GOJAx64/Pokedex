import { TableForAbilities, TableForFeatures, Types, Stats, TableForImages } from './';
import { PokemonDataProps } from '../interfaces'

export const PokemonData = ( { pokemon }:PokemonDataProps ) => {
  return (
    <>
        <h1 className="ml-5 sm:ml-36 mt-4 text-4xl capitalize text-neutral-900 font-extrabold leading-none md:text-5xl xl:text-6xl">{ pokemon.name }<span className='text-2xl md:text-4xl text-gray-500'>#{ pokemon.id }</span></h1>
        <div className='ml-1 md:ml-32'>
          <Types types={ pokemon.types } />
        </div>
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:pb-12 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:flex rounded-lg border border-slate-600 my-5 bg-slate-200 mx-auto">
                <img src={ pokemon.sprites.other?.home.front_default } className=" h-96 lg:ml-8" alt={ pokemon.name } />
            </div> 
            <div className="w-full mr-auto place-self-center lg:col-span-7"> 
                <p className="text-justify mb-2 mt-1 text-lg font-light text-slate-100 md:text-lg border border-slate-500 rounded-lg pl-5 bg-neutral-900">First Appaerence: { pokemon?.game_indices[0]?.version.name ? "Pokémon " + pokemon?.game_indices[0]?.version.name : "no data"}.</p>
                <Stats stats={ pokemon.stats } />
                <TableForFeatures height={ pokemon.height } weight={ pokemon.weight } baseExperience={ pokemon.base_experience }/>
                <TableForAbilities abilities={ pokemon.abilities } />
                <TableForImages sprites={ pokemon.sprites } name={ pokemon.name }/>
            </div>          
        </div>
    </>
  )
}


