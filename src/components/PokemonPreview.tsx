import { colors } from "../helpers";
import { useFetchPokemon } from "../hooks"
import { Loading } from "./Loading";

export const PokemonPreview = ( {url}:{ url:string } ) => {
  const { pokemon, isLoading } = useFetchPokemon(url);
  
  return (
    <article className="text-center bg-white rounded-[30px] relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-2 border-transparent hover:border-slate-200 cursor-pointer group grid gap-2">
      <header className="h-9">
        <img 
          className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform pixelated"
          src={ pokemon?.sprites.versions?.["generation-v"]["black-white"].front_default } 
          alt={ pokemon?.name } 
        />
      </header>
      <span className="text-sm text-slate-400">{ pokemon?.id }</span>
      <h4 className="text-lg">{ pokemon?.name }</h4>
      <ul className="flex gap-2 justify-center">
        {
          pokemon?.types.map( type => (
            <li key={ type.type.name } className={`p-1 rounded-md px-2 text-white ${colors[type.type.name as keyof typeof colors]}`}>
              { type.type.name }
            </li> 
          ))
        }
      </ul>
    </article> 
  )
}