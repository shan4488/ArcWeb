import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
     <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'>arc</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars/>
                </MobileIcon>
                <NavMenu>
                  <NavItems>
                    <NavLinks to="home"
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  offset={0}
                                  duration={1000}
                    >Home</NavLinks>
                  </NavItems>
                  <NavItems>
                    <NavLinks to="achievements" 
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  offset={0}
                                  duration={1000}
                    >Achievements</NavLinks>
                  </NavItems>
                  <NavItems>
                    <NavLinks to="hierarchy"
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  offset={0}
                                  duration={1000}
                    >Hierarchy</NavLinks>
                  </NavItems>
                  <NavItems>
                    <NavLinks to="about"
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  offset={0}
                                  duration={1000}
                    >About</NavLinks>
                  </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
     </>
  )
}

export default Navbar