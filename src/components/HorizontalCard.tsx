interface Props {
  linkRepo: string;
  name: string;
  img: string;
  description: string;
}

export const HorizontalCard = ( { linkRepo, name, img, description }:Props ) => {
  return (
    <a href={linkRepo} target="blank" className="flex items-center sm:mx-4 bg-slate-300 rounded-lg border border-slate-400 shadow-md md:flex-row md:w-full hover:bg-slate-200 hover:border-slate-500">
        <img className="object-cover w-16 h-18 ml-2 rounded-t-lg md:rounded-none md:rounded-l-lg" src={ img } alt={ name } />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className='text-left mb-1 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-900'>{ name }</h5>
            <p className="mb-0.5 italic text-gray-700 text-left">{ description }</p>
        </div>
    </a>
  )
}
