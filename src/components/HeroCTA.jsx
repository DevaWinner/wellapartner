import { Container, Row, Col, Button } from "react-bootstrap";

const HeroCTA = () => {
	return (
		<Container fluid className="p-5 mb-4 bg-white">
			<Container
				fluid
				className="py-4 d-flex flex-column align-items-center hero gap-4"
			>
				<h1 className="text-center fw-semibold display-6">
					10X your Pharmacy revenue with <br />
					<span className="hero_name fw-semibold display-6">Wellapartner</span>
				</h1>
				<Col md={6} className="fs-4 text-center fw-lighter">
					Simplify your pharmacy business and streamline your workflow and
					enhance patient care with Wellapartner
				</Col>
				<Button variant="none" className="px-4 py-2 d-flex gap-3">
					<span className="fs-5">Get Started</span>
					<span className="material-symbols-outlined fs-2">arrow_forward</span>
				</Button>
			</Container>
		</Container>
	);
};

export default HeroCTA;
