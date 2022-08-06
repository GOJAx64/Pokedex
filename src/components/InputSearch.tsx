export const InputSearch = () => {
  return (
    <div className="container">
        <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative border border-slate-500 rounded-lg focus:border-red-800 ">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block p-4 pl-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg" placeholder="🔍 Search a pokemon..." required/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>
    </div>
  )
}
