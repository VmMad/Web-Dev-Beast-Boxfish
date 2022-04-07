import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import './ContactInfo.css'

const ContactInfo = () => {

    return (
        <Col xs={3} className="contact-info">
            <div>
                <Link to="#">info@boxfish.studio</Link>
                <Link to="#">+34 910 615212</Link>
            </div>
        </Col>
    )
}
export default ContactInfo