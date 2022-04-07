import { Link } from "react-router-dom"
import './ContactInfoMD.css'

const ContactInfoMD = () => {

    return (
        <div className="contact-info-md-container justify-content-center" >
            <div className="mt-1 mb-1 ws-nowrap">
                <Link to="#">info@boxfish.studio</Link>
                <div className="red-dot"></div>
                <Link to="#" className="d-flex me-auto">+34 910 615212</Link>
            </div>
        </div>
    )
}
export default ContactInfoMD