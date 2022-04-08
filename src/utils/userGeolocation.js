
const getUserGeolocation = () => {
    const { geolocation } = navigator

    const success = pos => {
        const { coords: { latitude, longitude, accuracy } } = pos
        console.log(`Latitud: ${latitude}, Longitud: ${longitude}, con precisión ${accuracy}m`)
    }
    const error = err => {
        const { code, message } = err
        console.warn(`ERROR(${code}): ${message}`)
    }

    geolocation.getCurrentPosition(success, error)
}
export default getUserGeolocation
