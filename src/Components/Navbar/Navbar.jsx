import React,{useState}from 'react'
import './navbar.css'
import {MdOutlineTravelExplore } from 'react-icons/md'
import {AiOutlineClose } from 'react-icons/ai'
import {PiDotsNine } from 'react-icons/pi'
// import { NavLink } from 'react-router-dom';
// import img from '../../Assets/logo.jpg'
const Navbar = () => {
  const[active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  const removeNavbar = ()=>{
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon"/>ATT.</h1>
            {/* <img src={img}/> */}
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
              {/* <NavLink className="navLink" to="/">Home</NavLink> */}
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
              {/* <NavLink className="navLink" to="/packages">Packages</NavLink> */}
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Car Rental</a>
              {/* <NavLink className="navLink" to="/rental">Car Rental</NavLink> */}
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Air Tickets</a>
              
              {/* <NavLink className="navLink" to="/ticket">Air Tickets</NavLink> */}
            </li>
            {/* <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li> */}
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiOutlineClose className="icon"/>
          </div>
        </div>

        <div onClick ={showNav}className="toggleNavbar">
          <PiDotsNine className="icon"/>
        </div>





      </header>

    </section>
  )
}

export default Navbar