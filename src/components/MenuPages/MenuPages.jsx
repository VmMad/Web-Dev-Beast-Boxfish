import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import './MenuPages.css'

const MenuPages = () => {

    return (
        <Col xs={4} className="info-pages ms-auto nav nav-menu">
            <Link to="/services">Services</Link>
            <Link to="/about">About us</Link>
            <Link to="/career">Career</Link>
            <Link to="/work">Work</Link>
        </Col>
    )
}
export default MenuPages