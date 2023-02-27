import React from 'react'

// CSS
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/" className='active'>Home</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  )
}

export default Nav