import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav className="nav-header">
      <div className="logo">
        <img src={logo}/>
      </div>
      <div className="links">
        {links.map(l => <a key={l.id} className="nav-toggle" href={l.url}>{l.text}</a>)}
      </div>
      <div className="social-icons">
        {social.map(s => <a key={s.id} href={s.url}>{s.icon}</a>)}
      </div>
    </nav>
  )
}

export default Navbar
