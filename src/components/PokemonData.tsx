import { PokeAPIResponsePokemon } from '../interfaces'

interface PokemonDataProps {
    pokemon: PokeAPIResponsePokemon;
}

export const PokemonData = ( { pokemon }:PokemonDataProps ) => {
  return (
    <>
        <h1 className="ml-5 sm:ml-36 my-4 text-4xl capitalize text-neutral-900 font-extrabold leading-none md:text-5xl xl:text-6xl">{ pokemon.name } #{ pokemon.id }</h1>
        <div className="grid max-w-screen-xl px-4 py-1 mx-auto lg:gap-8 xl:gap-0 lg:pb-12 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:flex border border-slate-600 rounded-lg bg-slate-200 mx-auto">
                <img src={ pokemon.sprites.other?.home.front_default } className=" h-96 lg:ml-8" alt={ pokemon.name } />
            </div> 
            <div className=" mr-auto place-self-center lg:col-span-7">
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">First Appaerence: { pokemon?.game_indices[0]?.version.name ? "Pokémon " + pokemon?.game_indices[0]?.version.name : "no data"}.</p> 
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">Weight: { pokemon.weight }</p>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">Height: { pokemon.height }</p>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">Base Experience: { pokemon.base_experience }</p>
                <p className="max-w-2xl text-justify mb-6 text-xl font-bold text-slate-900 md:text-lg">Abilities: </p>
                {
                    pokemon.abilities.map( (ability) => (
                        <p key={ ability.ability.name  } className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">{ ability.ability.name } </p>
                    ))
                } 
                <p className="max-w-2xl text-justify mb-6 text-xl font-bold text-slate-900 md:text-lg">Type(s): </p>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div>
                    {
                        pokemon.types.map( ({ type }) => 
                            <span key={ type.name }className=" bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{ type.name }</span>
                        )
                    }
                    </div>
                </div>
                <p className="max-w-2xl text-justify mb-6 text-xl font-bold text-slate-900 md:text-lg">Stats: </p>
                {
                    pokemon.stats.map( (stat) => (
                        <p key={ stat.stat.name  } className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">{ stat.stat.name }: { stat.base_stat } </p>
                    ))
                }
                <p className="max-w-2xl text-justify mb-6 text-xl font-bold text-slate-900 md:text-lg">More Images: </p>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">Default Image</p>
                <img src={ pokemon.sprites.front_default } className=" h-44 lg:ml-8" alt={ pokemon.name } />
                <img src={ pokemon.sprites.back_default } className=" h-44 lg:ml-8" alt={ pokemon.name } />
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">Shyny Form</p>
                <img src={ pokemon.sprites.front_shiny } className=" h-24 lg:ml-8" alt={ pokemon.name } />
                <img src={ pokemon.sprites.back_shiny } className=" h-24 lg:ml-8" alt={ pokemon.name } />
                <img src={ pokemon.sprites.other?.home.front_shiny } className=" lg:ml-8" alt={ pokemon.name } />
            </div>
                        
        </div>
    </>
  )
}
