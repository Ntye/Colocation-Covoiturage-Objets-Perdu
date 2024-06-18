import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom'
const Login = () => {


	return (
		<div className='centered'>
			<div className='entries'>
				<span className='intro-word'>CREATE YOUR ACCOUNT ON <span className='store'>AllStore</span></span>
				<div className='note'><span className='sub-text'>If you already have an account click</span> {'  '}
					<Link to="/connexion" className='link-deco'>HERE!</Link></div>
				<div className='entries-pic'>

					{/*<Form style={{ width: '400px' }} onSubmit={handleSubmit}  method='POST'>*/}

					<Form style={{ width: '400px' }}  method='POST'>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="Name">
								<Form.Control
									name="nom"
									type="text"
									placeholder="Name"/>
							</Form.Group>

							<Form.Group as={Col} controlId="Surname">
								<Form.Control
									name="prenom"
									type="text"
									placeholder="Surname"/>
							</Form.Group>
						</Row>


						<span className='sub-text text-bel' >You can use letters, numbers and symbols </span>
						<Form.Group className="user" controlId="username">
							<Form.Control
								name='user'
								type='text'
								placeholder="Username"
							/>
						</Form.Group>
						<Row className="pass">
							<Form.Group as={Col} controlId="Pwd">
								<Form.Control
									name="pwd"
									type="password"
									placeholder="Password"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="Confirmation-pwd">
								<Form.Control
									name="confpwd"
									type="password"
									placeholder="Confirmation Password"
								/>
							</Form.Group>
						</Row>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="Numero">
								<Form.Control
									name="mobile"
									type="text"
									placeholder="Telephone Number"
								/>
							</Form.Group>
						</Row>

						<span className='sub-text text-bel' >Date of Birth</span>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="Date">
								<Form.Control name="dateNaiss" type="date" placeholder="Date de naissance"/>
							</Form.Group>

							<Form.Group as={Col} controlId="Sexe">
								<Form.Select name='sexe'>
									<option value="">Gender</option>
									<option value ="0" >Male</option>
									<option value ="1" >Female</option>
								</Form.Select>
							</Form.Group>
						</Row>

						<Button className='custom-button' variant="secondary" type="submit" value="SEND">
							SIGN UP
						</Button><br/><br/>
						<span className='sub-text'>Are you an employee? </span> {'  '}
						<Link to="/connexion/signup-employee" className='link-deco'>Click Here!</Link>
					</Form>

					<img className='image' src={Image} alt="/" />
				</div>
			</div>
		</div>
	)
}

export default Login