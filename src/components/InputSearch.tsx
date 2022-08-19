import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks'

export const InputSearch = () => {
  const navigate = useNavigate();

  const { searchText, onInputChange }:any = useForm({ //don't use any
    searchText: ''
  });
  
  const onSearchSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if( searchText.trim().length < 2) return;
    navigate(`${searchText.toLowerCase()}`);
  }

  return (
    <form onSubmit={ onSearchSubmit }>   
      <div className="flex justify-center mx-auto mb-1 mt-4">
        <div className="w-96 md:w-1/2 ">
          <div className="input-group  flex flex-row items-stretch w-full mb-4">
            <input 
              type="search" 
              className=" flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal text-gray-700 bg-slate-100 bg-clip-padding border border-solid border-neutral-900 rounded-l transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:border-red-500 focus:outline-none" 
              placeholder="Search Pokémon" 
              aria-label="Search" 
              aria-describedby="button-addon2"
              autoComplete="off"
              name="searchText"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button 
              className="btn inline-block px-6 py-2 bg-neutral-900 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" 
              type="button" 
              id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
