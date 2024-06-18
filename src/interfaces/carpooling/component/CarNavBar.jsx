import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaSearch } from 'react-icons/fa'
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../styles/General.css'
import { Link, NavLink } from 'react-router-dom'

function CarNavBar() {
	return (
		<>
			<Navbar key="md" expand="md" className="navbar">
				<Container fluid>
					<Navbar.Brand href="#" className="primary-color logo-title">GoFind</Navbar.Brand>
					<Navbar.Toggle aria-controls={"offcanvasNavbar-expand-md"} />
					<Navbar.Offcanvas
						id={"offcanvasNavbar-expand-md"}
						aria-labelledby={"offcanvasNavbarLabel-expand-md"}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={"offcanvasNavbarLabel-expand-md"} className="primary-color logo-title">
								GoFind
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body >

							<Nav className="justify-content-end flex-grow-1 pe-3 secondary-color">
								<Form className="d-flex">
									<Form.Control
										type="search"
										placeholder="Search"
										className="me-2 secondary-color"
										aria-label="Search"
									/>
									<Button variant="outline-success" className="action-button"><FaSearch/></Button>
								</Form>
								<Nav.Item>
									<NavLink as={Link} to="/" className={
										({ isActive }) => (isActive ? 'nav-link nav-link-active ' : 'nav-link secondary-color')
									}>
										<div className="page">
											<span className="page-link">Home</span>
										</div>
									</NavLink>
								</Nav.Item>

								<Nav.Item>
									<NavLink as={Link} to="/" className={
										({ isActive }) => (isActive ? 'nav-link nav-link-active ' : 'nav-link secondary-color')
									}>
										<div className="page">
											<span className="page-link">Car Pooling</span>
										</div>
									</NavLink>
								</Nav.Item>

								<Nav.Item>
									<NavLink as={Link} to="/" className={
										({ isActive }) => (isActive ? 'nav-link nav-link-active ' : 'nav-link secondary-color')
									}>
										<div className="page">
											<span className="page-link">Co Location</span>
										</div>
									</NavLink>
								</Nav.Item>
							</Nav>

							<Nav.Link href="/profile" className="element">
								<Button className="login-button align-items-center">
									<FaUser/>
									Profile
								</Button>
							</Nav.Link>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default CarNavBar;