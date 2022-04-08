import './App.css'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header/Header'
import { useEffect } from 'react'
import { logUserData } from "./UserData.js"
import { useUA } from 'use-ua-parser-js'


const App = () => {

    const UADetails = useUA()

    const { browser: { name: browser }, device: { vendor, model, type }, os: { osName } } = UADetails

    useEffect(() => {

        logUserData()
        console.log("Navegador:", browser, "Dispositivo:", (type ? (vendor, model, type) : "Computer"), "Tipo:")
    }, [])

    return (
        <>
            <Header />
            <AppRoutes />
        </>
    )
}

export default App
