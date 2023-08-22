import "./Navbarstyle.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"
// import {MDBSideNav,MDBSideNavMenu,MDBSideNavItem,MDBSideNavLink,MDBIcon,MDBSideNavCollapse,MDBBtn} from 'mdbreact';

const Navbar = () => {

  const [rightOpen, setRightOpen] = useState(true);
  const [rightCollapse1, setRightCollapse1] = useState(true);
  const [rightCollapse2, setRightCollapse2] = useState(false);

  const[click,setClick]=useState(false);
  const handleclick=()=>setClick(!click);
  

  const[color,setcolor]=useState(false);
  const chanecolor=()=>
  {
    if(window.screenY>=100)
    {
      setcolor(true)
    }else
    {
      setcolor(false)
    }
  };
  window.addEventListener("scroll",chanecolor);
  return (
    <>
    {/* <MDBSideNav right isOpen={rightOpen} absolute getOpenState={(e: any) => setRightOpen(e)}>
    <MDBSideNavMenu>
      <MDBSideNavItem>
        <MDBSideNavLink>
          <MDBIcon far icon='smile' className='fa-fw me-3' />
          <span className='sidenav-non-slim'>Link 1</span>
        </MDBSideNavLink>
      </MDBSideNavItem>
      <MDBSideNavItem>
        <MDBSideNavLink
          icon='angle-down'
          shouldBeExpanded={rightCollapse1}
          onClick={() => setRightCollapse1(!rightCollapse1)}
        >
          <MDBIcon fas icon='grin' className='fa-fw me-3' />
          <span className='sidenav-non-slim'>Category 1</span>
        </MDBSideNavLink>
        <MDBSideNavCollapse show={rightCollapse1}>
          <MDBSideNavLink>Link 2</MDBSideNavLink>
          <MDBSideNavLink>Link 3</MDBSideNavLink>
        </MDBSideNavCollapse>
      </MDBSideNavItem>
      <MDBSideNavItem>
        <MDBSideNavLink
          icon='angle-down'
          shouldBeExpanded={rightCollapse2}
          onClick={() => setRightCollapse2(!rightCollapse2)}
        >
          <MDBIcon fas icon='grin' className='fa-fw me-3' />
          Category 1
        </MDBSideNavLink>
        <MDBSideNavCollapse show={rightCollapse2}>
          <MDBSideNavLink>Link 4</MDBSideNavLink>
          <MDBSideNavLink>Link 5</MDBSideNavLink>
        </MDBSideNavCollapse>
      </MDBSideNavItem>
    </MDBSideNavMenu>
  </MDBSideNav>

  <div style={{ padding: '20px' }} className='text-center'>
    <MDBBtn onClick={() => setRightOpen(!rightOpen)}>
      <MDBIcon fas icon='bars' />
    </MDBBtn>
  </div> */}

    <div className={color ?" header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={
        click? "nav-menu.active":"nav-menu"
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
        {
          click?(<FaTimes size={20} style={{color:"#fff"}}/>):
          ( <FaBars size={20} style={{color:"#fff"}}/>)
        }
 
       

      </div>
    </div>
    </>
  )
}

export default Navbar
