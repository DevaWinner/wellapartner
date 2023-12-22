import { Container, Row, Col, Button } from "react-bootstrap";

const SalesComponent = () => {
	const services = [
		{
			icon: "healing",
			title: "HMO DRUG REFILLS",
			description: "Supply enrollees of over 25 HMOs in Nigeria.",
		},
		{
			icon: "call",
			title: "TELEMEDICINE DRUG PICKUPS",
			description:
				"List your pharmacy as a medication pick up point for telemedicine services.",
		},
		{
			icon: "home_health",
			title: "HANDLE MALARIA CLAIMS",
			description: "Get paid for medications and tests provided.",
		},
	];

	return (
		<Container
			fluid
			className="sales_container py-5 d-flex flex-column align-items-center"
		>
			<h2 className="text-center fs-4 fw-semibold mb-0">Boost your revenue</h2>
			<p className="text-center fs-4 mb-2">with WellaPartner</p>
			<img src="src/assets/stats.png" alt="Stats image" className="img-fluid" />

			<Container className="mb-3">
				<Row className="justify-content-center">
					<Col lg={6}>
						<p className="text-center fs-4 mt-2">
							With our innovative solutions and strategic expertise, we empower
							businesses like yours to reach new heights of success.
						</p>
					</Col>
				</Row>
			</Container>

			<Button variant="none" className="px-4 py-2 d-flex gap-3 mb-5">
				<span className="fs-5">Get Started</span>
				<span className="material-symbols-outlined fs-2">arrow_forward</span>
			</Button>
			<Container className="m-5">
				<Row className="justify-content-center">
					{services.map((service, index) => (
						<Col
							key={index}
							xs={12}
							lg={4}
							className={`mb-${
								index === services.length - 1 ? "0" : "5"
							} text-center`}
						>
							<div className="d-flex flex-column align-items-center">
								<span className="material-symbols-outlined fs-2 mb-3">
									{service.icon}
								</span>
								<p className="fw-bold">{service.title}</p>
							</div>
							<p>{service.description}</p>
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	);
};

export default SalesComponent;
