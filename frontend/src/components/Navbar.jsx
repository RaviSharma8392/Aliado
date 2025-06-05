import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  //createing state for scrolling effect
  const[isScroll, setIsScroll]=useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(()=>{const handleScroll=()=>{
// if window.scrooly value greter thn 50px then setIsscroll true
    setIsScroll(window.scrollY>1)
  }
// every scroll call handelScroll function
window.addEventListener("scroll",handleScroll)
// it's cleanup function in react useeffect
// this function run if before rerunning the effect
return () => window.removeEventListener('scroll', handleScroll);

  },[])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return ( 
    <nav className={` md:px-40  fixed w-full z-50 font-bold ${isScroll?' bg-[#20163c] text-white':isMenuOpen?'bg-white':"bg-transparent"}`}>
      <div className='container mx-auto p-6'>
        <div className='flex justify-between items-center'>
          {/* Logo placeholder - uncomment when you have a logo */}
          <div>{isScroll?   <img className="text-black md:h-20 h-15" src="https://i.postimg.cc/VsJ96m8r/Whats-App-Image-2025-03-20-at-11-44-09-removebg-preview.png" alt="" />:
             <img className="text-black md:h-20 h-15" src="/images/ChatGPT Image Jun 4, 2025, 08_10_39 PM.png" alt="" />}
          
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex text-[14px] gap-6'>  
            <NavLink to="/" className="hover:text-blue-700 transition">HOME</NavLink>
            <NavLink to="/projects" className="hover:text-blue-700 transition">PROJECTS</NavLink>
            <NavLink to="/service" className="hover:text-blue-700 transition">SERVICE</NavLink>
            <NavLink to="/team" className="hover:text-blue-700 transition">TEAM</NavLink>
            <NavLink to="/contact" className="hover:text-blue-700 transition">CONTACT</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button 
              onClick={toggleMenu}
              className='text-black focus:outline-none'
            >
              {isMenuOpen ? (
                <svg className={`w-6 h-6 `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className={`w-6 h-6 ${isScroll ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 ${isScroll?"bg-transparent":"bg-white"}`}>
            <NavLink 
              to="/" 
              className="block hover:text-blue-700 transition"
              onClick={toggleMenu}
            >
              HOME
            </NavLink>
            <NavLink 
              to="/projects" 
              className="block hover:text-blue-700 transition"
              onClick={toggleMenu}
            >
            PROJECTS
            </NavLink>
            <NavLink 
              to="/service" 
              className="block hover:text-blue-700 transition"
              onClick={toggleMenu}
            >
              SERVICE
            </NavLink>
            <NavLink 
              to="/team" 
              className="block hover:text-blue-700 transition"
              onClick={toggleMenu}
            >
              TEAM
            </NavLink>
            <NavLink 
              to="/contact" 
              className="block hover:text-blue-700 transition"
              onClick={toggleMenu}
            >
              CONTACT
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar