import "./Navbarstyle.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {



  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);


  const [color, setcolor] = useState(false);
  const chanecolor = () => {
    if (window.screenY >= 100) {
      setcolor(true)
    } else {
      setcolor(false)
    }
  };
  window.addEventListener("scroll", chanecolor);
  return (
    <>


      <div className={color ? " header-bg" : "header"}>
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>
        <ul className={
          "nav-menu"
        }>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/project" >Product</Link>
          </li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleclick}>

        </div>
      </div>
    </>
  )
}

export default Navbar
