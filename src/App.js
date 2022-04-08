import './App.css'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header/Header'
import { useEffect } from 'react'
import logUserData from './utils'
import { useUA } from 'use-ua-parser-js'

const App = () => {

    const UADetails = useUA()

    useEffect(() => {
        logUserData(UADetails)
    }, [])


    return (
        <>
            <Header />
            <AppRoutes />
        </>
    )
}

export default App
