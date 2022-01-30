import React from 'react'
// import {} from 'react-icons'
import { FaBars } from 'react-icons/fa';
import{Nav, NavbarContainer,NavLogo,MobileIcon, NavMenu, NavItem,NavLinks,NavBtn,NavBtnLink} from "./NavbarElement"

const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Rupees
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discovar' >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='service' >Service</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' > Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Signin</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>   
        </>
    )
}

export default Navbar
