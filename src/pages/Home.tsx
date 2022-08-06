import pokedex from '../assets/pokedex_2.webp';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { InputSearch } from '../components/InputSearch';

export const Home = () => {
  return (
    <section className="bg-slate-200 pt-20" id="about">
        
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className=" mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl text-neutral-900 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">This is a Pokedex</h1>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">This is a simple page aplication that consumes the PokeApi. I hope you enjoy this SPA and take a look to my work 😃!!! </p>
                {/* <InputSearch/> */}
            </div>
            <div className="mt-4 lg:mt-0 lg:col-span-5 lg:flex">
                <img src={pokedex} className=" h-74 w-96 lg:ml-8" alt="pokedex" />
            </div>                
        </div>
        <div className='bg-slate-300' id="projects">
          <div className='py-5 bg-slate-400 text-center'>
            <h1 className=" text-2xl font-extrabold tracking-tight md:text-4xl ">Random Pokemons</h1>
          </div>
          <div className='container mx-auto mt-1 pb-12 text-center'>
            <div className="grid grid-cols-2 sm:grid-cols-4 sm:mx-4 lg:grid-cols-4 gap-5 lg:mx-0">
                {/* <Card key={1} />
                <Card key={2} />
                <Card key={3} />
                <Card key={4} /> */}
            </div>
          </div>
        </div>
        <Footer/>
    </section>
  )
}
