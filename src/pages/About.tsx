import { Footer, HorizontalCard } from '../components';

import jest from '../assets/jest.svg';
import react from '../assets/react.svg';
import typescript from '../assets/typescript.svg';
import tailwind from '../assets/tailwind.svg';
import portfolio from '../assets/portfolio.png';
import heisenberg from '../assets/heisenberg.png';
import notes from '../assets/notes.png';

export const About = () => {
  return (
    <section className='pt-20 bg-slate-200'>
        <div className="mb-6 grid max-w-screen-xl px-4 pb-8 pt-3 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl text-neutral-900 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">About this Pokédex</h1>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">This project is only for study purposes, without any kind of profit, obtaining the information from <a href={`https://pokeapi.co/`} target="blank" className="text-red-500 hover:underline">PokéAPI</a>.</p>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">
                    Developed by Alberto Garcia (GOJA), you can see my source <a href={`https://github.com/GOJAx64/Pokedex`} target="blank" className="text-red-500 hover:underline">code</a> as well as my other projects on my <a href={`https://github.com/GOJAx64`} target="blank" className="text-red-500 hover:underline"> GitHub</a>.
                </p>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">This SPA was developed with the following technologies.</p>
                  <img src={react}      className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center h-16 sm:h-24"/>
                  <img src={typescript} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center h-16 sm:h-24"/>
                  <img src={tailwind}   className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center h-16 sm:h-24"/>
                  <img src={jest}       className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center h-16 sm:h-24"/>
            </div>
            <div className="mt-8 mx-auto lg:mt-0 lg:col-span-5 lg:flex">
                <div className="place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl text-neutral-900 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">More Projects</h1>
                    <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-900 lg:mb-8 md:text-lg">Here I present similar projects to this one.</p>
                    <div className='mx-auto mt-1 sm:pb-12 text-center'>
                      <div className="grid grid-cols-1 gap-5">
                          <HorizontalCard 
                            key={0} 
                            name={'Portfolio'} 
                            description={'More about me and my projects'} 
                            linkRepo={'https://github.com/GOJAx64/Portfolio'} 
                            img={portfolio}
                          />
                          <HorizontalCard 
                            key={1} 
                            name={'Breaking Bad API'} 
                            description={'SPA of Breaking Bad API'} 
                            linkRepo={'https://github.com/GOJAx64/My-data-structures'} 
                            img={heisenberg}
                          />
                          <HorizontalCard 
                            key={2} 
                            name={'Scoreboards'} 
                            description={'Laravel 8, Web'} 
                            linkRepo={'https://github.com/GOJAx64/Scoreboards'} 
                            img={notes}
                          />
                      </div>
                    </div> 
                </div>
            </div>                
        </div>
        <Footer/>
    </section>
  )
}
