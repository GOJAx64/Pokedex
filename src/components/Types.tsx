import { colors } from '../helpers'
import { TypesProps } from '../interfaces'

export const Types = ( { types }:TypesProps ) => {
  return (
    <div className="mt-2 py-4 ml-4 overflow-x-auto rounded-b-lg">
        {
            types.map( ({ type }) => (
                <span key={ type.name } className={`rounded-full px-3 py-1 text-sm font-semibold ml-1 mb-2 ${ colors[type.name as keyof typeof colors] || 'bg-slate-400'}`}>#{ type.name }</span>
            ))
        }
    </div> 
  )
}
