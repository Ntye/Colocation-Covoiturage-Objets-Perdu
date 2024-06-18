import 'bootstrap/dist/css/bootstrap.min.css';

import GeneralNavBar from './GeneralNavBar.jsx'
import { Outlet } from 'react-router-dom'

const GeneralInterface = () => {
	const show = true

	return (
		<div className="main-container">
			<GeneralNavBar/>
			<Outlet/>
			<div className="content-area">
			</div>
		</div>
	)
}

export default GeneralInterface