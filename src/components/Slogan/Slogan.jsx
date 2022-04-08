import Col from "react-bootstrap/Col"
import './Slogan.css'

const Slogan = ({ lg, xs }) => {

    return (
        <Col lg={lg} sm={12} xs={xs} className='slogan'>
            <h1>Engineering with <span className='red-text'>love</span> and <span className="red-text">passion</span></h1>
            <h2>High-quality solutions for emerging technologies and industries</h2>
        </Col>
    )
}
export default Slogan