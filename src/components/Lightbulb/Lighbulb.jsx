import './Lightbulb.css'

const Lightbulb = ({ dark }) => {

    return <img className="lightbulb" src={`./assets/lightbulb_${dark ? "off" : "on"}.svg`} alt="Lightbulb" />
}
export default Lightbulb