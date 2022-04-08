import { useState } from "react"
import { Navbar, Container } from "react-bootstrap"
import ContactInfoMD from "../ContactInfoMD/ContactInfoMD"
import ContactInfo from "../ContactInfo/ContactInfo"
import Logo from "./../Logo/Logo"
import Menu from "../Menu/Menu"
import MenuPages from "../MenuPages/MenuPages"
import "./Header.css"

const Header = () => {

    const [menuStatus, setMenuStatus] = useState(false)

    const activeMenu = () => {
        setMenuStatus(!menuStatus)
        menuStatus ?
            document.querySelector(".unfocus").classList.remove("active-unfocus") :
            document.querySelector(".unfocus").classList.add("active-unfocus")
    }

    const themeSwitch = () => {
        document.querySelector(".toggle-theme").classList.toggle("transition")
        setTimeout(() => document.querySelector(".toggle-theme").classList.toggle("transition"), 500)
    }

    return (
        <>
            <Navbar expand="xs" variant="light" expanded={menuStatus}
                className="header navbar d-flex flex-row align-items-center justify-content-between row">
                <Container className="navbar-container">
                    <Logo />
                    <ContactInfo />
                    <MenuPages themeSwitch={themeSwitch} />
                    <Menu activeMenu={activeMenu} themeSwitch={themeSwitch} />
                </Container>
                <ContactInfoMD />
            </Navbar >
            <div className='unfocus' onClick={() => activeMenu()}></div>
        </>
    )
}
export default Header