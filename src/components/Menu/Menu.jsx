import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import './Menu.css'

const Menu = ({ activeMenu }) => {

    const menuLinks = document.querySelector(".menu-links-container")
    menuLinks && menuLinks.childNodes.forEach(elm => elm.addEventListener("click", () => activeMenu()))

    return (
        <>
            <Navbar.Toggle onClick={() => activeMenu()}
                className='menu-button text-center align-items-center justify-content-center'>
                <span id="menu-icon" className="icon">&equiv;</span>
                <span className='menu-text ms-2'>Menu</span>
            </Navbar.Toggle>
            <Navbar.Collapse className="menu-links" id="responsive-navbar-nav">
                <Nav className="text-end menu-links-container align-content-between">
                    <NavLink to="#">Services</NavLink>
                    <NavLink to="#">About us</NavLink>
                    <NavLink to="#">Career</NavLink>
                    <NavLink to="#">Work</NavLink>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}
export default Menu