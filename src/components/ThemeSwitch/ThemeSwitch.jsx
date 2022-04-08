import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import './ThemeSwitch.css'

const ThemeSwitch = ({ themeSwitch }) => {

    const { dark, toggle } = useContext(ThemeContext)


    return (
        <button className="toggle-theme"
            onClick={() => {
                themeSwitch()
                toggle()
            }}
            title={dark ? "Switch to Light Theme" : "Switch to Dark Theme"}
        >
            <img className="lightbulb" src={`./assets/${dark ? "off" : "on"}.svg`} alt="Lightbulb" />
        </button>
    )
}
export default ThemeSwitch