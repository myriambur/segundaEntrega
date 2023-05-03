import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./navBar.css"

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
              </ul> 
        </div>
    </nav>
  )
}