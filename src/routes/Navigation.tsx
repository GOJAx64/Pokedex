import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Nabvar } from '../components/Nabvar';
import { About } from '../pages/About';
import { Pokemons } from '../pages/Pokemons';
import { Home } from '../pages/Home';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Nabvar/>
        <Routes>
          <Route path='home' element={ <Home/> }/>
          <Route path='pokemons' element={ <Pokemons/> }/>
          <Route path='about' element={ <About/> }/>
          <Route path='/*' element={ <Navigate to='/home'/> }/>
        </Routes>
    </BrowserRouter>
  )
}
