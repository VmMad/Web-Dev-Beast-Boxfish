import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import './MenuPages.css'


const MenuPages = ({ themeSwitch }) => {

    return (
        <Col xs={4} className="info-pages ms-auto nav nav-menu">
            <ThemeSwitch themeSwitch={themeSwitch} />
            <Link to="/services">Services</Link>
            <Link to="/about">About us</Link>
            <Link to="/career">Career</Link>
            <Link to="/work">Work</Link>
        </Col>
    )
}
export default MenuPages