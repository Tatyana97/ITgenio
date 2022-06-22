import * as React from 'react';
import {NavLink, Outlet} from 'react-router-dom'; 

import "./Layout.css"

const setActive = ({isActive}) => isActive ? 'active-link' : '';

export const Layout = () => {
    return (
        <>
        <header>
            <nav>
				<NavLink to="/" className={setActive}>HOME</NavLink>
				<NavLink to="/conversion" className={setActive}>СONVERSION </NavLink>
                <NavLink to="/compare" className={setActive}>СOMPARE</NavLink>
			</nav>
        </header>   

        <main>
        <Outlet />
        </main>
           
        </>
    )
}