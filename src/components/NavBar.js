import React from 'react';
import { NavLink } from 'react-router-dom'
import "../css/NavBar.css"
export const NavBar = () => {
  return(
    <nav>
      <ul className="navbar">
        <li><NavLink to={'/'} >HOME</NavLink></li>
        <li><NavLink to={'/posts'} >POSTS</NavLink></li>
        <li><NavLink to={'/albums'} >ALBUMS</NavLink></li>
        <li><NavLink to={'/todos'} >TODOS</NavLink></li>
        <li><NavLink to={'/users'} >USERS</NavLink></li>
      </ul>
    </nav>
  )
}
