import { useEffect, useRef } from 'react';
import { PokemonPreview } from '.';
import { useAppContext, useIntersectionObserver } from '../hooks';
import { ModalPokemon } from './ModalPokemon';

export const PokemonList = () => {
  const { pokemonsByName, offset, setOffset } = useAppContext();
  const targetObserver = useRef(null);
  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    const maxPokemons = pokemonsByName.length;
    if(isVisible && maxPokemons !== 0) {
      const newOffset = offset + 20;
      newOffset > maxPokemons ? setOffset(maxPokemons) : setOffset(newOffset);
    }
  }, [isVisible])

  return (
    <section className='pt-12 mx-3 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>  
      {
          pokemonsByName.slice(0, offset).map( ( { url }:{ url:string } ) => 
              <PokemonPreview key={ url } url={ url }/>
          )
      }
      <span ref={ targetObserver } ></span>
      <ModalPokemon/>
    </section>
  )
}
