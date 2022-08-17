import { Link } from 'react-router-dom';
import { colors } from '../helpers';
import { CardProps  } from '../interfaces';

export const Card = ( {pokemon}:CardProps ) => {
  return (
    <Link to={`/pokemons/${pokemon.name}`} className="flex items-center mx-4 bg-slate-200 rounded-lg border border-slate-400 shadow-md md:mx-0 md:flex-row md:w-full hover:bg-slate-100 hover:border-slate-900">
        <img className="ml-2" src={ pokemon.sprites.front_default } alt={ pokemon.name } />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className='text-left mb-1 text-2xl font-bold tracking-tight text-slate-900 capitalize'>{ pokemon.name }</h5>
            <div>
              {
                pokemon.types.map( ({ type }) => 
                  <span key={ type.name }className={`${ colors[type.name as keyof typeof colors] || 'bg-slate-400'} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>#{ type.name }</span>
                )
              }
            </div>
        </div>
        
    </Link>
  )
}