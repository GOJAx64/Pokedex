import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { About, Home, Pokemons, Pokemon, PageNotFound } from '../pages';
import { Nabvar } from '../components';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Nabvar/>
        <Routes>
          <Route path='home'           element={ <Home/>         }/>
          <Route path='pokemons'       element={ <Pokemons/>     }/>
          <Route path='pokemons/:name' element={ <Pokemon/>      }/>
          <Route path='about'          element={ <About/>        }/>
          <Route path='page_not_found' element={ <PageNotFound/> }/>
          <Route path='/*'             element={ <Navigate to='/home'/> }/>
        </Routes>
    </BrowserRouter>
  )
}