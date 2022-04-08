import Row from "react-bootstrap/Row"
import HeroImage from "../HeroImage/HeroImage.jsx"
import CustomersSection from "./../CustomersSection/CustomersSection.jsx"
import Slogan from "./../Slogan/Slogan"
import './Hero.css'

const Hero = () => {

    return (
        <section className="hero-wrapper">
            <Row className="hero-content d-flex align-items-center align-content-center justify-content-between">
                <Slogan lg={6} xs={11} />
                <HeroImage />
            </Row>
            <CustomersSection />
        </section >
    )
}
export default Hero
