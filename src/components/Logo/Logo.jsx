import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
import "./Logo.css"

const Logo = () => {

    return (
        <Col className="d-flex ml-landing logo-col">
            <Link to="/" className="d-flex">
                <img src="./BoxfishStudio.svg" className="logo-svg" alt='boxfish logo' />
                <section className="text-logo">
                    <span className="boxfish-text">Boxfish</span>
                    <br />
                    <span className="studio-text">studio</span>
                </section>
            </Link>
        </Col>
    )
}
export default Logo