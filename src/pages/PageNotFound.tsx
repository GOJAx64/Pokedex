import { Link } from 'react-router-dom';
import { Footer } from '../components';

export const PageNotFound = () => {
  return (
    <>
      <section className="bg-slate-300 py-64 md:py-32">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry that pokemon does not exists int PokeAPI</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">You'll find lots to explore on the home page. </p>
                <Link to={`/home`} className="inline-flex text-slate-100 bg-red-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
                <Link to={`/pokemons`} className="ml-2 inline-flex text-slate-100 bg-red-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Pokemons</Link>
            </div>   
        </div>
      </section>
      <Footer/>
    </>
  )
}

