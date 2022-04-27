import * as React from 'react';
import {NavLink, Outlet} from 'react-router-dom'; 

import "./Layout.css"

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {
    return (
        <>
        <header>
            <nav>
				<NavLink to="/" className={setActive}>Home</NavLink>
				<NavLink to="/conversion" className={setActive}>Сonversion </NavLink>
                <NavLink to="/compare" className={setActive}>Сomparison </NavLink>
			</nav>
        </header>   

        <main>
        <Outlet />
        </main>
           
        </>
    )
}

export default Layout