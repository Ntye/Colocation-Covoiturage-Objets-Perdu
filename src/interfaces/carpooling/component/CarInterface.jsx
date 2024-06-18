import 'bootstrap/dist/css/bootstrap.min.css';

import {Outlet} from "react-router-dom"
import CarNavBar from './CarNavBar.jsx'

const GeneralInterface = () => {
	const show = true

	return (
		<div className="main-container">
			<CarNavBar/>
			<Outlet/>
		</div>
	)
}

export default GeneralInterface