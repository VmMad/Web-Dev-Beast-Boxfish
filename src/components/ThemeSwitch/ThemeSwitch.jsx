import Lightbulb from "../Lightbulb/Lighbulb"
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
            <Lightbulb dark={dark} />
        </button>
    )
}
export default ThemeSwitch