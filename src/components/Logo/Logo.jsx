import "./Logo.css"
import { Link } from "react-router-dom"

const Logo = () => {

    return (
        <Link to="/">
            <img src="./BoxfishStudio.svg" className="logo-svg" />
            <section>
                <span className="boxfish-logo">Boxfish</span>
                <br />
                <span className="studio-logo">studio</span>
            </section>
        </Link>
    )
}
export default Logo