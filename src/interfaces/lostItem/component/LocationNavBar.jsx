import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaSearch } from 'react-icons/fa'
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavBar.css'
import '../styles/General.css'
import NavBarLink from './NavBarLink.jsx'

function GeneralNavBar() {
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
								GOFind
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
								{navItems.map((item, index) => (
									<NavBarLink
										key={item.id}
										name={item.name}
										link={item.link}
									/>
								))}
								<Nav.Link href="#action1" className="secondary-color">Home</Nav.Link>
								<Nav.Link href="#action2" className="secondary-color">Link</Nav.Link>
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

export default GeneralNavBar;