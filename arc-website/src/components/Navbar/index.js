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
                    <NavLinks to="home">Home</NavLinks>
                  </NavItems>
                  <NavItems>
                    <NavLinks to="achievements">Achievements</NavLinks>
                  </NavItems>
                  <NavItems>
                    <NavLinks to="hierarchy">Hierarchy</NavLinks>
                  </NavItems>
                  <NavItems>
                    <NavLinks to="about">About</NavLinks>
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