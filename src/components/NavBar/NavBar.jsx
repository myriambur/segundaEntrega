import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
export const NavBar = () => {
  return (
    <nav className="navigation">
        <Link className="brand-name" to={`/`}>
          Calidad a tu Vida
        </Link>
        <div
            className="navigation-menu">
            <ul>
                <li>
                  <NavLink to={`/category/Harinas`}>Harinas</NavLink>
                  </li>
                  <li> 
                  <NavLink to={`/category/Semillas`}>Semillas</NavLink>
                  </li>
                  <li> 
                  <NavLink to={`/category/Suplemento`}>Suplementos</NavLink>
                  </li>
                  <li>
                  <CartWidget/>
                  </li>
              </ul> 
        </div>

    </nav>
  )
}