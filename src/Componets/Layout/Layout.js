import * as React from 'react';
import {NavLink, Outlet} from 'react-router-dom'; 

import "./Layout.css"

const setActive = ({isActive}) => isActive ? 'active-link' : '';

export const Layout = () => {
    return (
        <>
        <header>
            <nav>
				<NavLink to="/" className={setActive}>ГЛАВНАЯ</NavLink>
				<NavLink to="/conversion" className={setActive}>ТАБЛИЦА </NavLink>
                <NavLink to="/compare" className={setActive}>СРАВНЕНИЕ</NavLink>
			</nav>
        </header>   

        <main>
        <Outlet />
        </main>
           
        </>
    )
}