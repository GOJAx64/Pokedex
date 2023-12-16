import { Aside, Footer, Navbar, Pokemons } from './components'

export const App = () => {
  return (
    <>
        {/* <Navbar/> */}
        <section className='h-screen overflow-y-auto'>
            <main className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]'>
                <Pokemons/>
                <Aside/>
            </main>
        </section>
        {/* <Footer/> */}
    </>
  )
}
