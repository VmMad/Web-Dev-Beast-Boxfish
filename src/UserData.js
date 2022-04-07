const { userAgent, geolocation } = navigator

const userOS = () => {
    let OperatingSystem
    if (userAgent.indexOf("Win") !== -1) OperatingSystem = "Windows"
    if (userAgent.indexOf("Mac") !== -1) OperatingSystem = "MacOS"
    if (userAgent.indexOf("X11") !== -1) OperatingSystem = "UNIX"
    if (userAgent.indexOf("Linux") !== -1) OperatingSystem = "Linux"

    console.log("Sistema operativo:", OperatingSystem)
}
const userGeolocation = () => {


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
const logUserData = () => {
    userOS()
    userGeolocation()
}

export { logUserData }