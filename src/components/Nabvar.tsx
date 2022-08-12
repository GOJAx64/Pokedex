import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../public/pokeball.png';

export const Nabvar = () => {
    const [toggleMenu, setToggleMenu] = useState(true);

    const onClickButton = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-neutral-900 p-6 fixed top-0 w-full">
            <div className="flex items-center flex-shrink-0 mr-6">
                <img src={logo} className=" h-8 w-8 mr-2" alt="logo" />
                <span className="text-2xl tracking-tight font-extrabold text-slate-200">Pokédex</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={ onClickButton } className="flex items-center px-3 py-2 border border-slate-300 rounded text-white hover:text-white hover:border-red-500">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div id='menuNavbar' className={ `w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right ${ toggleMenu ? 'hidden' : '' }`}>
                <div className="text-base lg:flex-grow">
                    <NavLink onClick={ onClickButton } 
                        to="/home" 
                        className={ ({ isActive }) => `${ isActive ? 'text-red-500' : 'text-slate-100 hover:text-red-200'} block mt-4 lg:inline-block lg:mt-0 font-bold mr-4`}>
                        Home
                    </NavLink>
                    <NavLink 
                        onClick={ onClickButton } 
                        to="/pokemons" 
                        className={ ({ isActive }) => `${ isActive ? 'text-red-500' : 'text-slate-100 hover:text-red-200'} block mt-4 lg:inline-block lg:mt-0 font-bold mr-4`}>
                        Pokémons
                    </NavLink>
                    <NavLink onClick={ onClickButton } 
                        to="/about" 
                        className={ ({ isActive }) => `${ isActive ? 'text-red-500' : 'text-slate-100 hover:text-red-200'} block mt-4 lg:inline-block lg:mt-0 font-bold mr-4`}>
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
