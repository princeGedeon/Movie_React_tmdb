import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center justify-between px-6 py-3 pr-5 bg-blue-600 sm:flex-col md:flex-row">
            <div className="">
                <h1 className="text-white uppercase xl:text-5xl md:text-4xl sm:text-3xl"><span className="text-yellow-400">Prince</span>Movie</h1>
            </div>
            <nav>
                <ul className="flex items-center justify-between ml-3 text-white">
                   <NavLink to="/"  className={(nav)=>nav.isActive?"bg-blue-600":""}> <li className="px-3 py-2 mx-3 ">Acceuil</li></NavLink>
                    <NavLink to="/coup_de_coeur" className={(nav)=>nav.isActive?"bg-blue-600":""}><li className="px-3 py-2 mx-3 hover:bg-blue-800">Coup de coeur</li></NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;