import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';


const Records = () => {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/api/records')
			.then(res => res.json())
			.then(data => setRecords(data))
			.catch(err => console.error(err));
	}, []);


    return (

	   <main className="main text-center">
			<Container>
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between py-5">
					<h2 className="page-title ms-2 mb-0">All Records</h2>
				</div>

				{ records.length !== 0 ?   (
				<Row className="d-flex justify-content-center">
					
					<Card bg="dark" border="light" className="px-0">
						<Card.Header>
							<Row className="d-flex justify-content-between align-items-center text-center">
								<Col xs={4} lg={2} className="fs-3 spent">Date</Col>
								<Col xs={4} lg={2} className="fs-3 spent">Category</Col>
								<Col xs={4} lg={2} className="fs-3 spent">Spent</Col>
								<Col lg={5} className="fs-3 spent d-none d-lg-inline-block mx-auto">Description</Col>
								<Col lg={1} className="fs-3 spent d-none d-lg-inline-block mx-auto"></Col>
							</Row>
						</Card.Header>
						<div id="recordWrapper">
							{records.map((record, index) => (
								<Card.Footer data-record-div className="border-white" key={index}>
									<Row className="d-flex justify-content-between align-items-center text-center">
										<Col data-record-date xs={4} lg={2} className="fs-5 text-white mx-auto">
											{record.createdAt}
										</Col>
										<Col data-record-category xs={4} lg={2} className="fs-5 text-white mx-auto">
											{record.category.name}
										</Col>
										<Col data-record-money xs={4} lg={2} className="fs-3 mx-auto spent">
											{record.money}
										</Col>
										<Col data-record-description lg={5} className="fs-5 text-white mt-lg-0 mx-auto">
											{record.description}
										</Col>
										<Col lg={1} className="d-grid fs-5 text-white mt-lg-0 mx-auto">
											<Button
												variant="outline-warning"
												data-edit-button
												data-bs-toggle="modal"
												data-bs-target="#modalFormEditRecord"
											>
												Edit
											</Button>
										</Col>
									</Row>
								</Card.Footer>
							))}
						</div>
					</Card>
				</Row>
				) :<Spinner animation="border" variant="warning" className="position-absolute top-50 left-50" /> }
			</Container>	
		</main>
	   	
    );
}

export default Records;