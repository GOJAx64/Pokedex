import { useForm } from '../hooks'

export const InputSearch = () => {
  const { searchText, onInputChange }:any = useForm({ //TODO: dont use any 
    searchText: ''
  });
  
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if( searchText.trim().length < 2) return;
    console.log(searchText);
  }

  return (
    <section className="p-3">
      <form onSubmit={ onSubmit }>   
        <div className="bg-slate-800 p-2 flex rounded-2xl text-lg">
          
          <input 
            type="search" 
            className="bg-slate-800 outline-none flex-1 text-gray-800" 
            placeholder="Search your Pokemon" 
            autoComplete="off"
            name="searchText"
            value={ searchText }
            onChange={ onInputChange }
          />
          <button 
            className="btn px-6 py-2 bg-slate-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" 
            type="button" 
          >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </button>
            
        </div>
      </form>
    </section>
  )
}
