import pikachu from '../assets/pikachu.png';

export const Card = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-slate-200 border border-slate-400">
        <img className="w-32 h-32 mx-auto mt-4" src={pikachu} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Pikachu</div>
            <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
    </div>
  )
}
