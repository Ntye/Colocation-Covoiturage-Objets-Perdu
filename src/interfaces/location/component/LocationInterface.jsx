import 'bootstrap/dist/css/bootstrap.min.css';
import LocationNavBar from './LocationNavBar.jsx'
import {Outlet} from "react-router-dom"

const LocationInterface = () => {
	const show = true

	return (
		<div className="main-container">
			<LocationNavBar/>
			<Outlet/>
		</div>
	)
}

export default LocationInterface