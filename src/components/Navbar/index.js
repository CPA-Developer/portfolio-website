import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon,
NavItems, NavLinks, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                Developer
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
            <NavItems>
                <NavLinks  to='about'>About</NavLinks>
            </NavItems>
            <NavItems>
                <NavLinks to='timeline'>Timeline</NavLinks>
            </NavItems>
          
            <NavItems>
                <NavLinks to='Skills'>Skills</NavLinks>
            </NavItems>
            
            </NavMenu>
              
              <NavBtn>
                <NavBtnLink to='Contact'>Contact</NavBtnLink>
              </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
