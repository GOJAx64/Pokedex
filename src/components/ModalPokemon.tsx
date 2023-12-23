import { useAppContext } from "../hooks"

export const ModalPokemon = () => {
    const { showModalPokemon, closePokemonById } = useAppContext();

    return (
    <section className={`fixed top-0 left-0 right-0 bg-red-400 h-screen transition-all duration-500 ${ showModalPokemon ? "visible opacity-100" : "invisible opacity-0"}`}>
        <button onClick={ closePokemonById } className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity">X</button>
        <article className={`bg-slate-800 h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${ showModalPokemon ? "bottom-0" : "bottom-full"}`}>Pokemon</article>
    </section>
  )
}
