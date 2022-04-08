import { createContext, useState, useLayoutEffect } from "react"

const ThemeContext = createContext({ dark: false, toggle: () => { } })

const ThemeProviderWrapper = props => {


    const [dark, setDark] = useState(window.localStorage.getItem('darkTheme'))

    const [isLoading, setIsLoading] = useState(true)

    const toggle = () => {
        setTimeout(() => {
            setDark(!dark)
            window.localStorage.setItem('darkTheme', !dark)
            document.getElementsByTagName('body')[0].dataset.darktheme = dark
        }, 150)
    }

    useLayoutEffect(() => {
        const lastTheme = window.localStorage.getItem('darkTheme')

        if (lastTheme === 'true') {
            setDark(true)
        } else {
            setDark(false)
        }

        document.getElementsByTagName('body')[0].dataset.darktheme = dark
        setIsLoading(false)
    }, [dark])

    setTimeout(() => document.querySelector("body").classList.add('body-transition'), 50)

    return <ThemeContext.Provider value={{ dark, toggle, isLoading, setIsLoading }} >{props.children}</ThemeContext.Provider>
}
export { ThemeContext, ThemeProviderWrapper }