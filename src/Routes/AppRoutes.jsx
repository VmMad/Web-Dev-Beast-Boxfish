import { Routes, Route } from "react-router-dom"
import LandingPage from '../pages/LandingPage/LandingPage'
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
export default AppRoutes