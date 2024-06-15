import Spinner from 'react-bootstrap/Spinner';

function Loading () {
	return (
		<div className="d-flex align-middle justify-content-around">
			<h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary"/>
		</div>
	)
}

export default Loading