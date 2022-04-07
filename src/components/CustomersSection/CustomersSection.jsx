import './CustomersSection.css'
import { Row, Col } from "react-bootstrap"

const CustomersSection = () => {

    return (
        <Row className='customers align-items-center justify-content-center'>
            <Col lg={5} md={12} className="d-flex customer-logos customers-end">
                <img src="./assets/fake1.png" alt="LinkedIn Logo" />
                <img src="./assets/fake3.png" alt="Vans Logo" />
                <img src="./assets/fake6.png" alt="Yk Logo" />
            </Col>
            <Col lg={{ span: 5 }} md={12} className="d-flex customer-logos customers-start">
                <img src="./assets/fake5.png" alt="Twitter Logo" />
                <img src="./assets/fake2.png" alt="Logo" />
                <img src="./assets/fake4.png" alt="Apple Logo" />
            </Col>
        </Row>
    )
}
export default CustomersSection