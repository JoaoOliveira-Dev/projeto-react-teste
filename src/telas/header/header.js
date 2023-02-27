// Componentes do React
import React from 'react'

// Componente
import Nav from '../nav/nav'

// CSS
import './header.css'

const Header = () => {
  return (
    <header>
      <h1>Projeto</h1>
      <input type="checkbox" className="nav-toggle" hidden/>
      <Nav />
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  )
}

export default Header