import { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { ThemeContext } from '../../context/ThemeContext'
import './Menu.css'

const Menu = ({ activeMenu, themeSwitch }) => {

    const { dark, toggle } = useContext(ThemeContext)

    return (
        <>
            <Navbar.Toggle onClick={() => activeMenu()}
                className='menu-button text-center align-items-center justify-content-center'>
                <span id="menu-icon" className="icon">&equiv;</span>
                <span className='menu-text ms-2'>Menu</span>
            </Navbar.Toggle>
            <Navbar.Collapse className="menu-links" id="responsive-navbar-nav">
                <Nav className="text-end menu-links-container align-content-between">
                    <NavLink to="#" className="toggle-theme-link" onClick={() => {
                        themeSwitch()
                        toggle()
                    }}>Toggle {!dark ? "dark" : "light"} theme</NavLink>
                    <NavLink to="/services" onClick={activeMenu}>Services</NavLink>
                    <NavLink to="/about" onClick={activeMenu}>About us</NavLink>
                    <NavLink to="/career" onClick={activeMenu}>Career</NavLink>
                    <NavLink to="/work" onClick={activeMenu}>Work</NavLink>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}
export default Menu