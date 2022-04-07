import Col from "react-bootstrap/Col"
import './HeroImage.css'

const HeroImage = () => {

    return (
        <Col className='hero-image' lg={6} md={12} xs={12}>
            <img src="./assets/hero_bicycle.png" alt="bicycle" />
        </Col>
    )
}
export default HeroImage