import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Nabvar } from '../components/Nabvar';
import { About } from '../pages/About';
import { AllPokemons } from '../pages/AllPokemons';
import { Home } from '../pages/Home';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Nabvar/>
        <Routes>
          <Route path='home' element={ <Home/> }/>
          <Route path='all_pokemons' element={ <AllPokemons/> }/>
          <Route path='about' element={ <About/> }/>
          <Route path='/*' element={ <Navigate to='/home'/> }/>
        </Routes>
    </BrowserRouter>
  )
}
