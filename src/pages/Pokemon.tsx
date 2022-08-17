import { useParams } from 'react-router-dom'
import { Footer, Loading, PokemonData } from '../components';
import { useFetchPokemon } from '../hooks';

export const Pokemon = () => {
    const { name } = useParams();
    const { pokemon, isLoading } = useFetchPokemon(name);

    return (
        <section className='bg-slate-300 pt-20'>
            {/* TODO: NAvigation and search input */}
            { isLoading ? <Loading/> : <PokemonData pokemon={ pokemon! }/>}
            <Footer/>
        </section>
    )
}
