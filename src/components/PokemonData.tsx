import { getColorOfType } from '../helpers';
import { PokemonDataProps } from '../interfaces'
import { TableForAbilities, TableForFeatures, Types } from './';
import { Stats } from './Stats';

export const PokemonData = ( { pokemon }:PokemonDataProps ) => {
  return (
    <>
        <h1 className="ml-5 sm:ml-36 my-4 text-4xl capitalize text-neutral-900 font-extrabold leading-none md:text-5xl xl:text-6xl">{ pokemon.name } #{ pokemon.id }</h1>
        <div className="grid max-w-screen-xl px-4 py-1 mx-auto lg:gap-8 xl:gap-0 lg:pb-12 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:flex  rounded-lg bg-slate-200 border border-slate-400 mx-auto">
                <img src={ pokemon.sprites.other?.home.front_default } className=" h-96 lg:ml-8" alt={ pokemon.name } />
            </div> 
            <div className=" mr-auto place-self-center lg:col-span-7"> 
                <TableForFeatures height={ pokemon.height } weight={ pokemon.weight } baseExperience={ pokemon.base_experience }/>
                <TableForAbilities abilities={ pokemon.abilities } />
                <Types types={ pokemon.types } />
                <Stats stats={ pokemon.stats } />
                <p className="max-w-2xl text-justify my-4 text-lg font-light text-slate-100 md:text-lg border border-slate-500 rounded-lg pl-5 bg-neutral-900">First Appaerence: { pokemon?.game_indices[0]?.version.name ? "Pokémon " + pokemon?.game_indices[0]?.version.name : "no data"}.</p>
                
                <p className="max-w-2xl text-justify mb-6 text-xl font-bold text-slate-900 md:text-lg">More Images: </p>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">Default Image</p>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">Shyny Form</p>
                <div className='grid grid-cols-3'>
                  
                  <img src={ pokemon.sprites.front_default } className=" h-44 lg:ml-8" alt={ pokemon.name } />
                  <img src={ pokemon.sprites.back_default } className=" h-44 lg:ml-8" alt={ pokemon.name } />
                  <img src={ pokemon.sprites.front_shiny } className=" h-24 lg:ml-8" alt={ pokemon.name } />
                  <img src={ pokemon.sprites.back_shiny } className=" h-24 lg:ml-8" alt={ pokemon.name } />
                  <img src={ pokemon.sprites.other?.home.front_shiny } className="h-24 lg:ml-8" alt={ pokemon.name } />
                
                </div>
                  
            </div>
                        
        </div>
    </>
  )
}
