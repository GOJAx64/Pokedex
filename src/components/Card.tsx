import { CardProps, PokeAPIResponsePokemon  } from '../interfaces';

export const Card = ( {pokemon}:CardProps ) => {
  return (
    <a href={`#`} className="flex items-center mx-4 bg-slate-200 rounded-lg border border-slate-400 shadow-md md:mx-0 md:flex-row md:w-full hover:bg-slate-100 hover:border-slate-900">
        <img className="object-cover h-24 ml-2 rounded-t-lg md:rounded-none md:rounded-l-lg" src={ pokemon.sprites.front_default } alt={ pokemon.name } />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className='text-left mb-1 text-2xl font-bold tracking-tight text-slate-900'>{ pokemon.name }</h5>
            <div>
              {
                pokemon.types.map( ({ type }) => 
                  <span key={ type.name }className=" bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{ type.name }</span>
                )
              }
            </div>
        </div>
        
    </a>
  )
}