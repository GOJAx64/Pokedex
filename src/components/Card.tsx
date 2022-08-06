import pikachu from '../assets/pikachu.png';

export const Card = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Pikachu</h5>
            </a>
            <a href="#">
                <img className="rounded-t-lg h-28 w-28 items-center" src={pikachu} alt="" />
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the </p>
            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    // <div className="max-w-sm bg-white rounded-lg shadow-md">
    //     <div className="px-5 py-5">
    //         <a href="#">
    //             <h5 className="text-xl font-semibold tracking-tight text-gray-900">Pikachu</h5>
    //         </a>
    //         <a href="#">
    //             <img className="mx-auto p-8 rounded-t-lg w-48 h-48" src={pikachu} alt="product image" />
    //         </a>
            
    //         <div className="flex justify-between items-center">
    //             <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center">electric</span>
    //             <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center">electric</span>
    //             <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center">electric</span>
                
    //         </div>
    //     </div>
    // </div>
  )
}
