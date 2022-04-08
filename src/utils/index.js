import getUserGeolocation from "./userGeolocation.js"
import axios from 'axios'

const getUserIP = async () => {
	const { data: { IPv4, country_name, city } } = await axios.get('https://geolocation-db.com/json/')
	console.log("IP pública:", IPv4, "Ciudad:", city, "País:", country_name)
}

const logElapsedTime = () => {


	let xPos = 0, yPos = 0, onPage = true

	const setMousePos = ({ clientX, clientY }) => {
		xPos = clientX
		yPos = clientY
	}

	const setOnPage = boolean => onPage = boolean

	document.addEventListener('mouseleave', () => setOnPage(false))
	document.addEventListener('mouseenter', () => setOnPage(true))
	document.addEventListener('mousemove', setMousePos)

	const start = Date.now()

	setInterval(() => {
		console.log(`Tiempo transcurrido: %c${Math.floor((Date.now() - start) / 1000)}s`, "color:rgb(255 92 92); font-weight:bold")
		console.log(onPage ? `Posición del ratón: %c${xPos} ${yPos}`
			: `El ratón ha salido de la página. \nÚltima posición: %c${xPos} ${yPos}`, "color:rgb(255 92 92); font-weight:bold")
	}, 1000)
}


const logUserData = (UADetails) => {

	const {
		browser: { name: browserName },
		device: { vendor, model, type },
		os: { name: osName }
	} = UADetails

	getUserGeolocation()
	getUserIP()
	console.log(`Navegador: ${browserName}, Dispositivo: ${type ? (vendor, model, "Tipo:", type) : "Ordenador"}, Sistema Operativo: ${osName}`)

	logElapsedTime()
}

export default logUserData